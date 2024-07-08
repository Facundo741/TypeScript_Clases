// Creación de tipos desde otros tipos

// TypeScript es un sistema muy poderoso debido a que permite expresar tipos en base a otros tipos.
// El ejemplo mas sencillo de esto es el uso de generics, eventualmente tenemos una gran variedad de tipos de operadores disponibles. Además también es posible expresar estos tipos en términos de valores que ya tenemos.
// Al combinar varios tipos de operadores, podemos expresar la complejidad de operaciones en una forma concisa y mantenible. En esta sección vamos a cubrir cuales son las formas de expresar un nuevo tipo en términos de un tipo o valor existente.
// Tipo	            Descripción
// Generics	        Tipos que toman parámetros.
// Keyof	          Utiliza el operador keyof para crear nuevos tipos.
// Typeof	          Utiliza el operador typeof para crear nuevos tipos.
// Indexed	        Utiliza la sintaxis Tipo['a'] para acceder a un subtipo.
// Condicionales	  Tipos que actúan como si fueran sentencias en el sistema de tipos.
// Mapped	          Crea tipos mapeados en base a cada propiedad de un tipo existente.
// Template         Literal	Tipos mapeados que cambian las propiedades en base a template literal strings.

// Type Manipulation, Generics (genéricos)
// Hola mundo de los generics
// Para arrancar vamos a utilizar el “hola mundo” de los generics; la función identidad. Esta función es una función que retornara cualquiera cosa que sea pasada a ella. Podemos pensar en esta función como un echo.
// Sin los generics, tendríamos que escribir una función identidad para cada uno de los tipos o utilizar el tipo any que cubra todos estos.
// function identidad(arg: any): any {
//     return arg;
// }
// Si bien any puede ser utilizado dentro de esta función para aceptar cualquier tipo, esta decisión también implica perder la información que es exclusiva del tipo que estamos retornando. Es decir, si enviamos un number o string a la salida el compilador no tendrá forma de saberlo.
// En su lugar, necesitamos capturar el tipo que se utiliza como argumento de forma que pueda ser utilizar para denotar que valor ha sido retornado. Si enviamos un number, la única información que debe ser retornada es la que es pertinente a este tipo.
// function identidad<T>(arg: T): T {
//     return arg;
// }
// Hemos agrega la variable de tipo T para identificar a la función identidad. Este tipo T permite capturar el tipo que el usuario provee (por ejemplo number), de tal forma que podamos utilizar la información después. Aquí, utilizamos T nuevamente para retornar el tipo. Durante la inspección, podemos ver que utilizamos el mismo tipo como argumento y el tipo retornado. Esto nos permite movernos entre un tipo de información de un tipo al de otro.
// Ahora podemos entonces que esta versión de la función identidad es genérica, de forma que puede operar sobre una diversidad de tipos. A diferencia de any, los generics no pierden la información del tipo el cual retornan en la salida.
// Una vez que hemos escrito la versión generic de identidad, podemos invocarla utilizando de varias formas. La primera es enviando todos los argumentos incluyendo el tipo del argumento.
// const salida = identidad2<string>("mi string");
//  Aquí hemos incluido de forma explicita el tipo T que es un string como uno de los argumentos para la función a ser invocada.
// La segunda forma es la mas común. Enviamos solo el valor y el tipo es interferido, eso quiere decir que T es asignado de forma automática por el compilador.
// const salida2 = identidad2("mi string");
//  Note que no hemos incluido el tipo de forma explicita dentro de <>; el compilador al ver "mi string" entiende que el tipo es string. Si bien la interferencia puede ser útil para mantener el código mas reducido, en pro de la legibilidad del código, es una buena idea el especificar el tipo de forma explicita como en el ejemplo anterior.


