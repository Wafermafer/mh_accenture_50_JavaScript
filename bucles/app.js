
/*const alumnos = [ "Leon", "Agustin", "Alejandra", "Alejo", "Christian", "Gaston"]*/
/*
console.log(`Hola me llamo  ${alumnos [0]}`)
console.log(`Hola me llamo  ${alumnos [1]}`)
console.log(`Hola me llamo  ${alumnos [2]}`)
console.log(`Hola me llamo  ${alumnos [3]}`)
console.log(`Hola me llamo  ${alumnos [4]}`)

const condicion = true

console.log ('Antes del if')
if( condicion ){
    //console.log(`Hola me llamo  ${alumnos [0]}`)
}
//console.log ('Despues del if')*/

//FOR: se usa cuando se tiene conocimiento de la cantidad de iteraciones y 1ero evalua la condicion de pues ejecuta el bloque

//Ejercicio1//
/*console.log (alumnos)

for (let i = 0; i <= alumnos.length ; i = i + 1 ){
    console.log (i)
    //console.log(`Hola me llamo  ${alumnos [0]}`)
}
*/


/*for( let i = 10; i > 0; i-- ){
    if ( i % 2 == 0){
        console.log (i)
    }
}

for( let i = 10; i > 0; i = i - 2 ){
    if ( i % 2 == 0){
        console.log (i)
    }
}

for( let i = 10; i > 0; i-- ){
    if ( i % 2 == 0){
        console.log ( `${i} es par`)
    }else{
        console.log (  `${i} es impar` )
    }
}*/

/*let resultado = 0

for( let i =0; i<= 200; i++){
    if ( i % 2 == 0){
        resultado = resultado + i
    }
}

console.log ('El resultado es: ' + resultado)*/

// WHILE:se usa cuando desconozco la cantidad de iteraciones y 1ero evalua la condicion de despues ejecuta.

/*let condicion = 10
while ( condicion){
    console.log ( condicion)
    condicion --
}*/

// prompt: para que el usuario ingrese datos
// Number: para los numeros que se agregen en el prompt para los tome como numeros, sino lo toma como strings
// Number = +prompt, esta es otra opcion

/*let numeroIngresado = Number ( prompt (' Ingrese un numero, para cancelar ingrese 0'))
let sumaNumerosIngresados = 0
while ( numeroIngresado ){
    //sumaNumerosIngresados = sumaNumerosIngresados + numeroIngresado
    //Una opcion abreviada es:
    sumaNumerosIngresados += numeroIngresado
    numeroIngresado = Number ( prompt (' Ingrese un numero, para cancelar ingrese 0'))
}
alert( `La suma de los numeros ingresados es: ${ sumaNumerosIngresados}`)
*/

//DO WHILE: se usa cuando desconozco la cantidad de iteraciones y 1ero ejecuta y despues evalua la condicion y si se cumple la condicion vuelve a ejecutar

/*let numeroIngresado 
let sumaNumerosIngresados = 0

do{
    numeroIngresado = Number ( prompt (' Ingrese un numero, para cancelar ingrese 999'))
    if(numeroIngresado && numeroIngresado != 999){
        sumaNumerosIngresados += numeroIngresado
    }
    
}while ( numeroIngresado && numeroIngresado != 999 ) 
    alert( `La suma de los numeros ingresados es: ${ sumaNumerosIngresados}`)
*/



/*const nombre = "Nicolas"
let aux = ""
 for ( let i = 0; i < 5 ; i++){
    aux += nombre[i]
 }
console.log ( aux)*/



// FOR OF

// esto es un string indexado por caracter y va a dar caracter por caracter
const nombre = "Nicolas"

// esto es un array de string con cada iteracion va a dar un elemento (string)
const alumnos = ["Leon", "Agustin", "Alejandra", "Alejo", "Christian", "Gaston"]

//es un array de objetos, cada elemento de este array es un objeto ( cada individual de la lista)
const mentores = [
    {
        nombre: "Nicolas",
        edad: 29
    },
    {
        nombre: "Lucrecia",
        edad: 28
    }

]

/*for (const letra of nombre){
    console.log(letra)
}


for (const alumno of alumnos){
    console.log(alumno)
}

for (const mentor of mentores){
    console.log(mentor)
}

for ( const mentor of mentores){
    console.log( `El mentor/a ${ mentor.nombre} tiene ${ mentor.edad} años`)
}

//Otra manera
for ( let i =0;  i < mentores.length; i++){
    const mentor = mentores [i]
    console.log( `El mentor/a ${ mentor.nombre} tiene ${ mentor.edad} años`)
}

console.log(alumnos)*/

/*let indiceEncontrado

for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    if( alumno == "Agustin"){
        indiceEncontrado = i 
        console.log(`El indice de Agustin es: ${i}`)
        continue //Continue: Salta a la siguiente iteracion, mientras que break corta el bucle
    }
    console.log(alumno)
}*/




/*RESPONSABILIDAD UNICA*/
/*Nombres descriptivos (verbos)*/
/*Las funciones no modifican nada que este fuera de la funcion*/
/*No buscar ningun valor externo,todo se recibe por parametro*/

function encontrarIndiceAlumno(listaAlumnos, nombre) {
    if (!listaAlumnos || !nombre) {
        console.log('Parametros invalidos')
        return
    }
    let indiceEncontrado = -1

    for (let i = 0; i < listaAlumnos.length; i++) {
        const alumno = listaAlumnos[i];
        if (alumno == "Agustin") {
            indiceEncontrado = i
            console.log(`El indice de ${nombre} es: ${i}`)
            /*continue*/ //Continue: Salta a la siguiente iteracion, mientras que break corta el bucle
        }
        console.log(indiceEncontrado)
    }
}

encontrarIndiceAlumno(alumnos, "Agustin")

encontrarIndiceAlumno(alumnos, "Gaston")

encontrarIndiceAlumno(alumnos)


/*
console.log( mentores[0])

for( const key in mentores[0]){
    console.log(mentores[0][key])
}

//NOTA: Un objeto no es iterable, no esta indexado

for( const mentor of mentores){
    for( const key in mentores[0]){
        console.log(key)
    }
}*/