const formularioLogin = document.querySelector("#formulario-login")
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const Users = JSON.parse(localStorage.getItem("users")) || []

    const validUser = Users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return alert("Usuario o contraseña incorrectos");
    }
    alert('Bienvenido ' + validUser.nombre_usuario)
    window.location.href = "home.html"

});