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


// Type Manipulation, operador typeof
// JavaScript tiene ya incluido el operador typeof.
// console.log(typeof "Hola Mundo"); // -> string
// TypeScript agrega al operador typeof mayor contexto para asignar un tipo a una variable o propiedad.
// let s = "hola mundo";
// let n: typeof s; // <- ahora n es tipo string
// Esto no es muy útil para tipos básicos, pero combinado con otros operadores, se puede utilizar typeof para expresar distintos patrones. Por ejemplo, el tipo ReturnType utiliza internamente typeof para asignar el tipo que retorna una función.
// type P = (c: unknown) => boolean;
// type K = ReturnType<P>; // <- el tipo de K es boolean
// Si intentamos utilizar ReturnType usando el nombre de una función el compilador generará un error.
// function H() {
//     return "hola mundo";
// }
// type F = ReturnType<H>; // <- esto no esta permitido
// Limitaciones
// TypeScript limita intencionalmente los tipos de expresiones que se pueden utilizar con typeof.
// Específicamente, solo se permite utilizar typeof en identificadores (por ejemplo nombres de variables) en sus propiedades. Esto evite confusiones al momento de escribir el código.


// Type Manipulation, IAT, Indexed Access Types (tipos basados en índices)
// Podemos utilizar indexed access types (tipos basados en índices) para buscar una propiedad específica en otro tipo.
// type Persona = { edad: number; nombre: string; vivo: boolean };
// type Edad = Persona["edad"];
// const edad1: Edad = 5;
// const edad2: Edad = "quince"; // <- esta línea generará un error
// Los IAT son en si mismos tipos, por lo que podemos utilizar unions, keyof u otros tipos.
// type Persona = { edad: number; nombre: string; vivo: boolean };
// type I1 = Persona["edad" | "nombre"]; // <- union dentro de una referencia a índices
// type I2 = keyof Persona;
// let miI2: I2; // <- puede ser number | string o boolean
// Otro ejemplo de IAT es el poder utilizar number de forma arbitraria para obtener el tipo de los elementos de un arreglo. Esta posibilidad se puede combinar con typeof para convenientemente capturar el tipo de elemento.
// const miArreglo = [
//     { nombre: "Martha", edad: 22 },
//     { nombre: "Zhenya", edad: 31 },
//     { nombre: "Luis", edad: 28 },
// ];
// type Persona = (typeof miArreglo)[number]; // <- combinaciones posibles { nombre: string, edad: number }
// type OtraPersona = (typeof miArreglo)[number]["nombre"]; // <- string
// Si el arreglo no es homogéneo, es decir que las propiedades son diferentes para cada uno de los elementos que lo componen, el resultado de typeof miArreglo[number] es la unión de todos las opciones posibles.
// const miArreglo2 = [
//     { nombre: "Ana", sexo: "F" },
//     { nombre: "Luisa", viva: true },
//     { nombre: "Daria", edad: 40 },
// ];
// type Persona2 = (typeof miArreglo2)[number];
// // <- combinaciones { nombre: string, sexo: string } | { nombre: string, viva: boolean } | { nombre: string, edad: number }
// Solo se pueden utilizar types cuando se hace indexing, esto quiere decir que no se puede usar const para hacer una referencia a una variable.
// const key = "edad";
// type Edad = Persona[key]; // <- esto generará un error
// Sin embargo, se puede utilizar un alias type.
// type key = "edad";
// type Edad = Persona[key];


// Type Manipulation, Conditional Types (tipos basados en condicionales)
// En los programas se hace necesario tomar decisiones basadas en los valores de entrada. En JavaScript esto también es así, y considerando que los valores pueden ser fácilmente determinados, dichas decisiones también están basadas en los valores de entrada.
// Los tipos condicionales describen la relación entre los valores de entrada y los de salida.
// interface Animal {
//     live(): void;
// }
// interface Perro extends Animal {
//     ladrar(): void;
// }
// type E1 = Perro extends Animal ? number : string;
// // E1 = number porque Perro extiende de animal
// type E2 = RegExp extends Animal ? number : string;
// //  E2 = string porque RegExp no extiende de Animal
// Los tipos condicionales toman una forma que luce como expresiones condicionales con el operador ternario (condition ? expresionVerdadera : expresionFalsa).
// condicion ? tipoSiEsVerdadero : tipoSiEsFalso;
// Supongamos que deseamos una impresora de etiquetas, esta soporta dos tipos de etiquetas: las etiquetas que imprimen un identificador numérico y las que usan una combinación de números y letras.
// interface IdEtiqueta {
//     id: number;
// }
// interface NombreEtiqueta {
//     nombre: string;
// }
// function crearEtiqueta(arg: number): IdEtiqueta;
// function crearEtiqueta(arg: string): NombreEtiqueta;
// function crearEtiqueta(arg: string | number): IdEtiqueta | NombreEtiqueta;
// function crearEtiqueta(arg: string | number): IdEtiqueta | NombreEtiqueta {
//     throw "sin implementar";
// }
// crearEtiqueta("randomId");
// crearEtiqueta(10000477);
// Hemos utilizado sobrecarga para crear una función que reciba un valor arg como número o string, y en base a ello podemos abstraer la lógica necesaria para desarrollar cada uno de los casos.
// Otra forma de solucionar este mismo problema es utilizando conditional types.
// type Arg<T extends string | number> = T extends number
//     ? IdEtiqueta
//     : NombreEtiqueta;
// function crearEtiquetaSimplificado<T extends string | number>(arg: T): Arg<T> {
//     throw "sin implementar aun";
// }
// crearEtiquetaSimplificado("randomId");
// crearEtiquetaSimplificado(10000477);


