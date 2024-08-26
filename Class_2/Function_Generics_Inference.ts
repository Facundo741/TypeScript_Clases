//Funciones Generics Inference

//Podemos ver que no es necesario especificar el tipo en nuestro ejemplo anterior, TypeScript es capaz de inferir el tipo proporcionado y a partir de ahí obtener el tipo de salida esperado. Tampoco estamos limitados a un solo tipo dentro de nuestras generic functions, podemos utilizar varias referencias.

function map<Entrada, Salida> (
    arr: Entrada[],
    func: (arg: Entrada) => Salida
): Salida[] {
    return arr.map(func);
}
const longitudDeString = map(["hola mundo", "adios mundo"],(arg) => {
    return arg.length;
})
console.log(longitudDeString);

//En el ejemplo anterior hay 2 generics que utilizamos, Entrada y Salida. El tipo de Entrada representa el tipo que almacena el arreglo, que se va iterando a través de map, mientras que Salida se encarga de hacer referencia al valor en el que se ha transformado, para el caso hemos convertido el arreglo de strings en un numérico que indica la longitud de cada uno de estas cadenas de texto.

// **Consigna**: Implementa una función genérica `transformar` que reciba un arreglo y una función que transforme cada elemento del arreglo. La función debe retornar un nuevo arreglo con los elementos transformados. Usa `transformar` para transformar un arreglo de números en un arreglo de booleanos que indiquen si cada número es par.

function transformar<T, U>(arreglo: T[], transformador: (elemento: T) => U): U[] {
    return arreglo.map(transformador);
}
const numeros = [1, 2, 3, 4, 5];
const esPar = (num: number): boolean => num % 2 === 0;
const booleanos = transformar(numeros, esPar);
console.log(booleanos);