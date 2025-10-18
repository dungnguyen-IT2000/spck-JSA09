// script.js - Trang chủ (CẬP NHẬT)

// Kiểm tra đăng nhập
function checkAuth() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(u => u.isLoggedIn);

    const authLink = document.getElementById('authLink');
    if (currentUser) {
        authLink.innerHTML = `<a href="profile.html"><i class="fas fa-user"></i> ${currentUser.username}</a>`;
    } else {
        authLink.innerHTML = '<a href="login.html">Đăng nhập</a>';
    }

    return currentUser;
}

// Lấy giỏ hàng của user hiện tại
function getCartData() {
    const currentUser = checkAuth();
    if (!currentUser) return [];

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === currentUser.email);

    return user && user.cart ? user.cart : [];
}

// Lưu giỏ hàng của user hiện tại
function saveCartData(cartData) {
    const currentUser = checkAuth();
    if (!currentUser) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);

    if (userIndex !== -1) {
        users[userIndex].cart = cartData;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Hiển thị toast notification
function showToast(message, type = 'success') {
    const oldToast = document.querySelector('.toast');
    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        </div>
        <div class="toast-message">${message}</div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const cartData = getCartData();
        const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Hiển thị sản phẩm nổi bật
async function displayFeaturedProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products/all');
        const products = await response.json();

        const featuredProducts = products.filter(p => p.featured).slice(0, 6);

        const container = document.getElementById('featuredProducts');
        if (!container) return;

        container.innerHTML = featuredProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name || product.title}" class="product-image" />
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name || product.title}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
        const container = document.getElementById('featuredProducts');
        if (container) {
            container.innerHTML = '<p style="color: white; text-align: center;">Không thể tải sản phẩm. Vui lòng kiểm tra server.</p>';
        }
    }
}

// Thêm vào giỏ hàng
async function addToCart(productId) {
    const currentUser = checkAuth();
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`);
        const product = await response.json();

        let cartData = getCartData();
        const existingItem = cartData.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
            showToast(`Đã cập nhật số lượng "${product.name || product.title}" trong giỏ hàng!`, 'success');
        } else {
            cartData.push({
                id: product.id,
                name: product.name || product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            showToast(`Đã thêm "${product.name || product.title}" vào giỏ hàng!`, 'success');
        }

        saveCartData(cartData);
        updateCartCount();
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ:', error);
        showToast('Không thể thêm vào giỏ hàng', 'error');
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    displayFeaturedProducts();
    updateCartCount();
});