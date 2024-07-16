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
