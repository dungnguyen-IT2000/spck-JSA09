// register.js

// Toggle hiển thị mật khẩu
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const icon = this;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Toggle hiển thị xác nhận mật khẩu
document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('confirmPassword');
    const icon = this;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Xử lý đăng ký
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Kiểm tra mật khẩu khớp
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Mật khẩu xác nhận không khớp!';
        errorMessage.style.display = 'block';
        return;
    }

    // Lấy danh sách users từ localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Kiểm tra email đã tồn tại và không bị xóa
    const existingUser = users.find(u => u.email === email && u.email !== 'none');

    if (existingUser) {
        errorMessage.textContent = 'Email này đã được sử dụng!';
        errorMessage.style.display = 'block';
        return;
    }

    // Lấy ngày hiện tại
    const createdDate = new Date().toISOString();

    // Tạo user mới
    const newUser = {
        username: username,
        email: email,
        password: password,
        createdDate: createdDate,
        isLoggedIn: false,
        orders: []
    };

    // Thêm user mới vào danh sách
    users.push(newUser);

    // Lưu vào localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Hiển thị thông báo thành công
    successMessage.textContent = 'Đăng ký thành công! Chuyển hướng đến trang đăng nhập...';
    successMessage.style.display = 'block';

    // Chuyển hướng sau 2 giây
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});