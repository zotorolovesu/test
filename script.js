document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    
    // Simple validation for demonstration purposes
    if (username === 'admin' && password === 'password') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login successful!';
    } else {
        messageElement.textContent = 'Invalid username or password.';
    }
});
