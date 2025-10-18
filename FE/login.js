// login.js

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

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Lấy danh sách users từ localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Tìm user với email và password khớp
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Đặt tất cả users về trạng thái không đăng nhập
        users.forEach(u => u.isLoggedIn = false);

        // Đánh dấu user hiện tại đã đăng nhập
        user.isLoggedIn = true;

        // Lưu lại
        localStorage.setItem('users', JSON.stringify(users));

        // Chuyển hướng về trang chủ
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Email hoặc mật khẩu không đúng!';
        errorMessage.style.display = 'block';
    }
});