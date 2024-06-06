//Tipos Booleans

// let esVerdadero = true;
// let esFalso = false;
// console.log(esVerdadero, esFalso);


//Tipos Number

// let entero: number = 6;
// let hexadecimal: number = 0xf00d;
// let binario: number = 0b1010;
// let octal: number = 0o744;


//Tipos String
//Ademas de usar comillas simples y dobles, es posible usar los template strings, estos mismos crean cadenas de multiples lineas y ademas de poder embedir variables dentro de este template como se muestra en el ejemplo.

// let nombre: string = 'Raul';
// let apellido: string = "Jimenes";
// let impresion: string = `
//     Nombre: ${nombre}
//     Apellido: ${apellido}
// `;


//Tipos Arrays

//Forma 1
// let listaDeNumeros: number[] = [1, 2, 3]; 
//Si queremos agregar un tipo diferente de dato, nos tirara error.

//Forma 2
// let listaDeNumeros: Array<number> = [1, 2, 3] 
// Se puede el array usando el constructor Array<tipo>.


//Tipos Tuples
//Estas mismas permiten expresar un array con un numero fijo conocido de elementos, pero no requieren ser los mismos.

// let futbolista: [string, number];
// futbolista = ["Messi", 36];

//Para acceder a los elementos de una tupla, tenemos que utilizar su indice.

// console.log(`El nombre es ${futbolista[0]}`);
// console.log(`Su edad es ${futbolista[1]}`);


//Tipos Enums
//Los enums es una forma de dar nombres mas amigables a un grupo de sets de valores numericos.

// enum MarcasDeCoche {
//     Toyota = 100,
//     Chevrolet,
//     Ford
// };
// let prius: MarcasDeCoche = MarcasDeCoche.Toyota;
// console.log(prius);

//Tipos Any 
// En ocasiones no toda la informacion se encuentra disponible o la declaracion de un tipo nos puede llevar a tener un error inesperado, esto es por un codigo no escrito en TypeScript o libreria de terceros.

// let variableSinTipo: any = "hola miguel";
// variableSinTipo = 100;


//Tipos Unknown
//En ocasiones necesitas describir un tipo de variable el cual no conocemos. Estos valores pueden provenir de fuentes cuyos valores son dinamicos como una API. Esta variable puede tomar cualquier tipo de valor, para ello le asignamos el tipo unknown.

// let valorDesconocido: unknown = 4;
// valorDesconocido = true;


//Tipos Void
//Puede considerarse como el opuesto a Any, mientras que Any representa Cualquier Tipo, void representa Ningun Tipo.

// function saludar (): void {
//     console.log("Hola Mundo");
// }
// saludar ();
//Declarar variables del Tipo Void no es util ya que solo pueden ser null o undefined.

//Tipos Null y Undefined

// let variableSinDefinir: undefined = undefined;
// let variableNula: null = null;


//Tipos Never
//Representa el tipo de valores que nunca ocurren. Es un subtipo, que es asignable a cualquier tipo, sin embargo ningun tipo es un subtipo de never, un tipo never solo puede ser asignado con el valor never. Incluso Any no puede ser asignado a Never.

// esta funcion no tiene un punto final ya que dispara una excepcion
// function error(mensaje: string): never {
//     throw new Error(mensaje);
// }

// esta funcion no tiene un punto final ya que dispara un error
// function fallo(): never {
//     return error("Reportar fallo");
// }

// esta funcion no finaliza ya que posee un loop infinito
// function loopInfinito(): never {
//     while (true) {}
// }


//Tipos Objetos
//Representa un tipo no primitivo, cualquier cosa que no sea number, string, boolean, bigint, symbol, null o undefined. Con el tipo object, las APIs como Object.create pueden ser mejor representadas.

// declare function crear( o: Object ): void;

// crear({ prop: 0 });
// crear(null);
// crear(undefined);
// crear([]);
//false es un tipo primitive, lo cual genera un error.
// crear(false);


//Tipos Unions
//El sistema de tipos de TypeScript permite crear nuevos tipos utilizando una variedad de operadores.
//¿Cómo definir utilizar union en TypeScript?
//La primera forma de combinar tipos es utilizando uniones. Es una union los tipos que forman parte de esta se le llaman miembros.
// function imprimirId ( id: number | string) {
//     console.log(`El id es ${id}`);
// } 
// imprimirId(1);
// imprimirId("abc");

