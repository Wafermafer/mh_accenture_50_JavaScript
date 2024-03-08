/*let edadIngresada = prompt("Ingrese su edad") 

let edadEnNumero = Number( edadIngresada)

console.log ( edadEnNumero )*/

/*Para saber el tipo de dato*/

/*let edadIngresada = "22"

let edadEnNumero = Number( edadIngresada)

console.log ( edadEnNumero )

console.log ( typeof edadIngresada)
console.log ( typeof edadEnNumero)
console.log ( typeof NaN)*/


/*Condicionales*/
/*let edadIngresada = prompt('Ingrese su edad')
let puedePasar = Number(edadIngresada) >= 18*/


/*IF*/

/*if (puedePasar) {
    let nombreIngresado = prompt('Ingrese su nombre')
    if ( nombreIngresado == null){
        alert(`Bienvenido/a`)
    }else{
    alert(`Bienvenido/a ${nombreIngresado}`)
    }
}

console.log('Despues del if')*/

/*OTRA FORMA*/

/*let edadIngresada = prompt('Ingrese su edad')
let puedePasar = Number(edadIngresada) >= 18


if (puedePasar) {
    let nombreIngresado = prompt('Ingrese su nombre')
    if (nombreIngresado) {
        alert(`Bienvenido/a ${nombreIngresado}`)

    } else {
        alert(`Bienvenido/a`)
    }
}

console.log('Despues del if')*/

/* VALORES FALSY*/

/*if ( 10) {
    console.log( 'True')   
}else{
    console.log('False')
}*/

/* VALORES FALSY
    "" string vacio
    0
    -0
    null
    underfined
    NaN
    false
*/

/* Practica con null
let edadIngresada = "19"
let puedePasar = Number(edadIngresada) >= 18


if (puedePasar) {
    let nombreIngresado = null
    if (nombreIngresado) {
        console.log(`Bienvenido/a ${nombreIngresado}`)

    } else {
        console.log(`Bienvenido/a`)
    }
}else{
    console.log('No puede pasar')
} */


/*CONDICIONALES */
/* IF ELSE*/

/*let edadIngresada = "9"
let puedePasar = Number(edadIngresada) >= 18
let vieneAcompañado = false /*Confirm*/

/*if (esMayor || vieneAcompañado) {
    let nombreIngresado = "Nicolas"
    if (nombreIngresado) {
        console.log(`Bienvenido/a ${nombreIngresado}`)
    } else {
        console.log(`Bienvenido/a`)
    }
} else {
    console.log('No puede pasar')
}*/

/* ELSE IF*/

/*
let colectivo = true
let uber = true

if ( colectivo) {
    console.log( 'Voy en colectivo')
}else if{
    console.log('Voy en uber')
}else{
    console.log('Me vuelvo a mi casa')
}*/

/*const edad = 18
const precioEntrada = 10

if( edad <= 5){
    console.log('La entrada es gratis')
}else if (edad <= 12 ){
    console.log('La entrada cuesta:$ ' + precioEntrada * 0.5)
}else if ( edad < 65 ){
    console.log ('La entrada cuesta:$' + precioEntrada)
}else{
    console.log('La entrada cuesta:$ ' + precioEntrada * 0.2)
}

console.log ('Después del condicional')*/


/*const operacion = prompt ( 'Ingrese la operacion: sumar, restar, multiplicacion, dividir')
const num1 = Number( prompt( 'Ingrese el primer numero') )   
const num2 = Number( prompt( 'Ingrese el segundo numero') )  

switch ( operacion) {
    case "sumar":
    case "SUMAR":
            console.log( "El resultado de la suma es: "  + (num1 + num2) )
        break;
    case "restar":
            console.log( `El resultado de la resta es: ${ num1 - num2 } ` )
        break;
    case "multiplicar":
            console.log ( `El resultado de la multiplicacion es: ${ num1 * num2 } ` )
        break;
    case "dividir":
            console.log ( `El resultado de la division es: ${ num1 / num2 } ` )
        break;
    default:
            console.log ('Operacion no valida')
        break;
}*/

/*const nombre = "Mafer"
console.log ( nombre.toLowerCase() )
console.log ( nombre.toUpperCase () )*/

/*const operar = confirm( "Quiere operar")
console.log ( operar )*/




