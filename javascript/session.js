// Get user data from session
const userData = JSON.parse(sessionStorage.getItem('user'));

// Check if userData and nombre exist
if (userData && userData.nombre) {
    document.getElementById('nombre').textContent = userData.nombre;
    document.getElementById('nombre_usuario').textContent = userData.nombre_usuario;

} else {
    console.log('No user data found in session storage');
}

if (!userData) {
    window.location.href = 'index.html';
}