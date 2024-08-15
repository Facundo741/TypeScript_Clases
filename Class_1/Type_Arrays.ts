//Tipos Arrays

//Forma 1

let listNumber1: number[] = [1, 2, 3]; 

//Si queremos agregar un tipo diferente de dato, nos tirara error.

//Forma 2

let listNumber2: Array<number> = [1, 2, 3] 

// Se puede el array usando el constructor Array<tipo>.

// **Ejercicio:**
// - Declara un array de números utilizando la primera forma y otro utilizando la segunda forma.
// - Escribe una función que reciba un array de números y retorne el promedio.

let listNumber3: number[] = [1,2,3,4,5,6,7,8,9,10];
let listNumber4: Array<number> = [11,12,13,14,15,16,17,18,19,20];
function promedio(numbers: number[]): number {
    let suma: number = 0;
    for (let numero of numbers) {
        suma += numero;
    }
    return suma / numbers.length;
}

console.log(promedio(listNumber3));
console.log(promedio(listNumber4));