// Type Manipulation, Conditional Type Constraints (restricciones)
// Frecuentemente los checks en un type condicional nos proporcionan cierta información adicional. De la misma manera que al usar restricciones como las unions combinados con generics, el uso de tipos condicionales nos permiten también definir restricciones.
// type MensajeDe<T> = T["mensaje"];
// // esto generará un error debido a que no sabemos si el tipo tiene una propiedad mensaje
// Podemos cambiar nuestro indexed type de la siguiente forma para prevenir este error.
// type MensajeDe<T extends { mensaje: unknown }> = T["mensaje"];
// ¿Qué sucede si deseamos que MensajeDe pueda tomar cualquier valor, pero que never sea el valor por default cuando la propiedad no exista?
// Podemos solucionar esto utilizando conditional types.
// type MensajeDe<T> = T extends { mensaje: unknown } ? T["mensaje"] : never;
// type Mensaje1 = MensajeDe<{ mensaje: string }>;
// // type = string
// type Mensaje2 = MensajeDe<{ mensaje: number }>;
// // type = number
// type Mensaje3 = MensajeDe<{}>;
// // type = never
// Cuando el resultado de evaluar el condicional es positivo, este nos arroja un tipo dependiendo de la propiedad mensaje que siempre existirá.
// Obtener el tipo a partir de un arreglo
// En el siguiente ejemplo, creamos un tipo llamado Flatten que usa el tipo homogéneo almacenado en un arreglo o un tipo por default.
// type Flatten<T> = T extends any[] ? T[number] : T;
// type T1 = Flatten<number[]>;
// // type number
// type T2 = Flatten<number>;
// // type = number
//  Cuando Flatten es utilizado, utiliza un indexed type cuando la parte verdadera se cumple, es decir cuando estamos utilizando un arreglo, de lo contrario hace referencia al tipo utilizado directamente.


// Type Manipulation, Inferencia en Conditional Types
// Los tipos condicionales nos proporcionan una forma de inferir los tipos con los que realizamos comparaciones, estos se obtienen en la parte verdadera utilizando la palabra infer. Para los ejemplos anterior pudimos simplificar mas aun, utilizando infer en lugar de obtener el tipo mediante un indexed type.
// type Flatten<T> = T extends Array<infer I> ? I : T;
// type T1 = Flatten<number[]>;
// // type = number
// type T2 = Flatten<number>;
// // type = number
// Esto también puede ser escrito mediante la sintaxis compacta de los arreglos [infer I];
// type Flatten2<T> = T extends [infer I] ? I : T;
// type T3 = Flatten2<string[]>;
// // type = string
// type T4 = Flatten2<string>;
// // type = string
// En ambos ejemplos hemos utilizado la palabra infer para introducir un nuevo generic llamado I. Esto nos simplifica la obtención del tipo que el arreglo almacena.
// type ObtenerSalida<T> = T extends () => infer Return ? Return : never;
// type T1 = ObtenerSalida<() => string>;
// // type = string
// type T2 = ObtenerSalida<() => () => number>;
// // type () => number


// Type Manipulation, Distributive Conditional Types (tipos condicionales distributivos)
// Cuando los tipos condicionales actúan sobre generics se convierten en distributives (distributivos) si se les proporciona una union. Por ejemplo tomemos el siguiente ejemplo.
// type ConvertirEnArreglo<T> = T extends any ? T[] : never;
// type T1 = ConvertirEnArreglo<string | number>;
// // type = string[] | number[]
// Por lo general el efecto distributivo es el esperado, sin embargo si se desea prevenir este comportamiento podemos encerrar cada elemento a ambos lados de la expresión extends.
// type ConvertirEnArreglo2<T> = [T] extends [any] ? T[] : never;
// type T2 = ConvertirEnArreglo2<string | number>;
// // type = (string | number)[]


