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
document.getElementById('horas').addEventListener('change', function() {
    const horas = parseInt(this.value);
    const precioTotal = horas * 10;
    document.getElementById('precioTotal').textContent = 'Precio Total: $' + precioTotal;
});
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('nombre').value;
    const age = parseInt(document.getElementById('edad').value);
    const email = document.getElementById('email').value;
    const country = document.getElementById('pais').value;
    const course = document.getElementById('curso').value;
    const hours = parseInt(document.getElementById('horas').value);
    
    const formError = document.getElementById('formError');
    const formThankYou = document.getElementById('formThankYou');
    
    // Ocultar mensajes de error o éxito antes de la validación
    document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));
    formThankYou.classList.add('hidden');

    // Validaciones
    let isValid = true;

    if (!name) {
        document.getElementById('nombreError').classList.remove('hidden');
        isValid = false;
    }

    if (!document.querySelector('input[name="genero"]:checked')) {
        document.getElementById('generoError').classList.remove('hidden');
        isValid = false;
    }

    if (isNaN(age) || age < 0) {
        document.getElementById('edadError').classList.remove('hidden');
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    if (!country) {
        document.getElementById('paisError').classList.remove('hidden');
        isValid = false;
    }

    if (!document.getElementById('hobbies').value) {
        document.getElementById('hobbiesError').classList.remove('hidden');
        isValid = false;
    }

    if (!course) {
        document.getElementById('cursoError').classList.remove('hidden');
        isValid = false;
    }

    if (!hours) {
        document.getElementById('horasError').classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        if (age < 18) {
            formError.classList.add('hidden');
            formThankYou.classList.remove('hidden');
        } else {
            formThankYou.classList.add('hidden');
            alert('Formulario enviado correctamente.');
            window.location.href = "cuestionario.html";
        }
    } else {
        formThankYou.classList.add('hidden');
        formError.classList.remove('hidden');
    }
});

function mostrarError(campo, mensaje) {
    document.getElementById(campo + 'Error').textContent = mensaje;
    document.getElementById(campo + 'Error').classList.remove('hidden');
    document.getElementById(campo).classList.add('error');
}

function ocultarError(campo) {
    document.getElementById(campo + 'Error').classList.add('hidden');
    document.getElementById(campo).classList.remove('error');
}