// Type Manipulation, Generics (genéricos)
// Regresemos a la función identidad que vimos anteriormente.
// function identidad<T>(arg: T): T {
//     return arg;
// }
// Si intentamos utilizar la propiedad length como parte del argumento arg el compilador nos mostrara un error.
// function identidad<T>(arg: T): T {
//     console.log(arg.length); // <- error
//     return arg;
// }
// Lo que sucede es que estamos asumiendo que cualquier tipo enviado como T tendrá la propiedad length, escenario que no es real.
// Sin embargo si por ejemplo lo que estamos enviando es un arreglo de valores de cualquier tipo, sabemos que el tipo Array tiene una propiedad length, por lo cual esta función operaría de forma correcta.
// function identidad<T>(arg: T[]): T[] {
//     return arg;
// }
//  La función genérica toma el parámetro T, lo aplica a un arreglo de enviado como argumento que tiene valor del tipo T y retorna un arreglo de valores del mismo tipo.


// Type Manipulation, Generic Types (tipos genéricos)
// En lecciones previas creamos una función genérica llamada identidad que funciona sobre una variedad de diferentes tipos. En esta lección vamos a analizar el tipo de las propias funciones y el como crear interfaces genéricas.
// El tipo de las funciones genéricas es tal cual el de las funciones que no lo son, con los tipos de los parámetros listados al inicio, de forma similar a la declaración de funciones.
// function identidad<T>(arg: T): T {
//     return arg;
// }
// const miIdentidad: <I>(arg: I) => I = identidad;
//  Como vemos podemos usar diferentes nombres para hacer referencia al generic siempre y cuando el tipo de las variables y como estas son utilizadas sea consistente.
// Podemos también escribir un type generic como la firma de una llamada de un object literal.
// let miIdentidad2: { <T>(arg: T): T } = identidad;
// Lo que nos llevaría a escribir nuestra primer interface genérica. Tomemos para ello un object literal del ejemplo previo y traslademosle a una interface.
// interface FuncionIdentidadGenerica {
//     <T>(arg: T): T;
// }
// function identidad<T>(arg: T): T {
//     return arg;
// }
// const miIdentidad: FuncionIdentidadGenerica = identidad;
// En un ejemplo similar, podemos mover el parámetro generic para ser parte de toda la interface. Esto hace que el parámetro este visible para todo el respeto de las componentes que forman la interface.
// interface FuncionIdentidadGenerica<T> {
//     (arg: T): T;
// }

// function identidad<T>(arg: T): T {
//     return arg;
// }
// const miIdentidad: FuncionIdentidadGenerica<number> = identidad;
//  En esta actualización podemos ver que en lugar de describir lo que hace la función genérica, ahora tenemos una función no genérica que es parte de un tipo genérico. Cuando utilizamos FuncionIdentidadGenerica, tenemos ademas que especificar el tipo correspondiente (que es number en este caso). El entender cuando escribir el parámetro directamente sobre la firma de la llamada y cuando hacerlo sobre la interface es muy útil para ayudar a describir los aspectos de una función genérica.


// Type Manipulation, Generic Classes (clases genéricas)
// Una clase genérica tiene una forma similar a una interface. Las clases genéricas tienen un parámetro dentro de los brackets <> que anteceden al nombre de la clase.
// class ClaseGenericaDeSoloNumeros<T> {
//     valorCero: T;
//     agregar: (x: T, y: T) => T;
// }
// const miNumero = new ClaseGenericaDeSoloNumeros<number>();
// miNumero.valorCero = 0;
// miNumero.agregar = (x, y) => x + y;
// Este es un uso bastante literal de ClaseGenerica, pero como podemos ver nada esta restringiendo que se utilicen solo números. Como argumentos podríamos utilizar string sin ningún problema.
// const miString = new ClaseGenericaDeSoloNumeros<string>();
// miString.valorCero = "";
// miString.agregar = (x, y) => x + y;
//  Así como en una interface, el indicar el tipo de parámetro dentro de una clase, nos permite asegurarnos que todas las propiedades de la clase funcionen con el mismo tipo.
// Las clases tienen dos elementos, la parte de instancia y la parte estática. Las clases genéricas actúan solo en la parte de su instancia. Los elementos estáticos no pueden utilizar el parámetro que define el tipo de clase.


