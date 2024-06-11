//Funciones como expresiones
//La manera mas simple de describir funciones es como una funcion flecha
// function saludar (fn: (a : string) => void) {
//     fn("Hola mundo");
// }
// function imprimirConsola (s: string) {
//     console.log(s);
// }
// saludar(imprimirConsola);
//En el anterior ejemplo la función saludar recibe el parámetro fn es una función (a: string) => null que recibe un string y retorna null, y esta se envía y cuya invocación se realiza dentro de la función que la recibe fn("Hola Mundo"), que a su ves pasa el argumento "Hola Mundo"
//Si deseamos hacer el ejemplo anterior mas entendible podemos hacer uso de un alias que nos permite encapsular los parámetros dentro de ella.
// type Fn = (a: string) => void;
// function saludar(fn : Fn) {
//     fn("Hola mundo");
// }
// function imprimirConsola(s : string) {
//     console.log(s);
// }
// saludar(imprimirConsola);


//Funciones Call Signature
//En JavaScript, las funciones ademas de poder ser invocadas pueden tener propiedades. Sin embargo, la sintaxis de las funciones como expresiones no permiten declarar propiedades. Si queremos asociar valores adicionales a una función, podemos escribir un alias para dicho propósito.
// type FuncionDescribible = {
//     descripcion: string;
//     base: number;
//     (base: number): number;
// }
// function imprimirEnConsola(fn: FuncionDescribible){
//     console.log(fn.descripcion + fn(fn.base));
// }
// const cuadradoDeUnNumero: FuncionDescribible = (base) => {
//     return base * base;
// }
// cuadradoDeUnNumero.descripcion = "El cuadrado de 2 es ";
// cuadradoDeUnNumero.base = 2;
// imprimirEnConsola(cuadradoDeUnNumero);
// const mitadDeUnNumero: FuncionDescribible = (base) => {
//     return base / 2;
// }
// mitadDeUnNumero.descripcion = "La mitad de 10 es ";
// mitadDeUnNumero.base= 10;
// imprimirEnConsola(mitadDeUnNumero);


//Funciones Constructor Signature
//Las funciones de JavaScript pueden ser también invocadas con el operador new. TypeScript hace referencia a estos operadores como constructors (constructores) porque estos sirven para crear un objeto. Por ello se puede escribir un constructor signature (firma para el constructor) añadiendo la palabra new enfrente de la firma
// interface Transporte {
//     nombre: string;
// }
// class Caballo implements Transporte {
//     constructor(public nombre: string) {}
// }
// class Automovil implements Transporte {
//     constructor(public nombre: string) {}
// }
// type ConstructorDeTransporte = {
//     new (nombre: string): Transporte;
// };
// function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
//     return new ctr(nombre);
// }
// const miCaballo = construirTransporte(Caballo, "Paso Fino");
// const miAutomovil = construirTransporte(Automovil, "Toyota");
// console.log("Mi caballo se llama " + miCaballo.nombre);
// console.log("Mi automovil es un " + miAutomovil.nombre);
//En el ejemplo hemos construido una función a la cual se le pasa un objeto que posee un constructor como parte de su firma. En este caso dicho constructor debe retornar un objeto que implemente la interface Transporte


//Funciones Generics
//Es común escribir funciones en donde los tipos de entrada están asociados a los de salida, o en donde dos tipos de entrada están relacionados de alguna forma. Consideremos por un momento una función que retorna el primer elemento de un arreglo.
// function primerElementoDeUnArreglo(arreglo: any[]) {
//     return arreglo[0];
// }
//La función anterior realiza el trabajo necesario, desafortunadamente para hacer esta función operar con cualquier tipo de arreglo, se hace necesario que el tipo implícito sea any, y sería mucho mejor que pudiéramos utilizar el tipo del arreglo que estamos enviando a la función.
// Para el propósito anterior existen los generics (genéricos) que son utilizados para describir la correspondencia entre dos valores. Para hacer esto utilizamos el parámetro de tipo Type en la firma de la función:
// function obtenerPrimerElementoDeArreglo<Type>(arreglo: Type[]): Type {
//     return arreglo[0];
// }
// const primerNumero = obtenerPrimerElementoDeArreglo([1,2,3,4]);
// console.log("El primer numero es " + primerNumero);
// const primeraLetra = obtenerPrimerElementoDeArreglo(["a", "b", "c", "d"]);
// console.log("La primera letra es " + primeraLetra);


