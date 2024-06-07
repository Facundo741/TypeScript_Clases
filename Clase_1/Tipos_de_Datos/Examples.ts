// #### 1. Tipos Booleanos
// **Ejercicio:**
// - Declara una variable `esEstudiante` y asígnale un valor booleano.
// - Escribe una función `esMayorDeEdad` que reciba un parámetro de tipo booleano `mayorDeEdad` y retorne un mensaje indicando si es mayor de edad o no.

// let esEstudiante: boolean = false;
// function esMayorDeEdad(mayorDeEdad: boolean): string {
//     return mayorDeEdad ? "Es mayor de edad" : "No es mayor de edad";
// }
// console.log(esMayorDeEdad(true)); 
// console.log(esMayorDeEdad(false));


// #### 2. Tipos Number
// **Ejercicio:**
// - Declara una variable `altura` de tipo número y asígnale un valor.
// - Escribe una función `calcularAreaRectangulo` que reciba dos parámetros de tipo número `base` y `altura`, y retorne el área del rectángulo.

// let altura: number = 10;
// function calcularAreaRectangulo(altura: number , base: number): number { 
//     return altura * base
// }
// console.log(calcularAreaRectangulo(altura, 10));


// #### 3. Tipos String
// **Ejercicio:**
// - Declara dos variables `nombre` y `apellido`.
// - Usa un template string para crear una variable `presentacion` que contenga ambos nombres.
// - Escribe una función que reciba un nombre y apellido, y retorne una presentación en un template string.

// let nombre: string = ""
// let apellido: string = ""
// let presentacion: string = `
//     Nombre: ${nombre}
//     Apellido: ${apellido}
// `
// function saludar(nombre: string, apellido: string): string {
//     return `Hola ${nombre} ${apellido} un placer conocerte.`
// }
// console.log(saludar('Facundo', 'Santillan'));


// #### 4. Tipos Arrays
// **Ejercicio:**
// - Declara un array de números utilizando la primera forma y otro utilizando la segunda forma.
// - Escribe una función que reciba un array de números y retorne el promedio.

// let listaDeNumeros1: number[] = [1,2,3,4,5,6,7,8,9,10];
// let listaDeNumeros2: Array<number> = [11,12,13,14,15,16,17,18,19,20];
// function promedio(listaDeNumeros: number[]): number {
//     let suma: number = 0;
//     for (let numero of listaDeNumeros) {
//         suma += numero;
//     }
//     return suma / listaDeNumeros.length;
// }

// console.log(promedio(listaDeNumeros1));
// console.log(promedio(listaDeNumeros2));


// #### 5. Tipos Tuples
// **Ejercicio:**
// - Declara una tupla para almacenar el nombre de una persona y su edad.
// - Escribe una función que reciba una tupla y retorne una cadena describiendo a la persona.

// let persona: [string, number]
// function describirPersona (persona: string, edad: number) {
//     return `${persona} tiene ${edad} años`;
// }
// console.log(describirPersona("Facundo", 23));


// #### 6. Tipos Enums
// **Ejercicio:**
// - Define un enum `DiasDeLaSemana` con los días de la semana.
// - Escribe una función que reciba un valor del enum y retorne si es un día laboral o fin de semana.

// enum DiasDeLaSemana {
//     Lunes = "Dia Laboral",
//     Martes = "Dia Laboral",
//     Miercoles = "Dia Laboral",
//     Jueves = "Dia Laboral",
//     Viernes = "Dia Laboral",
//     Sabado = "Fin de Semana",
//     Domingo = "Fin de Semana"
// }
// function esDiaLaboral(dia: DiasDeLaSemana): string {
//     return dia;
// }
// console.log(esDiaLaboral(DiasDeLaSemana.Lunes));  
// console.log(esDiaLaboral(DiasDeLaSemana.Domingo));  


// #### 7. Tipos Any
// **Ejercicio:**
// - Declara una variable `dato` de tipo `any` y asígnale diferentes tipos de valores.
// - Escribe una función que reciba un parámetro de tipo `any` y retorne una descripción del tipo de dato recibido.

