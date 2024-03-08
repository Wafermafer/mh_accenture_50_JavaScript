/*FUNCIONES*/

/* DECLARACION DE FUNCION */

/*function comprobarIngreso() {
    let edadIngresada = prompt("Ingrese su edad")
    let vieneAcompañado = confirm(" ¿ Viene acompañado? ")
    let puedePasar = Number(edadIngresada) >= 18

    if (esMayor || vieneAcompañado) {
        let nombreIngresado = prompt('Ingrese su nombre')
        if (nombreIngresado) {
            console.log(`Bienvenido/a ${nombreIngresado}`)
        } else {
            console.log(`Bienvenido/a`)
        }
    } else {
        console.log('No puede pasar')
    }
}*/

/*comprobarIngreso ()*/




/* EXPRESION DE FUNCION */

/*const fn = comprobarIngreso
fn ()*/

const fn = function prueba() {
    console.log(' funcion de prueba')
}



/*FUNCION ANONIMA */

/*const fnAnonima = function () {
    console.log(' funcion anonima')
}
fnAnonima()*/


/* SCOPE */
/* let y const tiene scope de bloque */

/*{
    let nombre = "Agustin"
}
console.log(nombre)*/


/* var tiene scope local */
/*{
    {
        var apellido = "Mafer"
    }
}
console.log( apellido)*/

/* PARAMETROS  Y RETURN*/

/*function sumar( num, num2, num3){
    const resultado = num + num2 + num3
    console.log ('El resultado d ela suma es: ' , resultado )
}
sumar( 10, 20, 30 )
sumar( 100, 200, -50)*/



/*function sumar( num, num2, num3){
    console.log(`
        num: ${num}
        num2: ${num2}
        num3: ${num3}      
    `)
    const resultado = num + num2 + num3
    return resultado
}

console.log( sumar( 15, 20, 50))

const resultadoDos= sumar ( 100, 200, -50)
console.log (resultadoDos)

const resultadoTres = sumar ( -100, 5, 17)
console.log ( resultadoTres)*/

/*function sumar( num=0, num2=0, num3=0){   
    
    const resultado = num + num2 + num3
    return {
        mensaje: `El resultado de la suma es: ${resultado}`
    }
}

const resultadoUno = sumar ( 15, 20, 50)
console.log( resultadoUno)

const resultadoDos= sumar ( 100, 200, -50)
console.log (resultadoDos)

const resultadoTres = sumar ( -100, 5, 17)
console.log ( resultadoTres)*/

/*RESPONSABILIDAD UNICA*/
/*Nombres descriptivos (verbos)*/
/*Las funciones no modifican nada que este fuera de la funcion*/
/*No buscar ningun valor externo,todo se recibe por parametro*/


/*Cuando la funcion no retorna nada, es un procedimiento*/

function comprobarIngreso() {
    let edadIngresada = prompt("Ingrese su edad")
    let vieneAcompañado = confirm(" ¿ Viene acompañado? ")
    let esMayor = validarEdad(edadIngresada)

    if (esMayor || vieneAcompañado) {
        let nombreIngresado = prompt('Ingrese su nombre')
        darBienvenida( nombreIngresado)
    } else {
        console.log('No puede pasar')
    }
}

function validarEdad(edad){
    return Number(edad) >= 18
}

function darBienvenida (nombre){
    if (nombre) {
        console.log(`Bienvenido/a ${nombre}`)
    } else {
        console.log(`Bienvenido/a`)
    }
}
