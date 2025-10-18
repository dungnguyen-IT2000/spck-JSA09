// cart.js (CẬP NHẬT)

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

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
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

// Hiển thị giỏ hàng
function displayCart() {
    const cartContent = document.getElementById('cartContent');
    const cartData = getCartData();

    if (cartData.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Giỏ hàng trống</h2>
                <p>Hãy thêm sản phẩm vào giỏ hàng của bạn!</p>
                <a href="bikes.html" class="cta-button" style="margin-top: 1rem;">Mua sắm ngay</a>
            </div>
        `;
        return;
    }

    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 1000000 ? 0 : 50000;
    const total = subtotal + shipping;

    cartContent.innerHTML = `
        <div class="cart-items">
            <h2>Sản phẩm trong giỏ</h2>
            ${cartData.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/120?text=No+Image'">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p class="product-price">${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span style="font-weight: 600; font-size: 1.1rem;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="remove-btn" onclick="removeItem(${index})">
                                <i class="fas fa-trash"></i> Xóa
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-summary">
            <h3>Tổng đơn hàng</h3>
            <div class="summary-row">
                <span>Tạm tính:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Phí vận chuyển:</span>
                <span>${shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
            </div>
            ${shipping === 0 ? '<p style="color: #27ae60; font-size: 0.9rem; margin: 0.5rem 0;"><i class="fas fa-check-circle"></i> Đơn hàng trên 1.000.000đ được miễn phí ship!</p>' : ''}
            <div class="summary-row total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(total)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">
                <i class="fas fa-credit-card"></i> Thanh toán
            </button>
        </div>
    `;
}

// Cập nhật số lượng
function updateQuantity(index, change) {
    let cartData = getCartData();
    cartData[index].quantity += change;

    if (cartData[index].quantity <= 0) {
        cartData.splice(index, 1);
    }

    saveCartData(cartData);
    updateCartCount();
    displayCart();
}

// Xóa sản phẩm
function removeItem(index) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        let cartData = getCartData();
        cartData.splice(index, 1);
        saveCartData(cartData);
        updateCartCount();
        displayCart();
    }
}

// Thanh toán
function checkout() {
    const currentUser = checkAuth();

    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán!');
        window.location.href = 'login.html';
        return;
    }

    const cartData = getCartData();
    if (cartData.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }

    // Chuyển đến trang checkout
    window.location.href = 'checkout.html';
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    displayCart();
    updateCartCount();
});