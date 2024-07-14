function validar() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    
    if (user === "Java" && password === "123456") {
        alert("Bienvenido al sistema");
        window.location.href = "encuesta.html";
        return true;
    } else {
        alert("Usuario incorrecto");
        return false;
    }
}

document.getElementById('estudiantes').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nombre').value;
    const age = parseInt(document.getElementById('edad').value);
    const email = document.getElementById('correo').value;
    const country = document.getElementById('residencia').value;
    const course = document.getElementById('curso').value;
    const hours = parseInt(document.getElementById('horas').value);


    if (name && age >= 18 && email && country && course && hours) {
        alert('Formulario enviado correctamente.');
        
    } else {
        document.getElementById('formError').classList.remove('hidden');
    }
});