//¿Cómo trabajar con uniones?
//Supongamos ahora que dentro de nuestra función deseamos utilizar los métodos asociados aid que puede ser number o string. Como cada uno de estos tipos tiene diferentes métodos se hace necesario primero hacer una verificación del tipo para poder interactuar con este.
// function imprimirId( id: number | string) {
//     if (typeof id === 'string') {
//         console.log(`El id es ${(id as string).toUpperCase()}`);
//     } else {
//         console.log(`El id es ${(id as number).toFixed(2)}`);
//     }
// }
// imprimirId("este_es_mi_id");
// imprimirId(100.234234123);


//Tipo Type Assertion (Confirmacion de tipos)
//Los type assertions son una forma de decirle al compilador que debe confiar en ti, porque entiendes lo que estas haciendo. Un type assertion es como el type cast de otros lenguajes, pero se ejecuta sin verificar ninguna verificación o reestructurando datos. No tiene impacto durante la ejecución y es manejado exclusivamente por el compilador. TypeScript asume que el programador ha realizado las verificaciones necesarias para cerciorarse que el tipo corresponde al que dice ser.

//Forma 1
//Usando en la sintaxis, as.
// let algunValor: unknown = "esto es un string";
// let longitudDelString: number = (algunValor as string).length;
//En este ejemplo, la variable algunValor no es string sino unknown. Le indicamos al compilador mediante algunValor as string que confie que la variable es un string y que sea interpretada como esta.

//Forma 2
//Otra forma es usando <tipo>.
// let algunValor: unknown = "este es un string";
// let longitudDelString: number = (<string>algunValor).length;


//Tipos Funciones
//Anotaciones para los parámetros de una función
//Cuando se declara una función es posible añadir anotaciones después de cada uno de los parámetros de manera que estos indiquen el tipo de cada uno de estos.
// function saludar (nombre: string) {
//     console.log(`Hola ${nombre}`);
// }
// saludar("Facundo");

//Tipos de valor de retorno de la función
// function elevarAlCuadrado (base: number): number {
//     return base * base;
// }
// let numeroBase = 10;
// let numeroAlCuadrado = elevarAlCuadrado(numeroBase); 
// console.log(numeroAlCuadrado); 
//Hemos utilizado un número base que es 10, este se asigna a la variable numeroBase, de ahí se pasa como argumento a la función elevarAlCuadrado la cual especifica que debe retornar un numero number

//Funciones anónimas
//Las funciones anónimas anónimas son un poco diferentes de las funciones declarativas. Cuando una función aparece en un lugar en donde TypeScript determina como la función va a ser invocada, los parámetros de esta función son asignados automáticamente.
// const nombres = ["Juan", "Pedro", "Luis"];
// nombres.forEach(function (s) {
//     console.log(s.toUpperCase());
// });
// nombres.forEach((s) => {
//     console.log(s.toUpperCase());
// })
//En el ejemplo anterior hemos iterado la variable nombres mediante funciones anónimas. En el segundo caso utilizando una función que ademas de ser anónima es una función tipo flecha o arrow function. En ambos ejemplos TypeScript recibe la función y puede determinar el tipo de los argumentos, en este caso a partir del arreglo que contiene strings.


//Tipos Aliases (alias)
//Un alias de tipo es un nombre dado a cualquier tipo.
// type Punto = {
//     x: number;
//     y: number;
// };
// function imprimirCoordernada (punto: Punto) {
//     console.log(`X: ${punto.x}, Y: ${punto.y}`);
// }
// imprimirCoordernada({x: 10, y: 25});


//Tipos Interfaces
//Uno de los principios fundamentales de TypeScript es el que la verificación del tipado se enfoca en la forma que tienen los valores. Esto es a veces conocido como duck typing (tipado pato) o structural subtyping (tipado subestructurado). En TypeScript, las interfaces juegan el rol de nombrar estos tipos, y son una forma poderosa de definir contratos dentro del código así como contratos fuera del proyecto.
// function imprimirEtiqueta ( etiqueta: { label: string }) {
//     console.log(etiqueta.label);
// }
// let miEtiqueta = { numero: 10, label: 'Esta es mi etiqueta' };
// imprimirEtiqueta(miEtiqueta);
//El verificador de tipos revisa el proceso que invoca la función imprimirEtiqueta. Esta función tiene un solo parámetro que requiere que el objeto que se envía llamado etiqueta tiene una propiedad llamada label del tipo string. Si bien el objeto tiene otra propiedad llamada numero, como podemos ver no es necesario que el objeto miEtiqueta tenga exactamente las mismas propiedades del contrato del argumento etiqueta: { label: string }, pero si que implementa aquellas que forman parte del contrato.

