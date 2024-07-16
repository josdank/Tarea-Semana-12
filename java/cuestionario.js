document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-cuestionario').addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Validar cada pregunta
        const pregunta1 = document.getElementById('pregunta1').value;
        if (!pregunta1) {
            isValid = false;
            document.getElementById('error-pregunta1').classList.remove('hidden');
        } else {
            document.getElementById('error-pregunta1').classList.add('hidden');
        }

        const pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
        if (!pregunta2) {
            isValid = false;
            document.getElementById('error-pregunta2').classList.remove('hidden');
        } else {
            document.getElementById('error-pregunta2').classList.add('hidden');
        }

        const pregunta3 = document.getElementById('pregunta3').value;
        if (!pregunta3) {
            isValid = false;
            document.getElementById('error-pregunta3').classList.remove('hidden');
        } else {
            document.getElementById('error-pregunta3').classList.add('hidden');
        }

        const pregunta4 = document.querySelectorAll('input[name="pregunta4"]:checked');
        if (pregunta4.length === 0) {
            isValid = false;
            document.getElementById('error-pregunta4').classList.remove('hidden');
        } else {
            document.getElementById('error-pregunta4').classList.add('hidden');
        }

        const pregunta5 = document.getElementById('pregunta5').value;
        if (!pregunta5) {
            isValid = false;
            document.getElementById('error-pregunta5').classList.remove('hidden');
        } else {
            document.getElementById('error-pregunta5').classList.add('hidden');
        }

        if (isValid) {
            const puntaje = evaluarCuestionario(pregunta1, pregunta2.value, pregunta3, pregunta4, pregunta5);
            mostrarResultado(puntaje, pregunta1, pregunta2.value, pregunta3, pregunta4, pregunta5);
        }
    });

    function evaluarCuestionario(pregunta1, pregunta2, pregunta3, pregunta4, pregunta5) {
        let puntaje = 0;

        // Evaluar respuestas y calcular puntaje
        if (pregunta1.toLowerCase() === 'marte') puntaje += 2;
        if (pregunta2 === 'Verdadero') puntaje += 2;
        if (pregunta3 === 'opcion2') puntaje += 2;
        if (pregunta4.length > 1 && pregunta4.length <= 2) {
            const correctas = ['Opción 1', 'Opción 3'];
            if (Array.from(pregunta4).every(option => correctas.includes(option.value))) {
                puntaje += 2;
            }
        }
        if (pregunta5 === 'opcion2') puntaje += 2;

        return puntaje;
    }

    function mostrarResultado(puntaje, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5) {
        let mensaje;
        let color;

        // Determinar el mensaje y color basado en el puntaje
        if (puntaje < 5) {
            mensaje = 'Insuficiente';
            color = 'red';
        } else if (puntaje < 7) {
            mensaje = 'Regular';
            color = 'orange';
        } else if (puntaje < 9) {
            mensaje = 'Buena';
            color = 'green';
        } else if (puntaje <= 10) {
            mensaje = '¡Sobresaliente!';
            color = 'blue';
        } else {
            mensaje = 'Puntaje inválido';
            color = 'gray';
        }

        // Mostrar el resultado
        document.getElementById('form-cuestionario').classList.add('hidden');
        document.getElementById('resultado-texto').innerText = `Tu nota es ${puntaje}. ${mensaje}`;
        document.getElementById('resultado-texto').style.color = color;
        document.getElementById('resultado').classList.remove('hidden');

        // Mostrar las respuestas llenadas
        const respuestasHtml = `
            <h2>Respuestas del Cuestionario</h2>
            <p><strong>Pregunta 1:</strong> ${pregunta1}</p>
            <p><strong>Pregunta 2:</strong> ${pregunta2}</p>
            <p><strong>Pregunta 3:</strong> ${pregunta3}</p>
            <p><strong>Pregunta 4:</strong> ${Array.from(pregunta4).map(checkbox => checkbox.labels[0].innerText).join(', ')}</p>
            <p><strong>Pregunta 5:</strong> ${pregunta5}</p>
        `;
        document.getElementById('respuestas-texto').innerHTML = respuestasHtml;
        document.getElementById('respuestas').classList.remove('hidden');
    }
});