//Funciones Generics Inference
//Podemos ver que no es necesario especificar el tipo en nuestro ejemplo anterior, TypeScript es capaz de inferir el tipo proporcionado y a partir de ahí obtener el tipo de salida esperado. Tampoco estamos limitados a un solo tipo dentro de nuestras generic functions, podemos utilizar varias referencias.
// function map<Entrada, Salida> (
//     arr: Entrada[],
//     func: (arg: Entrada) => Salida
// ): Salida[] {
//     return arr.map(func);
// }
// const longitudDeString = map(["hola mundo", "adios mundo"],(arg) => {
//     return arg.length;
// })
// console.log(longitudDeString);
//En el ejemplo anterior hay 2 generics que utilizamos, Entrada y Salida. El tipo de Entrada representa el tipo que almacena el arreglo, que se va iterando a través de map, mientras que Salida se encarga de hacer referencia al valor en el que se ha transformado, para el caso hemos convertido el arreglo de strings en un numérico que indica la longitud de cada uno de estas cadenas de texto.


//Funciones Constraints
//Hemos escrito algunas funciones que pueden trabajar con cualquier valor. En algunas ocasiones queremos definir generics pero también deseamos que este se restrinja a una serie de posibles valores. Para tal caso podemos utilizar los constranints que permiten limitar que tipos podemos aceptar.
//Vamos a escribir una función que retorne dos valores. Para hacer esto, necesitamos al propiedad length que es un número. Así restringimos el tipo del parámetro a este tipo utilizando la clausula extends.
// function determinarMasLargo<T extends { length: number}>(a: T, b: T){
//     if (a.length){
//         return a;
//     } else { 
//         return b;
//     }
// }
// const elArregloMasLargo = determinarMasLargo(['a','b'], ['a','b','c','d']);
// console.log('El arreglo mas largo es ', elArregloMasLargo);
// const elStringMasLargo = determinarMasLargo (
//     'This is my first text',
//     'and this is text which is longer'
// );
// console.log(`El string mas largo es '${elStringMasLargo}'`);
//Existen algunas algunas cosas interesantes que hay que hacer notar. Mediante TypeScript se puede permitir interferir el tipo retornado por la función determinarMasLargo. El concepto de interference también funciona dentro de generic functions.
// Debido a que hemos restringido Type a { length: number }, hemos podido accesar la propiedad length de los parámetros a y b.
// Los tipos de elArregloMasLargo y elStringMasLargo son determinados en base a los argumentos. Recuerda que los generics consisten en relacionar dos o mas valores con el mismo tipo.


//Funciones Especificar Type Arguments
//TypeScript puede deducir los argumentos provistos a Type dentro de una función que utiliza generics. Por ejemplo imaginemos que escribimos una función que combina dos arreglos.
// function combinar<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.concat(arr2);
// }
// //Si intentamos combinar un arreglo con dos tipos distintos TypeScript nos generará un error.
// // combinar([1, 2, 3], ["a"]);
// //Para poder utilizar la anterior función podemos especificarle los tipos que T puede tener.
// combinar<string | number>([1, 2, 3], ["a"]);
// console.log(combinar);


//Funciones, Recomendaciones Al Escribir Generics
//Guia para escribir buenas funciones genéricas
// Al escribir funciones genéricas es importante no utilizar generics en donde no sean necesarios, debido a que esto puede interferir con el mantener una función sencilla de utilizar e interpretar.
//Favorece la inferencia sobre la declaración de los tipos de los argumentos
//Aquí hay dos funciones que operan igual.
// function primerElemento<Type>(arr: Type[]) {
//     return arr[0];
// }
// function primerElemento<Type extends any[]>(arr: Type[]) {
//     return arr[0];
// }
//Ambas funciones realizan el mismo trabajo y ambas funciones infieren el tipo del return, sin embargo para la primera función el Type sera el tipo provisto como argumento a la función mientras que en la segunda el Type es any que es mucho mas generalista.
//Utiliza pocos parámetros
//Aqui hay otras dos funciones
// function filtrar1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//     return arr.filter(func);
// }
// function filtrar2<Type, Func extends (arg: Type) => boolean> (
//     arr: Type[],
//     func: Func
// ): Type[] {
//     return arr.filter(func);
// }
//En este ejemplo tenemos dos funciones que realizan la misma tarea, pero en el segundo ejemplo Func no relaciona al menos dos valores, solo hace mas complicado de leer la función y no existe una razón valida para ello.
//El parámetro Type debe aparecer al menos dos veces
//En algunas ocasiones olvidamos que una función no requiere siempre utilizar generics.
// function saludar(Type extends string)(s: Type) {
//     console.log("Hola " + s);
// }
// La función anterior puede ser escrita fácilmente en una forma mas simple.
// function saludar(s: string) {
//     console.log("Hola " + s);
// }
//Intenta recordar siempre que si implementas generics es porque deseas relacionar valores. Si un parámetro es utilizado solamente en una ocasión, no requiere que eches uso de esta característica.


//Funciones Parametros Opcionales