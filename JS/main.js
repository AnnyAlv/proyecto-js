let nombre = prompt('Hola👋 como te llamas?');

alert('Muy bien 👍 ' + nombre + ' un placer, cuantos años tienes?');
let edad = prompt('No mientas... 🫣');
alert('Bien ' + nombre + ' espera un momento ...🤔');

if (edad >= 18) {
    alert('Bienvenid@ 😜 ' + 'puedes continuar navegando');
} else if (edad <= 17) {
    for (let edad = 17; edad <= 18; edad)
        alert('Ups ' + nombre + ' no deberias seguir en el navegador 😔');
} else {
    alert('No me has dicho tu edad aun ' + nombre);
}

function datoParticipante(nombre, edad) {

    const numeroSecreto = 1;

    const maxIntentos = 3;

    for (let intento = 1; intento <= maxIntentos; intento++) {

        const numeroAdivinado = parseInt(prompt("Juguemos un rato, adivina el número secreto (entre 1 y 10):"));

        if (numeroAdivinado === numeroSecreto) {
            alert("¡Felicitaciones! Adivinaste el número secreto.");
            break;
        } else if (intento === maxIntentos) {
            alert("Lo siento, has agotado todos tus intentos.");
            alert("El número secreto era:" + numeroSecreto);
        } else {
            alert("Incorrecto. Intenta nuevamente.");
        }
    }
    datoParticipante(nombre, edad);
}


