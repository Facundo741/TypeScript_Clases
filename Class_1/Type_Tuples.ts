//Tipos Tuples

//Estas mismas permiten expresar un array con un numero fijo conocido de elementos, pero no requieren ser los mismos.

let futbolista: [string, number];
futbolista = ["Messi", 36];

//Para acceder a los elementos de una tupla, tenemos que utilizar su indice.

console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

// **Ejercicio:**
// - Declara una tupla para almacenar el nombre de una persona y su edad.
// - Escribe una función que reciba una tupla y retorne una cadena describiendo a la persona.

let persona: [string, number]
function describirPersona (persona: string, edad: number) {
    return `${persona} tiene ${edad} años`;
}
console.log(describirPersona("Facundo", 23));