// let variableSinTipo: any = "Leonel Messi";
// variableSinTipo = 1350;
// variableSinTipo = [1,2,3,4,5,6,7,8,9,10];
// variableSinTipo = true;
// function descripción(valor: any): string {
//     let tipo = typeof valor;
//     switch (tipo) {
//         case "string":
//             return "Es un string";
//         case "number":
//             return "Es un number";
//         case "boolean":
//             return "Es un boolean";
//         case "object":
//             return "Es un object";
//         default:
//             return "No se que tipo es";
//     }
// }
// console.log(descripción("Leonel Messi"));
// console.log(descripción(1350));
// console.log(descripción([1,2,3,4,5,6,7,8,9,10]));
// console.log(descripción(true));


// #### 8. Tipos Unknown
// **Ejercicio:**
// - Declara una variable `valor` de tipo `unknown`.
// - Escribe una función que verifique el tipo de `unknown` y retorne un mensaje apropiado.

// let datoSinValor: unknown = 10;
// function mensaje(valor: unknown): string {
//     if (typeof valor === 'string') {
//         return `El valor es una cadena: "${valor}"`;
//     } else if (typeof valor === 'number') {
//         return `El valor es un número: ${valor}`;
//     } else if (typeof valor === 'boolean') {
//         return `El valor es un booleano: ${valor}`;
//     } else if (typeof valor === 'object') {
//         if (valor === null) {
//             return `El valor es null`;
//         } else if (Array.isArray(valor)) {
//             return `El valor es un array: [${valor.join(', ')}]`;
//         } else {
//             return `El valor es un objeto: ${JSON.stringify(valor)}`;
//         }
//     } else if (typeof valor === 'undefined') {
//         return `El valor es undefined`;
//     } else {
//         return `El valor es de tipo desconocido`;
//     }
// }
// console.log(mensaje(datoSinValor));
// console.log(mensaje(datoSinValor = "Hola"));
// console.log(mensaje(datoSinValor = true));
// console.log(mensaje(datoSinValor = {llave : "123"}));
// console.log(mensaje(datoSinValor = null));
// console.log(mensaje(datoSinValor = [1,2,3]));
// console.log(mensaje(datoSinValor = undefined));


// #### 9. Tipos Void
// **Ejercicio:**
// - Escribe una función `logMensaje` que reciba un mensaje y lo imprima en la consola. La función debe tener un tipo de retorno `void`.

// function logMensaje(menssage: string): void {
//     return console.log(menssage);
// }
// console.log("Bichito de luz");


// #### 10. Tipos Null y Undefined
// **Ejercicio:**
// - Declara dos variables `variableSinDefinir` y `variableNula`, asígnales `undefined` y `null` respectivamente.
// - Escribe una función que verifique si una variable es `null` o `undefined`.

// let variableSinDefinir: undefined = undefined;
// let variableNula: null = null;
// function verificar(value: string | undefined | null): string { 
//     if (value === null) {
//         return "Es null";
//     } else if (value === undefined) {
//         return "Es undefined";
//     } else {
//         return "No es null ni undefined";
//     }
// }
// console.log(verificar(variableSinDefinir));
// console.log(verificar(variableNula));
// console.log(verificar("Hola"));


// #### 11. Tipos Never
// **Ejercicio:**
// - Escribe una función `lanzarError` que siempre lance un error. Debe tener un tipo de retorno `never`.

// function error(message: string): never {
//     throw new Error(message);
// }
// console.log(error);


// #### 12. Tipos Objetos
// **Ejercicio:**
// - Declara una función `crearObjeto` que reciba un objeto y lo imprima en la consola.

// function crearObjeto(objeto: Object): void {
//     return console.log(objeto);
// }
// crearObjeto({saludo: "hola"})


// #### 13. Tipos Unions
// **Ejercicio:**
// - Escribe una función `imprimirId` que reciba un `id` que puede ser un número o una cadena y lo imprima en la consola. La función debe manejar ambos tipos adecuadamente.

