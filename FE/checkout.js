// checkout.js (CẬP NHẬT)

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

// Xóa giỏ hàng của user hiện tại
function clearCartData() {
    const currentUser = checkAuth();
    if (!currentUser) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);

    if (userIndex !== -1) {
        users[userIndex].cart = [];
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

// Hiển thị tóm tắt đơn hàng
function displayOrderSummary() {
    const currentUser = checkAuth();

    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán!');
        window.location.href = 'login.html';
        return;
    }

    const cartData = getCartData();

    if (cartData.length === 0) {
        alert('Giỏ hàng trống!');
        window.location.href = 'cart.html';
        return;
    }

    // Tự động điền email của user
    document.getElementById('email').value = currentUser.email;

    const orderItems = document.getElementById('orderItems');
    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 1000000 ? 0 : 50000;
    const total = subtotal + shipping;

    // Hiển thị danh sách sản phẩm
    orderItems.innerHTML = cartData.map(item => `
        <div class="order-item-summary">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60?text=No+Image'">
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-qty">SL: ${item.quantity}</div>
            </div>
            <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
        </div>
    `).join('');

    // Hiển thị tổng tiền
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = shipping === 0 ? 'Miễn phí' : formatPrice(shipping);
    document.getElementById('total').textContent = formatPrice(total);
}

// Hoàn tất đơn hàng
function completeOrder() {
    const currentUser = checkAuth();

    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán!');
        window.location.href = 'login.html';
        return;
    }

    // Lấy thông tin form
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const note = document.getElementById('note').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    // Validate
    if (!fullName || !phone || !email || !address) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        return;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        alert('Số điện thoại không hợp lệ!');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    const cartData = getCartData();

    if (cartData.length === 0) {
        alert('Giỏ hàng trống!');
        window.location.href = 'cart.html';
        return;
    }

    // Tạo đơn hàng
    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 1000000 ? 0 : 50000;
    const total = subtotal + shipping;

    const order = {
        orderId: Date.now().toString().slice(-8),
        date: new Date().toISOString(),
        items: [...cartData],
        total: total,
        shippingInfo: {
            fullName: fullName,
            phone: phone,
            email: email,
            address: address,
            note: note
        },
        paymentMethod: paymentMethod,
        status: 'Đang xử lý'
    };

    // Lưu đơn hàng vào user
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);

    if (userIndex !== -1) {
        if (!users[userIndex].orders) {
            users[userIndex].orders = [];
        }
        users[userIndex].orders.push(order);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Xóa giỏ hàng
    clearCartData();
    updateCartCount();

    // Hiển thị thông báo
    let paymentText = '';
    switch (paymentMethod) {
        case 'cod':
            paymentText = 'Thanh toán khi nhận hàng';
            break;
        case 'bank':
            paymentText = 'Chuyển khoản ngân hàng';
            break;
        case 'momo':
            paymentText = 'Ví điện tử MoMo';
            break;
    }

    alert(`✅ Đặt hàng thành công!\n\nMã đơn hàng: #${order.orderId}\nTổng tiền: ${formatPrice(total)}\nPhương thức: ${paymentText}\n\nCảm ơn bạn đã mua hàng!`);
    window.location.href = 'profile.html';
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', function () {
    displayOrderSummary();
    updateCartCount();
});