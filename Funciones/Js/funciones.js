/**
 * Declar función que calcule el perimetro de un circulo
 * conocer r
 * 
 * Escribir la expresión que resuleve
 * p=2*pi*r
 * 
 * Funcion área de rectangulo
 * conocer b y h
 * Expresión que resuelve
 * A=b*h
 * 
 * Número al cuadrado
 * Conocer numero
 * 
 * Conversión °C a °F
 * Conocer °C
 * Expresión que resuelve
 * °F= (°C*1.8)+32
 * 
 * Calcular voltaje
 * Conocer I y R
 * Expresión que resuleve
 * V= I*R
 * 
 * Volumen de una esfera
 * Conocer r
 * Expresión que resulve
 * V=4/3*pi*r^3
 * 
 */



//Funciones con nombre

//Perimetro circulo
function calcularPerimetroCirculo (radio){
    const NUMERO_PI=3.1416
    let perimetro = 2 * NUMERO_PI * radio
    return "El perimetro calculado es de " + perimetro + " metros"; 
}

//Área de rectangulo
function calcularAreaRectangulo (base, altura){
    let area = base * altura
    return "El area calculada es de " + area + " metros cuadrados";
}

//Cuadrado de un número
function cuadradoNumero (num){
    let cuadrado = num**2
    return "El cuadrado de un numero es de " + cuadrado;
}

//Conversión de °C a F
function convertirCelcius (celcius){
    let converción = (celcius*1.8) + 32
    return "La conversión de °C a °F es de" + converción;
}

//Calcular el valor del voltaje dadas las resistencias y corriente
function calcularVoltaje (corriente,resistencia){
    let calcular = corriente*resistencia
    return "El valor del voltaje es de " + calcular + " voltios";
}

//Volumen de una esfera
function calcularVolumenEsfera (radio){
    const NUMERO_PI=3.1416
    let volumen = 4/3 * NUMERO_PI * (radio**3)
    return "El volumen calculado es de " + volumen + " metros cubicos";
}



//Funciones flecha

//Perimetro circulo
const PerimetroCirculoFlecha = (radio) => perimetro= 2*3.1416*radio;

//Área de rectangulo
const AreaRectanguloFlecha = (base, altura) => area = base*altura;

//Cuadrado de un número
const cuadradoNumeroFlecha = (num) => cuadrado=num**2;

//Conversión de °C a F
const convertirCelciusFlecha = (celcius) => cuadrado = (celcius*1.8) + 32; 

//Calcular el valor del voltaje dadas las resistencias y corriente
const VoltajeFlecha = (corriente,resistencia) => calcular = corriente*resistencia;

//Volumen de una esfera
const VolumenEsferaFlecha = (radio) => volumen = 4/3 * 3.1416* (radio**3);