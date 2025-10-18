// bikes-page.js (CẬP NHẬT đầy đủ với Sidebar Filter)

let allBikes = [];
let currentSort = 'all';
let selectedCategories = [];
let selectedPriceRange = null;

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

// Sắp xếp xe đạp
function sortBikes(bikes, sortType) {
    const sorted = [...bikes];

    switch (sortType) {
        case 'low-high':
            return sorted.sort((a, b) => a.price - b.price);
        case 'high-low':
            return sorted.sort((a, b) => b.price - a.price);
        case 'featured':
        case 'all':
        default:
            return sorted;
    }
}

// Áp dụng tất cả filter và sort
function applyFiltersAndSort() {
    let filtered = [...allBikes];

    // Lọc theo category
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(bike => selectedCategories.includes(bike.category));
    }

    // Lọc theo khoảng giá
    if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        filtered = filtered.filter(bike => bike.price >= min && bike.price <= max);
    }

    // Sắp xếp
    filtered = sortBikes(filtered, currentSort);

    displayBikes(filtered);
}

// Tải danh sách xe đạp
async function loadBikes() {
    try {
        const response = await fetch('http://localhost:3000/api/products/all');
        const products = await response.json();

        // ✅ Chỉ lấy sản phẩm có category chứa "bikes"
        allBikes = products.filter(p => p.category && p.category.toLowerCase().includes('bikes'));

        // Nếu muốn load tất cả sản phẩm thì dùng dòng dưới thay thế:
        // allBikes = products;

        applyFiltersAndSort();
    } catch (error) {
        console.error('Lỗi khi tải xe đạp:', error);
        document.getElementById('bikesGrid').innerHTML =
            '<p style="color: white; text-align: center;">Không thể tải danh sách xe đạp. Vui lòng kiểm tra server.</p>';
    }
}

console
// Hiển thị xe đạp
function displayBikes(bikes) {
    const grid = document.getElementById('bikesGrid');

    if (bikes.length === 0) {
        grid.innerHTML = '<p style="color: white; text-align: center; grid-column: 1/-1;">Không tìm thấy xe đạp nào.</p>';
        return;
    }

    grid.innerHTML = bikes.map(bike => `
        <div class="product-card">
            <img src="${bike.image}" alt="${bike.name}" class="product-image" />
            <div class="product-info">
                <div class="product-category">${bike.category}</div>
                <h3 class="product-name">${bike.name}</h3>
                <div class="product-price">${formatPrice(bike.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${bike.id})">
                    <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
                </button>
            </div>
        </div>
    `).join('');
    console.log("Bike list:", bikes);
}

// Xử lý thay đổi category checkbox
function handleCategoryChange() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
    applyFiltersAndSort();
}

// Xử lý thay đổi price range radio
function handlePriceRangeChange() {
    const selectedRadio = document.querySelector('input[name="price-range"]:checked');
    selectedPriceRange = selectedRadio ? selectedRadio.value : null;
    applyFiltersAndSort();
}

// Xóa tất cả filter
function clearAllFilters() {
    // Xóa category checkboxes
    document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = false);

    // Xóa price range radio
    document.querySelectorAll('input[name="price-range"]').forEach(radio => radio.checked = false);

    // Reset sort select
    document.getElementById('sort-select').value = 'all';

    // Reset biến
    selectedCategories = [];
    selectedPriceRange = null;
    currentSort = 'all';

    // Hiển thị lại tất cả
    applyFiltersAndSort();
}

// Thay đổi sort
function changeSortOrder(sortType) {
    currentSort = sortType;
    applyFiltersAndSort();
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
            showToast(`Đã cập nhật số lượng "${product.name}" trong giỏ hàng!`, 'success');
        } else {
            cartData.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
        }

        saveCartData(cartData);
        updateCartCount();
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ:', error);
        showToast('Không thể thêm vào giỏ hàng', 'error');
    }
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    loadBikes();
    updateCartCount();

    // Event listener cho sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            changeSortOrder(this.value);
        });
    }

    // Event listeners cho category checkboxes
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryChange);
    });

    // Event listeners cho price range radios
    document.querySelectorAll('input[name="price-range"]').forEach(radio => {
        radio.addEventListener('change', handlePriceRangeChange);
    });
});