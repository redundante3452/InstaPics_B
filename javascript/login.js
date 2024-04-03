const formularioLogin = document.querySelector("#formulario-login")
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const Users = JSON.parse(localStorage.getItem("users")) || []

    const validUser = Users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return Swal.fire({
            icon: "error",
            title: "Usuario no encontrado",
            text: "campos vacíos o incorrectos",
          });
    }
    alert('Bienvenido ' + validUser.nombre_usuario)
    sessionStorage.setItem('user', JSON.stringify(validUser)); 
    window.location.href = "home.html"

});