// profile.js

// Kiểm tra đăng nhập
function checkAuth() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(u => u.isLoggedIn);

    if (!currentUser) {
        window.location.href = 'login.html';
        return null;
    }

    return currentUser;
}

// Format ngày
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Hiển thị thông tin profile
function displayProfile() {
    const currentUser = checkAuth();
    if (!currentUser) return;

    // Hiển thị avatar với chữ cái đầu
    document.getElementById('profileAvatar').textContent = currentUser.username.charAt(0).toUpperCase();

    // Hiển thị thông tin cơ bản
    document.getElementById('profileUsername').textContent = currentUser.username;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileCreatedDate').textContent = formatDate(currentUser.createdDate);

    // Hiển thị đơn hàng
    displayOrders(currentUser.orders || []);
}

// Hiển thị danh sách đơn hàng
function displayOrders(orders) {
    const ordersList = document.getElementById('ordersList');

    if (orders.length === 0) {
        ordersList.innerHTML = '<div class="empty-orders"><i class="fas fa-shopping-bag"></i><p>Bạn chưa có đơn hàng nào</p></div>';
        return;
    }

    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <h4><i class="fas fa-receipt"></i> Đơn hàng #${order.orderId}</h4>
            <p><i class="fas fa-calendar"></i> Ngày mua: ${formatDate(order.date)}</p>
            <p><i class="fas fa-money-bill-wave"></i> Tổng tiền: ${formatPrice(order.total)}</p>
            <details style="margin-top: 1rem;">
                <summary style="cursor: pointer; color: #667eea; font-weight: 600;">Xem chi tiết</summary>
                <div style="margin-top: 1rem; padding-left: 1rem;">
                    ${order.items.map(item => `
                        <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                            <strong>${item.name}</strong><br>
                            Số lượng: ${item.quantity} - Giá: ${formatPrice(item.price)}
                        </div>
                    `).join('')}
                </div>
            </details>
        </div>
    `).join('');
}

// Đăng xuất
function logout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.forEach(u => u.isLoggedIn = false);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'index.html';
    }
}

// Xác nhận xóa tài khoản
function confirmDeleteAccount() {
    const confirmed = confirm('⚠️ CẢNH BÁO: Bạn có chắc chắn muốn xóa tài khoản?\n\nHành động này sẽ:\n- Xóa tất cả thông tin cá nhân\n- Xóa lịch sử đơn hàng\n- Email của bạn sẽ có thể được sử dụng lại\n\nBạn có muốn tiếp tục?');

    if (confirmed) {
        const doubleConfirm = confirm('Xác nhận lần cuối: Bạn THỰC SỰ muốn xóa tài khoản?');
        if (doubleConfirm) {
            deleteAccount();
        }
    }
}

// Xóa tài khoản
function deleteAccount() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(u => u.isLoggedIn);

    if (currentUser) {
        // Reset email thành 'none' để có thể sử dụng lại
        currentUser.email = 'none';
        currentUser.isLoggedIn = false;
        currentUser.username = 'deleted_user';
        currentUser.password = '';
        currentUser.orders = [];

        // Lưu lại
        localStorage.setItem('users', JSON.stringify(users));

        alert('Tài khoản đã được xóa thành công. Email của bạn có thể được sử dụng lại.');
        window.location.href = 'index.html';
    }
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', displayProfile);