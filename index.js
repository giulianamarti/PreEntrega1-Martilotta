// // // console.log('Hola Giuliana')

// // ///Palabras reservadas - Sintaxis
// // ///var - content - typeof

// // ///variables y valores --> caja ---> tipo de datos (string)

// // const nombre = 'Giuli'
// // const apellido = 'Martilotta'
// // // const CURSO = "JavaScript"
// // // const curso = 'No es Java'

// // // let      ---> se puede reasignar los valores de la variable
// // // const    ---> NO se puede reasignar los valores de la variable

// // let edad = 98
// // const edad1 = 73
// // edad = 28

// // // console.log(nombre)
// // // console.log(apellido)
// // // console.log(edad)

// // let numero = 1
// // let numero2 = 2
// // const NUMERO3 = 3

// // let resultado = numero + numero2
// // let resultadoResta = numero - numero2
// // let multiplicacion = numero * NUMERO3

// // ///operaciones basicas con string

// // let texto1 = 'Giuli'
// // let texto2 = 'Martilotta'
// // const texto3 = ' '

// // let resultadoSuma = texto1 + texto2
// // let resultadoSuma1 = texto1 + 1
// // let resultadoSuma2 = texto1 + texto3 + texto2

// // // console.log(resultadoSuma)
// // // console.log(resultadoSuma1)
// // console.log(resultadoSuma2)


// // // let NombreIngresadoPrompt = prompt('Ingresar Nombre')
// // // console.log(NombreIngresadoPrompt)

// // ///ALERT ---> Muestra una leyenda
// // // alert ('Bienvenido a esta pagina')

// // let entrada = prompt('Ingrese un Nombre: ')
// // let salida = 'El nombre ingresado es: ' + entrada
// // console.log(salida)
// // alert(salida)


// // let nombre = prompt('Ingresá tu nombre')
// // let edad = prompt ('Ingresá tu edad')
// // let salida = ('Tu nombre es: ' + nombre + ' y tu edad es: ' + edad)

// // alert(salida)
// // console.log(salida)

//  console.log('Hello Coders')


 
 
/// ++++++++++++ CLASE 2 +++++++++++++++++++++++

//  const nombre = 'Giuli'
//  const edad = 28
//  const variableConst = true
//  if (variableConst) {
//      console.log(typeof variableConst)

//  }


///const
// let numero = 3
// let condition = true




// console.log('Hola Comision 54890 1')
// console.log('Hola Comision 54890 2')

// //estructura de control para evaluar una condicion 
// //if(condicion) {bloque} 
// if (numero === 4){
//     console.log('Hola Comision 54890 3')
//     console.log('Hola Comision 54890 4')
// }

// let unColor = 'verde'

// if (unColor === 'rojo'){
//     console.log('El color es rojo')
// } else {
//     console.log('El color no es rojo')
// }

// let nombreUsuario = prompt('Ingrese nombre de usuario')
// console.log(nombreUsuario)

// if (nombreUsuario === ""){
//     alert("No ingresaste el nombre")
// } else {
//     alert('El nombre es ' + nombreUsuario)
// }

// let edad = Number(prompt('Ingrese su edad'))
// console.log(edad)
// console.log(typeof edad)

// if (edad >=18) {
//     alert("Sos mayor de edad")
// } else {
//     alert('Sos menors de edad')
// }


// let edad = 28
// let condition = edad < 18
// console.log(edad)
// console.log(typeof condition)

// if (condition) {
//     alert("Sos menor de edad")
// } else if (edad === 18){
//     alert('La edad es 18')
// } else if (edad > 18){
//     alert('Sos mayor de edad')
// }


// let nombreIngresado = prompt ('Ingresa el nombre')
// let apellidoIngresado = prompt ('Ingresa el apellido')

// if ((nombreIngresado != "") || (apellidoIngresado != "")){
//     console.log ('Nombre: ' + nombreIngresado + ' Apellido: ' + apellidoIngresado)
// } else {
//     console.log ('error: no ha ingresado nombre y apellido')
// }



/// ++++++++++++ CLASE 3 +++++++++++++++++++++++

// for (let contador = 11 ; contador <21; contador++){
//     console.log(contador)
// }


// let numeroIngresado = Number (prompt ('Ingresar un numero'))

// for (let i = 1; i <= 10; i++) {
//     let resultado = numeroIngresado * i
//     console.log(numeroIngresado + 'x' + i + '=' + resultado)    
// }

// for (let index = 1; index <= 10; index++ ){
//     if (index === 5){
//         continue
//     }
//     console.log(index)
// }

//While ---> se cumple una condicion

// let entrada = prompt ('Ingresar algun dato: ')
// while (entrada != 'ESC') {
//     alert ('El usuario ingresó ' + entrada)
//     entrada = prompt ('Ingresá otro datohol')
// }

//DO WHILE

// let numero = 0
// do {
//    numero = prompt('Ingresa un numero')
//     console.log(numero)
// }while (Number(numero))


//SWITCH


let numero = 30

if (numero === 1){
    console.log('es un uno');
}

if (numero === 2){
    console.log('es un dos');
}

if (numero === 3){
    console.log('es un 3');
}
else {
    console.log ("No es minguno de los anteriores")
}



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
 