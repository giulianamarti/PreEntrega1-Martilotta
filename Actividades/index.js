//************************  ACTIVIDAD 1

//Crear un algoritmo JS simple

//Crea un script en JS que le solicite al usuario ingresar mínimo 1 dato y luego, mediante JavaScript, realiza operaciones sobre los mismos.

// let nombre = prompt('Ingresá tu nombre')
// let edad = prompt ('Ingresá tu edad')
// let salida = ('Tu nombre es: ' + nombre + ' y tu edad es: ' + edad)

// alert(salida)
// console.log(nombre)
// console.log(edad)
// console.log(salida)

//************************  ACTIVIDAD 2

///Crear un algoritmo con un condicional

///Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

// let numero = Number (prompt('Ingresá un número'))

// if (numero > 1000){
//     console.log('El numero es mayor a 1000')
// } else {
//     console.log('Tu numero ' + numero + ' no es mayor a 1000');
// }

///Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

// let texto = prompt('Ingresá un texto')
// let palabra = 'hola'

// if (texto === palabra) {
//     console.log('Tu palabra ' + texto +  ' es igual a ' + palabra)
// } else {
//     console.log('tu palabra es diferente')
// }

///Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

// let numero1 = Number (prompt('Ingresá un número'))

// if ((numero1 >= 10) && (numero1 <= 50)){
//     console.log('Tu numero está entre 10 y 50')
// } else {
//     console.log('Fuera de rango. Tu numero no se encuentra entre 10 y 50')
// }


/// CLASE 3 
/// Actividad 1

// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

// let numero = Number(prompt('Ingresa un número'))

// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i
//     console.log(numero + 'x' + i + '=' + resultado)    
// }

// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let entrada = prompt ('Ingresar algun dato: ')
// while (entrada != 'ESC') {
//     alert ('El usuario ingresó ' + entrada)
//     entrada = prompt ('Ingresá otro dato')
// }


// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces 

// let ingresarNumero = Number(prompt('Ingresá un numero'))

// for (let i = 0; i < ingresarNumero ; i++) {
//         console.log('Hola')    
//     }
