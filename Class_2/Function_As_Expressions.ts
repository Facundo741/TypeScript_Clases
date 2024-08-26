//Funciones como expresiones

//La manera mas simple de describir funciones es como una funcion flecha

function saludar (fn: (a : string) => void) {
    fn("Hola mundo");
}
function imprimirConsola (s: string) {
    console.log(s);
}
saludar(imprimirConsola);

//En el anterior ejemplo la función saludar recibe el parámetro fn es una función (a: string) => null que recibe un string y retorna null, y esta se envía y cuya invocación se realiza dentro de la función que la recibe fn("Hola Mundo"), que a su ves pasa el argumento "Hola Mundo"
//Si deseamos hacer el ejemplo anterior mas entendible podemos hacer uso de un alias que nos permite encapsular los parámetros dentro de ella.

type Fn = (a: string) => void;
function salud(fn : Fn) {
    fn("Hola mundo");
}
function printCons(s : string) {
    console.log(s);
}
saludar(printCons);

// **Consigna**: Implementa una función llamada `notificar` que reciba otra función como argumento. La función pasada como argumento debe recibir un string y no retornar nada. Luego, invoca `notificar` pasando una función que muestre una alerta con el string recibido.

function notificar (fn: (mensaje: string) =>void) {
    fn("Hola Mundo");
}
function consola (s: string) {
    console.log(s);
}
notificar(consola);