// Type Manipulation, Generic Constraints (restricciones genéricas)
// En ocasiones requerimos escribir funciones que puedan trabajar con una serie de tipos, en los cuales tenemos conocimiento de ciertas características acerca su composición.
// Supongamos que requerimos crear una función que reciba un valor que tenga disponible la propiedad .length, como ya vimos podríamos escribirlo así.
// function imprimirLongitud(arg: { length: number }): { length: number } {
//     console.log(arg.length);
//     return arg;
// }
// En lugar de esto podemos también utilizar una función genérica que permita recibir cualquier valor que extienda una interfaz con la propiedad .length.
// interface ValorConLength {
//     length: number;
// }
// function obtenerLongitud<T extends ValorConLength>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
//  Ahora que nuestra función genérica esta restringida a un T que extienda ValorConLength, también asume como restricción que T tenga una propiedad length.


// Type Manipulation, Type Parameters en Generic Constraints
// Es posible declarar un parámetro de tipo T que este restringido por otro parámetro de tipo. Por ejemplo, en la siguiente función podemos restringir la gama de propiedades que se pueden obtener de un valor A restringiendo las posibles opciones a las propiedades que lo componen.
// function obtenerPropiedad<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// const x = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// console.log(obtenerPropiedad(x, "b"));
// console.log(obtenerPropiedad(x, "g")); // <- esta línea generaría un error


// Type Manipulation, Class Types en Generics
// Cuando creamos factories (fábricas) en TypeScript utilizando generics, se hace necesario referirse al tipo de las clases mediante sus constructores.
// function crear<T>(c: { new (): T }): T {
//     return new c();
// }
// const fecha = crear(Date);
// console.log(fecha.toISOString());
// Salida… 2021-04-15T12:55:46.506Z
// Un ejemplo mas avanzado es el uso de la propiedad prototype para inferir y restringir las relaciones entre la función constructor y el tipo de la instancia.
// class Apicultor {
//     usaMascara: boolean;
// }
// class Zoologo {
//     nombre: string;
// }
// class Animal {
//     patas: number;
// }
// class Abeja extends Animal {
//     cuidador: Apicultor;
// }
// class Leon extends Animal {
//     cuidador: Zoologo;
// }
// function crearInstancia<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// console.log(crearInstancia(Leon).cuidador.nombre);
// console.log(crearInstancia(Abeja).cuidador.usaMascara);
//  Este patrón es utilizado por para dar lugar al patrón de diseño mixins.


// Type Manipulation, operador keyof
// ¿Para qué sirve el operador keyof de TypeScript?
// El operador keyof tomas el tipo de objeto y produce un string o union literal numérica de sus propiedades.
// type Coordenada = { x: number; y: number };
// type P = keyof Coordenada;
// // = tipo P es = a keyof Coordenada ('x' | 'y')
// let a: P = "x";
// let b: P = "y";
// let c: P = "d"; // <- aqui se presenta un error porque "d" no es parte de los keys
//  En el anterior ejemplo el tipo Coordenada tiene dos propiedades x y y, por lo cual keyof Coordenada equivale a 'x' | 'y'.
// Si el tipo tiene un índice string o number, keyof retornará estos tipos como parte de la unión.
// Si usamos keyof para referenciar a un Mapa entonces la unión de string | number.
// type Mapa = { [k: string]: boolean };
// type D = keyof Mapa;
// // type de D = string | number
// const i: D = 12;
// const j: D = "hola";
// Para los arreglos esto representa solo number, por lo que utilizar un string generará un error en el compilador.
// type Arreglo = { [k: number]: unknown };
// type B = keyof Arreglo;
// // type de B = string
// const x: B = 12;
// const y: B = "hola"; // <- los arreglos no permiten índices tipo string