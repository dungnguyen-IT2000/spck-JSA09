// accessories-page.js (ĐÃ FIX HOÀN TOÀN)

let allAccessories = [];
let currentSort = 'featured';
let selectedCategories = [];
let selectedPriceRange = null;

// ✅ Kiểm tra đăng nhập
function checkAuth() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(u => u.isLoggedIn);

    const authLink = document.getElementById('authLink');
    if (authLink) {
        if (currentUser) {
            authLink.innerHTML = `<a href="profile.html"><i class="fas fa-user"></i> ${currentUser.username}</a>`;
        } else {
            authLink.innerHTML = '<a href="login.html">Đăng nhập</a>';
        }
    }

    return currentUser;
}

// ✅ Lấy giỏ hàng của user hiện tại
function getCartData() {
    const currentUser = checkAuth();
    if (!currentUser) return [];

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === currentUser.email);

    return user && user.cart ? user.cart : [];
}

// ✅ Lưu giỏ hàng của user hiện tại
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

// ✅ Hiển thị thông báo
function showToast(message, type = 'success') {
    const oldToast = document.querySelector('.toast');
    if (oldToast) oldToast.remove();

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

// ✅ Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const cartData = getCartData();
        const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// ✅ Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// ✅ Sắp xếp phụ kiện
function sortAccessories(accessories, sortType) {
    const sorted = [...accessories];
    switch (sortType) {
        case 'low-high':
            return sorted.sort((a, b) => a.price - b.price);
        case 'high-low':
            return sorted.sort((a, b) => b.price - a.price);
        default:
            return sorted;
    }
}

// ✅ Áp dụng filter và sort
function applyFiltersAndSort() {
    let filtered = [...allAccessories];

    if (selectedCategories.length > 0) {
        filtered = filtered.filter(acc => selectedCategories.includes(acc.category));
    }

    if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        filtered = filtered.filter(acc => acc.price >= min && acc.price <= max);
    }

    filtered = sortAccessories(filtered, currentSort);
    displayAccessories(filtered);
}

// ✅ Load danh sách phụ kiện
async function loadAccessories() {
    try {
        const response = await fetch('http://localhost:3000/api/products/all');
        const products = await response.json();

        // 🧩 CHỈ LẤY PHỤ KIỆN: dựa vào category (ví dụ: 'helmet', 'bag', 'tool', 'lock', ...)
        const accessoryKeywords = [
            'bottle', 'helmet', 'computer', 'light', 'lock',
            'pump', 'tool', 'fender', 'rack', 'bag',
            'clothing', 'glove', 'shoe', 'trainer', 'wheelset'
        ];

        allAccessories = products.filter(p =>
            p.category &&
            accessoryKeywords.some(keyword =>
                p.category.toLowerCase().includes(keyword)
            )
        );

        applyFiltersAndSort();
    } catch (error) {
        console.error('Lỗi khi tải phụ kiện:', error);
        document.getElementById('accessoriesGrid').innerHTML =
            '<p style="color: white; text-align: center;">Không thể tải danh sách phụ kiện. Vui lòng kiểm tra server.</p>';
    }
}

// ✅ Hiển thị phụ kiện
function displayAccessories(accessories) {
    const grid = document.getElementById('accessoriesGrid');

    if (!grid) return;
    if (accessories.length === 0) {
        grid.innerHTML = '<p style="color: white; text-align: center;">Không tìm thấy phụ kiện nào.</p>';
        return;
    }

    grid.innerHTML = accessories.map(acc => `
        <div class="product-card">
            <img src="${acc.image}" alt="${acc.name || acc.title}" class="product-image" />
            <div class="product-info">
                <div class="product-category">${acc.category}</div>
                <h3 class="product-name">${acc.name || acc.title}</h3>
                <div class="product-price">${formatPrice(acc.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${acc.id || acc._id}')">
                    <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
                </button>
            </div>
        </div>
    `).join('');
}

// ✅ Xử lý filter
function handleCategoryChange() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
    applyFiltersAndSort();
}

function handlePriceRangeChange() {
    const selectedRadio = document.querySelector('input[name="price-range"]:checked');
    selectedPriceRange = selectedRadio ? selectedRadio.value : null;
    applyFiltersAndSort();
}

function clearAllFilters() {
    document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="price-range"]').forEach(radio => radio.checked = false);
    document.getElementById('sort-select').value = 'featured';
    selectedCategories = [];
    selectedPriceRange = null;
    currentSort = 'featured';
    applyFiltersAndSort();
}

function changeSortOrder(sortType) {
    currentSort = sortType;
    applyFiltersAndSort();
}

// ✅ Thêm vào giỏ hàng
async function addToCart(productId) {
    const currentUser = checkAuth();
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'error');
        setTimeout(() => window.location.href = 'login.html', 1500);
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
                id: product.id || product._id,
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

// ✅ Khởi tạo
document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    loadAccessories();
    updateCartCount();

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            changeSortOrder(this.value);
        });
    }

    document.querySelectorAll('input[name="category"]').forEach(cb => {
        cb.addEventListener('change', handleCategoryChange);
    });

    document.querySelectorAll('input[name="price-range"]').forEach(radio => {
        radio.addEventListener('change', handlePriceRangeChange);
    });
});
