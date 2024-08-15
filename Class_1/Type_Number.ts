//Tipos Number

let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// **Ejercicio:**
// - Declara una variable `altura` de tipo número y asígnale un valor.
// - Escribe una función `calcularAreaRectangulo` que reciba dos parámetros de tipo número `base` y `altura`, y retorne el área del rectángulo.

let altura: number = 10;
function calcularAreaRectangulo(altura: number , base: number): number { 
    return altura * base
}
console.log(calcularAreaRectangulo(altura, 10));