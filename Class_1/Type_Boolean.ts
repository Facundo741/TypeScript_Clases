// Tipos Booleans

let esVerdadero = true;
let esFalso = false;
console.log(esVerdadero, esFalso);

// **Ejercicio:**
// - Declara una variable `esEstudiante` y asígnale un valor booleano.
// - Escribe una función `esMayorDeEdad` que reciba un parámetro de tipo booleano `mayorDeEdad` y retorne un mensaje indicando si es mayor de edad o no.

let esEstudiante: boolean = false;
function esMayorDeEdad(mayorDeEdad: boolean): string {
    return mayorDeEdad ? "Es mayor de edad" : "No es mayor de edad";
}
console.log(esMayorDeEdad(true)); 
console.log(esMayorDeEdad(false));