



// let alumnos = ["Álvaro","Álex","Paula","Fernando","Felipe"];
// //debugger;

// for(let i = 0; i < alumnos.length; i++){

//     console.log(alumnos[i]);

// };


// let marcos = ["Marcos", 19, "Gimnasio", "Tenis", 1.83, ["1Nly","imagine dragons","lil peep"]];

// console.log(marcos);

// let nombre = prompt("Dame un nombre");

// let nombres = [];

// nombres.push(nombre);

// let nombre;

// let nombres = [];

// for(let i = 0; i < 10; i++){

//     nombre = prompt("Dame un nombre");
//     nombres.push(nombre);

// }

// console.log(nombres);


// let bebidas = ["agua","zumo de naranja","vodka","monster","bitter kas"];

// let comidas = ["paella", "cocido", "queso", "pizza", "hamburguesa", "doritos", "chocolate"];

// let despensa = bebidas.concat(comidas);

// console.log(despensa);

// let deportes = ["tenis", "baloncesto", "petanca", "e-sports","judo","taekwondo","sillonball"];

// console.log(deportes);

// let resultado = deportes.join("jajajaj saludos");

// console.log(resultado);

// deportes.reverse();

// console.log(deportes);

// deportes.unshift("ajedrez");

// console.log(deportes);

// console.log(deportes.sort());

// console.log(deportes.slice(0,3));

// let hobbiesDavid = ["ver series", "viajar money free", "juerga"];
// hobbiesDavid.splice(1, 1, "futbol")
// //El primer argumento es desde donde, el segundo cuantos elementos quitamos, a partir de ahí 
// //cada cosa que pongamos será lo que vamos a meter.

// console.log(hobbiesDavid);


// let numero = parseInt(prompt('Introduce el numero DNI'));
// let letra = prompt('Introduce la letra').toUpperCase();
// let DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// let operacion = numero % 23;

// //Fernando's way

// let resultado = (letra === DNI[operacion]) 
//     ? "El dni es correcto"
//     : "El dni es incorrecto"; 

// console.log(resultado);

//Laura's way

// let comprobante = (DNI[operacion]);

// if (comprobante === letra) {
//     console.log('el DNI es correcto');
// } else {
//     console.log('es incorrecto')
// }


// let edad = parseInt(prompt("Introduce tu edad."))
// let pais = prompt("Introduce país de residencia.")

//Ramon's way

// if (edad > 21) {
//     console.log('Puedes beber cerveza');
// } else if ((edad < 18) && (pais === "Europa")) {
//     console.log ("No puedes beber cerveza")
// } else if ((edad < 21) && (pais === "Estados Unidos") ){
//  console.log("No puedes beber cerveza")
// }

// if ((edad >= 18) && ((pais === "Europa") || (pais === "Indianapolis"))) {
//     console.log ("Si puedes beber cerveza")
// } else if (edad >= 21) {
//     console.log("Si puedes beber cerveza")
// } else {
//     console.log("No puedes beber cerveza")
// }




// Declaramos como constantes as edades de mayoría de edad legal
// const adultAge_USA = 21;
// const adultAge_UE = 18;
// // Pedimos los datos de edad y país al usuario
// let userCountry = prompt("¿Cuál es tu país de residencia?: (USA, UE)");

// let userAge = parseInt(prompt("¿Qué edad tienes actualmente?: "));

// switch (userCountry) {
//     case "USA":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_USA) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     case "UE":
//         console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_UE) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
//         break;
//     default:
//         console.log("Introduce un país correcto.");
// }

//INTERPOLACION

// let nombre = prompt("Dime un nombre");

// console.log(`Hola ${nombre}`);




//REPASO TUTORÍA 02/02/2023

/*


Vamos a crear una función que valide que un número de DNI y una letra son compatibles, para
ello necesitamos el siguiente algoritmo.

1. Realizar el módulo del número del DNI entre 23.
2. El resultado de ese módulo es la posición del siguiente array. TRWAGMYFPDXBNJZSQVHLCKET


*/

// let numeroDni = parseInt(prompt("Dame un número de DNI"));

// let letra = prompt("Dame la letra del DNI anterior").toUpperCase();

// let arrayLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

// let resultadoModulo = numeroDni % 23;

// // if(arrayLetras[resultadoModulo] === letra){
// //     console.log("El dni es correcto")
// // } else {
// //     console.log("El dni no es correcto")
// // }

// //Con una ternaria.....

// console.log(`El dni ${(arrayLetras[resultadoModulo] === letra) ? "es " : "no es "} correcto`);

/*


"Crea un programa que genere un número aleatorio del 1 al 100. 
Pide al usuario que adivine el número. 
El programa debe decir al usuario si el número que ha dicho es mayor o menor 
que el número aleatorio y seguir pidiéndole números hasta que lo adivine."

*/

let aleatorio = Math.ceil(Math.random() * 100);
let turno = true;

let numeroUsuario = parseInt(prompt("Intenta adivinar el número 1 | 100 -- Turno del player 1"));

let respuesta;
let intentosP1 = 1;
let intentosP2 = 1;

while(numeroUsuario !== aleatorio){

    if(turno){
        //Esto es como decir que turno es true.....
        intentosP1++;
    } else {
        intentosP2++;
    }

    turno = !turno;

    respuesta = `${(numeroUsuario > aleatorio) ? "El número es menor" : "El número es mayor"} | Le toca al ${(turno === true) ? "player 1" : "player 2 "}`;

    numeroUsuario = parseInt(prompt(respuesta));
};


console.log(`Bravo, el número oculto es ${aleatorio} y lo has acertado!!!.`);
console.log(`El player que lo ha acertado es ${(turno === true) ? `player 1 en ${intentosP1} intentos` : `player 2 ${intentosP2} intentos`}.`);