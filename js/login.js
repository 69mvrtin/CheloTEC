// Obtener los valores del formulario de inicio de sesión
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Verificar si los valores coinciden con los almacenados en el local storage
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

if (username === storedUsername && password === storedPassword) {
    // Iniciar sesión exitosamente
    console.log('Inicio de sesión exitoso');
} else {
    // Mostrar mensaje de error
    console.log('Credenciales inválidas');
}