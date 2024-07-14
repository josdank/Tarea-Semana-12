function login1 () {
    window.location.href = "login.html";
}

function register1 () {
    window.location.href = "register.html";
}

//función para el login 
function login (){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Java" && password === "123456") {
        alert("Bienvenido al sistema")
        window.location.href = "encuesta.html";
    }if (!username || !password){
        alert("Por favor, Ingrese todos los campos")
    }else{
        document.getElementById('error-message').innerText = "Inserte correctamente sus datos";
    }
}

/*
//Función para el formulario
function registrarUsuario() {

    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let country = document.getElementById("country").value;
        let city = document.getElementById("city").value;
        let address = document.getElementById("address").value;

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuarioExistente = usuarios.find(u => u.username === username);

        if (usuarioExistente) {
            alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
            return;
        }


        let nuevoUsuario = {
            username,
            password,
            email,
            phone,
            dob,
            gender,
            country,
            city,
            address
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));


        alert("Usuario registrado exitosamente");
        document.getElementById("registerForm").reset();
    });
}

// Función para regresar a la página anterior (histórico del navegador)
function regresarPaginaAnterior() {
    window.history.back();
}*/
