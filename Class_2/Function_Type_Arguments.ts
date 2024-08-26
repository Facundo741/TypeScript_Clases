//Funciones Especificar Type Arguments

//TypeScript puede deducir los argumentos provistos a Type dentro de una función que utiliza generics. Por ejemplo imaginemos que escribimos una función que combina dos arreglos.

function combinar<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

// Si intentamos combinar un arreglo con dos tipos distintos TypeScript nos generará un error.
// combinar([1, 2, 3], ["a"]);
// Para poder utilizar la anterior función podemos especificarle los tipos que T puede tener.

combinar<string | number>([1, 2, 3], ["a"]);
console.log(combinar);

// **Consigna**: Implementa una función `g` que reciba un parámetro opcional de tipo `string`. Si no se proporciona un argumento, debe usar un valor por defecto de `"default"`. Prueba la función con y sin el argumento, y muestra el resultado en la consola.

function g(mensaje: string = 'default') : void {
  console.log(mensaje);
}
g('FSN');
g();
