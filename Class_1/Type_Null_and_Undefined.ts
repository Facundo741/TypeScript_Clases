//Tipos Null y Undefined

let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

// **Ejercicio:**
// - Declara dos variables `variableSinDefinir` y `variableNula`, asígnales `undefined` y `null` respectivamente.
// - Escribe una función que verifique si una variable es `null` o `undefined`.

let varSD: undefined = undefined;
let varN: null = null;
function verificar(value: string | undefined | null): string { 
    if (value === null) {
        return "Es null";
    } else if (value === undefined) {
        return "Es undefined";
    } else {
        return "No es null ni undefined";
    }
}
console.log(verificar(varSD));
console.log(verificar(varN));
console.log(verificar("Hola"));