// Type Manipulation, Mapped Types (tipos basados en mapas)
// Un mapped type (tipo basado en mapas) es un tipo generic que utiliza una unión generada a partir de keyof para iterar a través de las propiedades de un tipo y crear así otro.
// type Persona = {
//     trabaja: boolean;
//     estudia: boolean;
//     edad: number;
// };
// type Opciones<T> = {
//     [key in keyof T]: boolean;
// };
// const o: Opciones<Persona> = {
//     estudia: true,
//     trabaja: true,
//     edad: 200, // <- esta línea genera un error ya que todos deben ser boolean
// };
//  En este ejemplo Opciones tomará el nombre de todas las propiedades de T y cambiará los valores a boolean.


// Type Manipulation, Mapped Types, Modifiers (modificadores en mapas basados en tipos)
// Existen dos modificadores adicionales que pueden ser aplicados durante el proceso de mapeo: readonly y ? que afectan la mutabilidad y opcionalidad de las propiedades.
// Se pueden agregar o eliminar estos modificadores utilizando el prefijo - o +. Si no se agrega el prefijo, entonces se asume +.
// type TipoMutable<T> = {
//     -readonly [P in keyof T]: T[P];
// };
// type CuentaBloqueada = {
//     readonly id: string;
//     readonly nombre: string;
// };
// type CuentaDesbloqueada = TipoMutable<CuentaBloqueada>;
// const usuario1: CuentaBloqueada = {
//     id: "0x00001",
//     nombre: "Nora",
// };
// usuario1.nombre = "Daniela"; // <- esta linea generará un error ya que es solo lectura
// const usuario2: CuentaDesbloqueada = {
//     id: "0x00001",
//     nombre: "Abel",
// };
// usuario2.nombre = "Tomas"; // <- si podemos reasignar valores


// Type Manipulation, Mapped Types, Key Remapping (re-mapeado de propiedades)
// En TypeScript 4.1 y versiones mas recientes, es posible remapear las propiedades en tipos utilizando la clausula as dentro de un mapped type.
// type Etiqueta = {
//     id: number;
//     cantidad: number;
// };
// type Remapear<T> = {
//     [K in keyof T as `mi${Capitalize<string & K>}`]: T[K];
// };
// type Remapeado = Remapear<Etiqueta>;
// const miEtiqueta: Remapeado = {
//     miCantidad: 100,
//     miId: 12122,
// };


// Type Manipulation, TLT : Template Literal Types (tipos literales de plantilla)
// Los TLT (template literal types o tipos literales de plantilla) están basados en los SLT (string literal types o tipos literales de cadena), y tienen la capacidad de expandirse en muchas cadenas mediante las uniones.
// Tienen la misma sintaxis que las TLS (template literal string, texto ${expresion}) en JavaScript, pero se utilizan en situaciones de tipos.
// type Locacion = "mundo";
// type Saludo = `Hola ${Locacion}`;
// // type = "Hola mundo"
// Cuando se utiliza una unión, el tipo es el conjunto de todas las literales de cadena posibles que conforman cada miembro de la unión.
// type Correo = "correo_mensaje" | "correo_cabeceras";
// type Destinatario = "destinatario_nombre" | "destinatario_direccion";
// type UnionMedianteLiteral = `${Correo | Destinatario}_id`;
// // type = "destinatario_nombre_id" | "destinatario_direccion_id" | "correo_mensaje_id" | "correo_cabeceras_id"
//  Tener cuidado de utilizar la concatenación, en este caso se concatenó con _id, de otra forma solo producirá la unión Correo | Destinatario.


// Type Manipulation, Intrinsic String Manipulation Types (tipos intrínsecos de manipulación de strings)
// Para ayudar con la manipulación de strings, TS incluye una serie de tipos que pueden ser utilizados para manipular strings. Estos tipos vienen provistos por el compilador para cuestiones de performance.
// Para convertir los tipos basados en strings en mayúsculas/minúsculas.
// type Saludo = "Hola Mundo";
// type SaludoEnMayusculas = Uppercase<Saludo>; // type = "HOLA MUNDO"
// type SaludoEnMinusculas = Lowercase<Saludo>; // type = "hola mundo"
// Existen otras opciones como Capitalize<string> y Uncapitalize<string> que crean tipos con el primer caracter en maúscula o minúscula según sea el caso.
// type SaludoCapitalizado = Capitalize<Saludo>; // type = "Hola Mundo"
// type SaludoDescapitalizado = Uncapitalize<Saludo>; // type = "hola mundo"