//Podemos reescribir el ejemplo anterior definiendo una interface que describe los requerimientos anteriores.
// interface Etiqueta {
//     label: string;
// }
// function imprimirEtiqueta(etiqueta: Etiqueta) {
//     console.log(etiqueta.label);
// }
// let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
// imprimirEtiqueta(miEtiqueta);
//La interface Etiqueta es un nombre que podemos utilizar para describir los requerimientos del ejemplo previo. Contiene una propiedad llamada label del tipo string. Toma en cuenta que el objeto que enviamos a la función no implementa de forma implícita esta interface. La única parte relevante es que la composición del valor enviado coincida para que se considere valido.
//El type checker no requiere que las propiedades se definan en el orden de la interface.

//Propiedades opcionales de las interfaces
//No todas las propiedades de una interface tienen que ser requeridas. Algunas existen solo durante ciertas condiciones o incluso pueden ni siquiera estar presentes.
// interface Cuadrado {
//     color?: string;
//     ancho: number;
// }

// function crearCuadrado(cuadrado: Cuadrado): { area: number } {
//     const area = cuadrado.ancho * cuadrado.ancho;
//     return { area: area };
// }

// crearCuadrado({ ancho: 10 });
//Las interfaces con propiedades opcionales son escritas de forma similar a otras interfaces pero incluyen propiedades que llevan incluido el sufijo ? .

//Propiedades de solo lectura de las interfaces
//Algunas propiedades pueden ser solo modificables cuando se crean los objetos. Para especificar este comportamiento se deben definir las clases como readonly (de solo lectura).
// interface Punto {
//     readonly x: number;
//     readonly y: number;
// }

// let punto1: Punto = { x: 10, y: 20 };
// punto1.x = 20;
//En el ejemplo anterior, cuando definimos punto1 este puede recibir los valores asignados, pero en cuanto intentamos reasignar un valor a cualquiera de las propiedades, el compilador muestra un error.
// TypeScript incluye el tipo ReadonlyArray<T> que es el mismo que Array<T> con todos sus mutators (métodos para cambiar el arreglo) removidos, de tal forma que no se pueda cambiar el arreglo después de que se crea.
// let ro: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// ro.push(6);
//En el ejemplo anterior al intentar utilizar push se generará un error debido a que ReadonlyArray no define arreglos que no pueden ser modificados.

//readonly vs const
// La forma mas sencilla de entender readonly es si lo comparamos con const. Las variables utilizan const mientras que las propiedades usan readonly.


//Tipos Interfaces vs Types
//El uso de type e interface es muy similar, y en la mayoría de los casos es posible elegir cualquiera de ellos de forma indistinta. Casi todas las características de interface están disponibles en type, la clave para distinguir entre cuando usar una y otra es que una ves que se define un type no se le pueden agregar mas propiedades, mientras que interface es siempre extendible.
//Supongamos que tenemos una interface y un type.
// interface Transporte {
//     nombre: string;
// }
// type Figura = {
//     nombre: string;
// };

//¿Cómo extender una interface?
// interface Auto extends Transporte {
//     ruedas: number;
// }

//¿Cómo extender un type?
// type Cuadrado = Figura & {
//     lados: 4;
// };

//¿Cómo agregar mas propiedades a una interface previamente definida?
// interface Transporte {
//     peso: number;
// }

//¿Cómo agregar propiedades a un type previamente definido?
// Cuando se utiliza type no es posible agregar mas propiedades. Esta es una de las diferencias que existen entre interface vs type.


//Tipos Literals
//Los literals (literales) son bastante útiles cuando se combinan con el uso de funciones y unions.

// function imprimir(estadoCivil: "soltero" | "casado") {
//     console.log(estadoCivil);
// }
// imprimir("soltero");