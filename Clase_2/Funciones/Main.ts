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
//Las funciones en JavaScript usualmente tienen un número de argumentos variable. Por ejemplo el método toFixed del tipo number toma como segundo parámetro un número que indica la cantidad de dígitos a los cuales debe redondear.
// function f(n: number) {
//     console.log(n.toFixed()); // no se especifican argumentos
//     console.log(n.toFixed(3)); // se especifica un argumento
// }
//Para poder reproducir esta característica dentro de TypeScript utilizamos el signo de interrogación ? que indica que el parámetro es opcional.
// function f(n?: number) {
//     // ...
// }
//Si bien el parámetro ha sido especificado como un tipo number, cuando no se envía un argumento a la función este tiene el tipo undefined, esto se debe a que los parámetros no especificados en JavaScript tienen por default el valor undefined.
// También es posible asignar un valor por default y omitir el tipo que es inferido desde su asignación.
// function f(n = 10) {
//     // ...
// }
//Ahora tendremos dentro de la firma de f un parámetro n con un valor por default de 10 y el tipo number que ha sido inferido de su valor por default.
//Parámetros opcionales en los callbacks
// Una ves que se ha aprendido como utilizar los parámetros opcionales, es muy común cometer el siguiente tipo de errores.
// function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
//     for (let i = 0; i <= arr.length; i++) {
//         callback(arr[i], i);
//     }
// }
// // El error que por lo general se comete al hacer el parámetro index opcional, es que cualquiera de las dos siguientes llamadas a la función sean validas.
// miIterador([1, 2, 3], (a) => console.log(a));
// miIterador([1, 2, 3], (a, i) => console.log(a, i));
//Pero esto no funciona así, ya que lo que TypeScript entiende es que la función callback puede ser invocada desde el iterador también con un solo argumento.
// function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
//     for (let i = 0; i <= arr.length; i++) {
//         // aqui es en donde index es opcional o no
//         callback(arr[i]);
//     }
// }
// Incluso dentro de la definición del callback TypeScript envía un mensaje indicando que index puede ser undefined.
// miIterador([1, 2, 3], (a, i) => {
//     console.log(i.toFixed());
// });
//En este último caso veremos que el compilador tira el error Object is possibly 'undefined'.


//Funciones Overload
//Algunas funciones de JavaScript pueden ser invocadas con diferentes tipos y número de argumentos. Por ejemplo, es posible escribir una función que produce un Date que toma un timestamp (un argumento) o un mes/día/año (tres argumentos).
// En TypeScript, podemos especificar una función que puede ser llamada de formas diferentes utilizando overload signatures o sobrecarga de funciones. Para poder hacer esto escribe un número de posibles definiciones distintos de una función (usualmente dos o mas), seguido del cuerpo de la función.
// Al igual que con los generics, existen algunas guias para el buen uso de la escritura de las funciones con sobrecarga. Al seguir estos principios nos aseguramos que sean sencillas de invocar, sencillas de entender y sencillas de implementar.
// function longitud(a: any[]): number;
// function longitud(x: string): number;
// function longitud(x: any): number {
//     return x.length;
// }
// console.log(longitud("hola mundo"));
// console.log(longitud([1, 2, 3, 4, 5]));
//En este ejemplo tenemos una función con sobrecarga que imprime la longitud de un texto o un string. Si bien cumple con su función, podemos simplificar esta función con sobrecarga de una forma mucho mas sencilla usando unions.
// function calcularLongitud(x: any[] | string) {
//     return x.length;
// }
// console.log(calcularLongitud("hola mundo"));
// console.log(calcularLongitud([1, 2, 3, 4, 5]));


//Funciones Uso de 'This'
//TypeScript infiere cual será el elemento al cual this hace referencia, por ejemplo:
// const usuario = {
//     id: 123,
//     admin: false,
//     volverseAdmin: function () {
//         this.admin = true;
//     },
// };
// console.log(usuario.admin); //false;
// usuario.volverseAdmin();
// console.log(usuario.admin); //true;
//Cuando ejecutamos la función volverseAdmin() el valor de admin cambia de false a true.
// Ahora supongamos que en lugar de utilizar una función utilizamos una función tipo flecha.
// const usuario2 = {
//     id: 123,
//     admin: false,
//     volverseAdmin: () => {
//         this.admin = true;
//     },
// };
// console.log(usuario2.admin); //false;
// usuario2.volverseAdmin();
// console.log(usuario2.admin); //false;
//En este caso this no permite hacer cambios a admin por lo cual el valor false se preserva.


//Funciones Rest Parameters
//Además de utilizar parámetros opcionales o sobrecarga para hacer que las funciones acepten una variedad de argumentos, también es posible definir funciones que tomen un número indeterminado de argumentos utilizando rest parameters.
//Un parámetro rest aparece al final de la lista de parámetros con un prefijo de tres puntos seguido del nombre del parámetro ...nombre.
// function multiplicar(n: number, ...m: number[]): number {
//     return m.reduce((p, c) => {
//         return p * c;
//     }, n);
// }
// console.log(multiplicar(2, 2)); // 4;
// console.log(multiplicar(2, 2, 3)); // 12;
// console.log(multiplicar(2, 2, 3, 4)); // 48;
//La función multiplicar recibe un segundo parámetro llama m, este almacena todos los números adicionales como parte de un arreglo tipo number y despues los multiplica uno a uno.


//Funciones Parameter Destructuring
// //La destructuración de parámetros permite romper objetos en una o mas variables locales. En el caso de la función permite romper los argumentos para crear variables con un scope al nivel del cuerpo de la función.
// function sumar(num) {
//     return num.a + num.b + num.c;
// }
// const numeros = { a: 1, b: 2, c: 3 };
// console.log(sumar(numeros));
//Ahora supongamos que deseamos descomponer el parámetro num en variables independientes para realizar la suma. Para ello podemos usar la destructuración.
// function sumar({ a, b, c }): number {
//     return a + b + c;
// }
// console.log(sumar({ a: 1, b: 2, c: 3 }));
//TypeScript nos permite definir los tipos que el objeto a desestructurar posee.
// function sumar({ a, b, c }: { a: number; b: number; c: number }): number {
//     return a + b + c;
// }
// console.log(sumar({ a: 1, b: 2, c: 3 }));
// 'Tomar en cuenta que la sintáxis de destructuración es similar a la de definición de tipos. Pero a diferencia de esta separa los valores por comas , (destructuración) y no por punto y coma ; (definición de tipos).'


//Funciones Void como Valor de Retorno
// Funciones que retornan void
// El valor void que retornan las funciones puede producir algunos comportamientos inusuales e inesperados.
// Cuando se utiliza void no se obliga a una función a retornar algo, si creamos un alias que defina una función void, esta puede tener cualquier tipo de valor retornado.
// type funcionTipoVoid = () => void;
// const f1: funcionTipoVoid = () => {
//     return true;
// };
// console.log(f1());
// const f2: funcionTipoVoid = () => true;
// console.log(f2());
// const f3: funcionTipoVoid = function () {
//     return true;
// };
// console.log(f3());
// El compilador no mostrará ningún error, por el contrario retornará true en cada uno de los casos.
// Sin embargo si especificamos que la función debe retornar un void como en el siguiente ejemplo, el compilador de TypeScript si generará un error cuando se retorne algún valor por parte de la función.
// const f4: funcionTipoVoid = (): void => {
//     return true;
// };