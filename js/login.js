const storedUser = 'Danielalmanza';
const storedPassword = 'Dan2003';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('correoLogin').value;
    const password = document.getElementById('passLogin').value;

    if (email === storedUser && password === storedPassword) {
        window.location.href = './cuenta.html';
    } else {
        alert('El usuario o la contraseña es incorrecta');
    }
});