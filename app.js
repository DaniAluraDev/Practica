// Ejercicio 1 
/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/
alert ('Actividad 1');
alert ('Bienvenido al juego de los días de la semana');
let finSemanaS = ('Sabado');
let finSemanaD = ('Domingo');
let dia = prompt ('¿Hola, que día de la semana es hoy?');

if (dia == finSemanaS || dia == finSemanaD){
    alert ('Buen fin de Semana!');
   }   else {
    alert ('¡Buena Semana!');

    } 
//Ejercicio 2
/* Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/
alert ('Actividad 2');
alert("¡Bienvenido! Vamos a verificar si tu numero es positivo o negativo");

let num = parseFloat(prompt('Ingresa tu numero: '));

if (num > 0) {
    alert('Tu numero es positivo');
} else if (num < 0) {
    alert('Tu numero es negativo');
} else {
    alert('Tu numero es cero');
}
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
alert ('Actividad 3');
alert("¡Bienvenido! Revisemos tu Score");

let nume = parseFloat(prompt('Ingresa tu numero: '));

if (nume >= 100) {
    alert('¡Felicidades has ganado!');
} else {
    alert('Sigue intentando');
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
alert ('Actividad 4');
let numer = parseFloat(prompt('Ingresa tu numero: '));
let saldo = numer - 100000

alert ('Tu saldo es: ' + saldo);


//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt ('Ingresa tu nombre: ');
alert ('Bienvenido al sistema ' + nombre);