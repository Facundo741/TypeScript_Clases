//Tipos Funciones

//Anotaciones para los parámetros de una función
//Cuando se declara una función es posible añadir anotaciones después de cada uno de los parámetros de manera que estos indiquen el tipo de cada uno de estos.

function saludar (nombre: string) {
    console.log(`Hola ${nombre}`);
}
saludar("Pepe");

//Tipos de valor de retorno de la función

function elevarAlCuadrado (base: number): number {
    return base * base;
}
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase); 
console.log(numeroAlCuadrado); 

//Hemos utilizado un número base que es 10, este se asigna a la variable numeroBase, de ahí se pasa como argumento a la función elevarAlCuadrado la cual especifica que debe retornar un numero number

// **Ejercicio:**
// - Escribe una función `saludar` que reciba un nombre y lo imprima en la consola.
// - Escribe una función `elevarAlCuadrado` que reciba un número y retorne su cuadrado.

function saludar2(nombre: string): string {
    return `Hola ${nombre}`;
}
function elevarAlCuadrado2(numero: number): string {
    return `El cuadrado de ${numero} es ${numero * numero}`;
}
console.log(saludar2('Pepe'));
console.log(elevarAlCuadrado2(12));

//Funciones anónimas

//Las funciones anónimas anónimas son un poco diferentes de las funciones declarativas. Cuando una función aparece en un lugar en donde TypeScript determina como la función va a ser invocada, los parámetros de esta función son asignados automáticamente.

const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach((s) => {
    console.log(s.toUpperCase());
})

//En el ejemplo anterior hemos iterado la variable nombres mediante funciones anónimas. En el segundo caso utilizando una función que ademas de ser anónima es una función tipo flecha o arrow function. En ambos ejemplos TypeScript recibe la función y puede determinar el tipo de los argumentos, en este caso a partir del arreglo que contiene strings.

// **Ejercicio:**
// - Declara un array de nombres y usa una función anónima para imprimir cada nombre en mayúsculas.

const names = ["Pepito", "Juan", "Rosa"];
names.forEach((nombres) => {
    console.log(nombres);
})
