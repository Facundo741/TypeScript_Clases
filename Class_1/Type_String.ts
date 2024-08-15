//Tipos String

//Ademas de usar comillas simples y dobles, es posible usar los template strings, estos mismos crean cadenas de multiples lineas y ademas de poder embedir variables dentro de este template como se muestra en el ejemplo.

let name0: string = 'Raul';
let lastName0: string = "Jimenes";
let impresion: string = `
    Nombre: ${name0}
    Apellido: ${lastName0}`;

// **Ejercicio:**
// - Declara dos variables `nombre` y `apellido`.
// - Usa un template string para crear una variable `presentacion` que contenga ambos nombres.
// - Escribe una función que reciba un nombre y apellido, y retorne una presentación en un template string.

let name1: string = "";
let lastName1: string = "";
let presentacion: string = `Nombre: ${name1} Apellido: ${lastName1}`;

function saludar(name1: string, lastName1: string): string {
    return `Hola ${name1} ${lastName1}, un placer conocerte.`;
}
console.log(saludar('Pepe', 'Ansis'));