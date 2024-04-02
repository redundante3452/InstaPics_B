const formularioRegister = document.querySelector("#formulario-register")
formularioRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value
    const nombre = document.querySelector("#nombre").value
    const nombre_usuario = document.querySelector("#nombre_usuario").value
    const password = document.querySelector("#password").value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if (isUserRegistered) {
        return alert("El usuario ya esta registrado");
    }
    Users.push({email: email, nombre: nombre, nombre_usuario: nombre_usuario, password: password,})

    localStorage.setItem('users', JSON.stringify(Users))
    alert("Usuario registrado correctamente")
    window.location.href = "index.html"
});