// function imprimirId(id: number | string) {
//     console.log(`El id es ${id}`);
// }
// imprimirId(1);
// imprimirId("Hola")


// #### 14. Type Assertions
// **Ejercicio:**
// - Declara una variable `valorDesconocido` de tipo `unknown`.
// - Usa `type assertions` para tratarla como un string y obtener su longitud.

// let valorDesconocido: unknown = "Esto es un ejercicio de prueba.";
// let longitudCadena: number = (valorDesconocido as string).length;
// console.log(longitudCadena);


// #### 15. Tipos Funciones
// **Ejercicio:**
// - Escribe una función `saludar` que reciba un nombre y lo imprima en la consola.
// - Escribe una función `elevarAlCuadrado` que reciba un número y retorne su cuadrado.

// function saludar(nombre: string): string {
//     return `Hola ${nombre}`;
// }
// function elevarAlCuadrado(numero: number): string {
//     return `El cuadrado de ${numero} es ${numero * numero}`;
// }
// console.log(saludar('Facundo'));
// console.log(elevarAlCuadrado(12));


// #### 16. Funciones Anónimas
// **Ejercicio:**
// - Declara un array de nombres y usa una función anónima para imprimir cada nombre en mayúsculas.

// const names = ["Pepito", "Juan", "Rosa"];
// names.forEach((nombres) => {
//     console.log(nombres);
// })


// #### 17. Tipos Aliases
// **Ejercicio:**
// - Define un alias de tipo `Punto` para un objeto con propiedades `x` y `y` de tipo `number`.
// - Escribe una función `imprimirCoordernada` que reciba un `Punto` y lo imprima en la consola.

// type Punto = {
//     x: number;
//     y: number;
// }
// function imprimirCoordernada(x: number, y: number) { 
//     return `Coordenadas: ${x} ${y}`;
// }
// console.log(imprimirCoordernada(10,12));


// #### 18. Tipos Interfaces
// **Ejercicio:**
// - Define una interfaz `Etiqueta` con una propiedad `label` de tipo `string`.
// - Escribe una función `imprimirEtiqueta` que reciba un objeto que implemente la interfaz `Etiqueta` y lo imprima en la consola.

// interface Etiqueta {
//     label: string;
// }
// function imprimirEtiqueta (etiqueta: Etiqueta) {
//     console.log(etiqueta.label);
// }
// let miEtiqueta = {label: "Esta es mi etiqueta" };
// imprimirEtiqueta(miEtiqueta)


// #### 19. Propiedades Opcionales en Interfaces
// **Ejercicio:**
// - Define una interfaz `Cuadrado` con una propiedad `color` opcional de tipo `string` y una propiedad `ancho` de tipo `number`.
// - Escribe una función `crearCuadrado` que reciba un objeto que implemente la interfaz `Cuadrado` y retorne el área del cuadrado.

// interface Cuadrado {
//     color?: string;
//     ancho: number;
// }
// function crearCuadrado(c: Cuadrado) {
//     return `El area del cuadrado es ${c.ancho*c.ancho}`;
// }
// let miCuadrado = {color:"rojo", ancho: 10}
// console.log(crearCuadrado(miCuadrado));


// #### 20. Propiedades de Solo Lectura en Interfaces
// **Ejercicio:**
// - Define una interfaz `Punto` con propiedades `x` y `y` de solo lectura.
// - Declara una variable `punto1` que implemente la interfaz `Punto` y asigna valores a `x` y `y`.

// interface Punto {
//     readonly x: number;
//     readonly y: number;
// }
// let punto1: Punto =  { x: 20, y: 30 };
// console.log(punto1);


// #### 21. Tipos Literals
// **Ejercicio:**
// - Escribe una función `imprimirEstadoCivil` que reciba un parámetro `estadoCivil` que solo pueda ser `"soltero"` o `"casado"` y lo imprima en la consola.
// function imprimirEstadoCivil(estadoCivil: "soltero" | "casado" ) {
//     console.log(estadoCivil);
// }
// imprimirEstadoCivil("casado");