//Tipos Unknown

//En ocasiones necesitas describir un tipo de variable el cual no conocemos. Estos valores pueden provenir de fuentes cuyos valores son dinamicos como una API. Esta variable puede tomar cualquier tipo de valor, para ello le asignamos el tipo unknown.

let valorDesconocido: unknown = 4;
valorDesconocido = true;

// **Ejercicio:**
// - Declara una variable `valor` de tipo `unknown`.
// - Escribe una función que verifique el tipo de `unknown` y retorne un mensaje apropiado.

let datoSinValor: unknown = 10;
function mensaje(valor: unknown): string {
    if (typeof valor === 'string') {
        return `El valor es una cadena: "${valor}"`;
    } else if (typeof valor === 'number') {
        return `El valor es un número: ${valor}`;
    } else if (typeof valor === 'boolean') {
        return `El valor es un booleano: ${valor}`;
    } else if (typeof valor === 'object') {
        if (valor === null) {
            return `El valor es null`;
        } else if (Array.isArray(valor)) {
            return `El valor es un array: [${valor.join(', ')}]`;
        } else {
            return `El valor es un objeto: ${JSON.stringify(valor)}`;
        }
    } else if (typeof valor === 'undefined') {
        return `El valor es undefined`;
    } else {
        return `El valor es de tipo desconocido`;
    }
}
console.log(mensaje(datoSinValor));
console.log(mensaje(datoSinValor = "Hola"));
console.log(mensaje(datoSinValor = true));
console.log(mensaje(datoSinValor = {llave : "123"}));
console.log(mensaje(datoSinValor = null));
console.log(mensaje(datoSinValor = [1,2,3]));
console.log(mensaje(datoSinValor = undefined));