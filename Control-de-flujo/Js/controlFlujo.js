/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad = 14; //Dato númerico edad

if (edad >= 18){
    console.log("Puede votar")
}else{
   console.log("No puede votar") 
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function calificaciones (cal1,cal2,cal3,cal4){
    let promedio = (cal1+cal2+cal3+cal4)/4;
    if (promedio >=7){
        console.log("Aprobado")
    }else {
        console.log("Reprobado")
    }

}


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function divisible (numero){
    if (numero %7 ===0 && numero % 8 ===0 ){
        console.log("Verdadero");
    }else{
        console.log("Falso");
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function divisibleDos (numero){
    if (numero %4 ===0 || numero % 9 ===0 ){
        console.log("Verdadero");
    }else{
        console.log("Falso");
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora (operacion,num1,num2){
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
 
switch(operacion){
    case "suma":
        console.log(suma)
    break;
    case "resta":
        console.log(resta)
    break;
    case "multiplicacion":
        console.log(multiplicacion)
    break;
    case "division":
        console.log(division)
    break;
    default:
        console.log("operacion no encontrada")
    break;
}
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliculas (categoria){
 
    switch(categoria){
        case "accion":
            console.log("The Batman")
        break;
        case "drama":
            console.log("12 años de exclavitud")
        break;
        case "comedia":
            console.log("Pobres millonarios")
        break;
        case "romance":
            console.log("After:Para siempre")
        break;
        case "suspenso":
            console.log("El teléfono del señor Harrigan")
        break;
        case "terror":
            console.log("El Exorcista del Papa")
        break;
        default:
            console.log("Película no encontrada")
        break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
let acción= 4; //Valores de acción

if(acción === 1){
    console.log("Retirar dinero")
}else if(acción===2){
    console.log("Transferencia")
}else if(acción===3){
    console.log("Deposito")
}else if (acción ===4){
    console.log("Pago de servicios")
}


/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function conversión (moneda,cantidadMxn){
    let dolaresEstadounidenses = 0.059 * cantidadMxn;
    let euros = 0.055 * cantidadMxn;
    let yenesJaponeses = 8.66 *cantidadMxn;
    let libraEsterlina = 0.047 * cantidadMxn;
    let francoSuizo = 0.053 * cantidadMxn;

    switch(moneda){
        case "dolaresEstadounidenses":
            console.log(dolaresEstadounidenses + " dolares")
        break;
        case "euros":
            console.log(euros + " euros")
        break;
        case "yenesJaponeses":
            console.log(yenesJaponeses +" yenes Japoneses")
        break;
        case "libraEsterlina":
            console.log(libraEsterlina + " libra")
        break;
        case "francoSuizo":
            console.log(francoSuizo + " franco suizo")
        break;
        default:
            console.log("Conversión no encontrada")
        break;
    }
}


/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuento(precio,código){
    let productoDescuento = precio * .9;
    if (código === "DESCUENTO10"){
        console.log(productoDescuento);
    }else
    console.log("Descuento no aceptado");
}
