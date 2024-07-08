//Tipos de Objetos

//En JavaScript, la forma mas básica en la que agrupamos y enviamos datos es a través de objetos. En TypeScript representamos estos a traves de object types (tipos de objeto).

// Éstos object types pueden ser anónimos.
// function saludar(persona: {nombre: string; edad: number}) {
//   return `Hola ${persona.nombre}`;
// }
// console.log(saludar({nombre: 'Facundo', edad: 23}));
//o pueden ser nombrados como una interface
// interface Persona {
//   nombre: string;
//   edad: number;
// }
// function saludar(persona: Persona) {
//   return `Hola ${persona.nombre}`;
// }
// console.log(saludar({nombre: 'Facundo', edad: 23}));
//o puede tambien ser nombrados como un alias
// type Persona = {
//   nombre: string;
//   edad: number;
// };
// function saludar(persona: Persona) {
//   return `Hola ${persona.nombre}`;
// }
// console.log(saludar({nombre: 'Facundo', edad: 23}));
//En cualquiera de los ejemplos que acabamos de mostrar, es posible obtener la propiedad nombre (que es de tipo string) y edad (que es de tipo number)


//Object Types Property Modifiers (modificadores de propiedades)
//Cada propiedad que existe en un objeto especifica un grupo de cosas: el tipo, si la propiedad es opcional, y si la propiedad es de solo lectura (no escribible) o no.

// Propiedades opcionales
// La mayoría de las veces, nos vamos a encontrar lidiando con objetos que pueden tener o no una propiedad definida. En estos casos, marcamos esta propiedad como opcional añadiendo el signo de interrogación ? al final del nombre de la propiedad.
// interface Computador {
//   os: 'Windows' | 'Mac' | 'Linux';
//   monitor?: 'Crt' | 'Led';
//   memoria: number;
//   procesador: 'Intel' | 'Amd';
// }
// function imprimir(computador: Computador) {
//   console.log(`Sistema operativo: ${computador.os}`)
//   console.log(`Memoria: ${computador.memoria}`)
//   console.log(`Procesador: ${computador.procesador}`)
// }
// imprimir ({
//   os: 'Windows',
//   memoria: 8,
//   procesador: 'Intel'
// })
//En este ejemplo, la propiedad monitor es considerada opcional. Podemos elegir si enviarla o no como parte del objeto que se envía como argumento a la función imprimir. Si no declaramos un valor para esta su valor sera undefined, es decir no definida.
//Si deseamos definir unos valores por default a las propiedades del parámetro computador, podemos hacer utilizando la destructuración.
// interface Computador {
//   os: 'Windows' | 'Mac' | 'Linux';
//   monitor?: 'Crt' | 'Led';
//   memoria: number;
//   procesador: 'Intel' | 'Amd';
// }
// function imprimir({ os, memoria, procesador, monitor = "Led" }: Computador) {
//   console.log(`Sistema operativo: ${os}`);
//   console.log(`Monitor: ${monitor}`);
//   console.log(`Memoria: ${memoria}`);
//   console.log(`Procesador: ${procesador}`);
// }
// imprimir({
//   os: "Windows",
//   memoria: 8,
//   procesador: "Intel",
// });
//Al descomponer el parámetro en cada uno de sus valores, podemos asignar a cada uno de estos un valor por default.


//Object Types Readonly Properties (propiedades de solo lectura)

// Las propiedades pueden ser marcadas como propiedades de solo lectura o readonly dentro de TypeScript. En una propiedad tipo readonly solo podemos asignarle un valor cuando la instancia es creada, pero a partir de ese momento no podemos modificarlo.
// interface Perro {
//   readonly raza: string;
// }
// const miCachorro: Perro = { raza: 'Shitzu' };
// console.log(`La raza de mi cachorro es ${miCachorro.raza}`)
//Sin embargo si complementamos el programa intentando cambiar la raza de nuestro cachorro (lo cual en teoría no es posible), el compilador nos generará un error.
// interface Perro {
//   readonly raza: string;
// }
// const miCachorro: Perro = { raza: "Shitzu" };
// console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);
// miCachorro.raza = "pitbull";
//Es importante entender las expectativas de lo que implica el uso de readonly. Es una señal de alerta durante el desarrollo en TypeScript acerca del como los objetos deben de ser utilizados. TypeScript no toma en cuenta las propiedades de dos tipos si estos son readonly al momento de verifica su compatibilidad, de tal forma que las propiedades readonly pueden ser cambiadas mediante el uso de un alias.
// interface Persona {
//   edad: number;
// }
// interface EdadNoEscribible {
//   readonly edad: number;
// }
// const Luis: Persona = { edad: 20 };
// const Pedro: EdadNoEscribible = Luis;
// Luis.edad++;
// Pedro.edad++; // <-- esto generara un error


//Object Types Extender Tipos
//Es muy común tener tipos que pueden ser versiones de otros tipos. Por ejemplo podemos tener el tipo Direccion que describe los campos que son necesarios para el envío de correspondencia.
// interface Direccion {
//   nombre: string;
//   calle: string;
//   numero: number;
//   ciudad: string;
//   pais: string;
//   codigoPostal: string;
// }
//Sin embargo en algunos casos es necesario agregar alguna información adicional, por ejemplo los departamentos comparten el mismo número sobre la calle, suelen tener un identificador interno que puede ser una combinación de números y letras.
// interface DireccionDeApartamento {
//   nombre: string;
//   calle: string;
//   numero: number;
//   unidad: string;
//   ciudad: string;
//   pais: string;
//   codigoPostal: string;
// }
//Esto implica que tengamos que repetir todas las propiedades de la interface Direccion. Para evitar esto podemos usar el concepto de extensión, que permite utilizar la interface Base y solo agregar aquellos que hacen falta.
// interface Direccion {
//   nombre: string;
//   calle: string;
//   numero: number;
//   ciudad: string;
//   pais: string;
//   codigoPostal: string;
// }
// interface DireccionDeUnDepartamento extends Direccion {
//   unidad: string;
// }


//Object Types Extender Multiples Tipos
//Las interfaces también permiten extender desde múltiples interfaces. Supongamos que tenemos una computadora MacbookPro, la cual esta conformada por los valores de las interfaces Computador, SistemaOperativo y Portatil. Por ende podemos combinar todas estas interfaces para asignar valores a nuestro nuevo objeto.
// interface Computador {
//   memoria: string;
//   procesador: string;
//   hdd: string;
// }
// interface SistemaOperativo {
//   so: string;
//   version: string;
// }
// interface Portatil extends Computador, SistemaOperativo {
//   bateria: string;
//   monitor: string;
//   teclado: string;
// }
// interface Servidor extends Computador, SistemaOperativo {
//   conexion: string;
// }
// const macbookPro: Portatil = {
//   memoria: "16G",
//   procesador: "intel",
//   hdd: "1TB",
//   so: "osx",
//   version: "catalina",
//   bateria: "litio",
//   monitor: "17 pulgadas",
//   teclado: "español",
// };
// const ubuntuServer: Servidor = {
//   memoria: "64G",
//   procesador: "intel",
//   hdd: "4TB",
//   so: "ubuntu",
//   version: "trusty",
//   conexion: "ethernet",
// };
//Teniendo como base las interfaces Computador y SistemaOperativo, podemos crear otras 2 interfaces Portatil y Servidor. En el caso de Portatil requerimos de un monitor y una batería, un monitor y un gabinete de cierta dimensión. Los servidores por su lado solo se administran desde la distancia, por lo que solo requerimos conectarlo para utilizarlo, por ello especificamos solo la configuración de la conexión.


//Object Types Intersection Types (interseccion de tipos)
// Las interfaces permiten construir nuevos tipos a partir de extender otros. TypeScript permite esta construcción a partir de la intersección que se utiliza para combinar tipos de datos existentes.
// Una tipo de intersección esta definida por el uso del operador &.
// interface Computador {
//   memoria: string;
//   procesador: string;
//   hdd: string;
// }
// interface SistemaOperativo {
//   so: string;
//   version: string;
// }
// type Portatil = Computador & SistemaOperativo;
// const macbookPro: Portatil = {
//   memoria: "16G",
//   procesador: "intel",
//   hdd: "1TB",
//   so: "osx",
//   version: "catalina",
// }
//Retomado el ejemplo en donde combinamos las interfaces, podemos ver que podemos utilizar la intersección para crear un nuevo alias type. En este caso el alias Portatil solo contiene las propiedades de Computador y SistemaOperativo.


//Object Types Interfaces vs Intersections
//Hemos visto dos formas en las cuales se pueden combinar tipos que tienen cierta similitud y simultáneamente diferentes. Con las interfaces utilizamos la clausula extends para poder extender desde otros tipos, algo similar a lo que sucede con las intersecciones. En ambos casos es posible dar un nombre al resultado de extender o interseccionar tipos.
//La principal diferencia entre extensión e intersección es la forma en la que cada una de estas formas manejan la resolución de conflictos, y esta suele ser la razón por la cual se elige entre una forma u otra.


//Object Types Generics (tipos genericos)
//Imaginemos que tenemos un tipo Caja que contiene cualquier valor posible como string, number, etc.
// interface Caja {
//   contenido: any;
// }
// En esta ocasión, la propiedad contenido es definida como any, lo que permite trabajar con cualquier valor, pero que puede conducir a escenarios no deseados.
// Si por el contrario utilizamos uknown, esto implicaría que para aquellos casos en los cuales ya conocemos el tipo de contenido, se requeriría hacer comparaciones de precaución, o utilizar aserciones (asserts) para prevenir algunos errores.
// interface Caja {
//   contenido: unknown;
// }
// let x: Caja = {
//   contenido: "hola mundo",
// };
// // mediante typeof podemos verificar si el tipo es string
// if (typeof x.contenido === "string") {
//   console.log(x.contenido.toLocaleLowerCase());
// }
// // mediante "as tipo" podemos decirle al compilador que esto es siempre string
// console.log((x.contenido as string).toLocaleLowerCase());
//Otro posible enfoque es poder utilizar un tipo para cada uno de los casos.
// interface CajaNumber {
//   contenido: number;
// }
// interface CajaString {
//   contenido: string;
// }
// interface CajaBoolean {
//   contenido: boolean;
// }
// Sin embargo esto implica que tendremos que crear diferentes funciones/sobrecarga, para poder operar con cada uno de estos tipos.
// function setContenido(caja: CajaNumber, nuevoContenido: string): void;
// function setContenido(caja: CajaString, nuevoContenido: number): void;
// function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
// function setContenido(caja: { contenido: any }, nuevoContenido: any) {
//     caja.contenido = nuevoContenido;
// }
// Utilizar sobrecarga para cubrir los escenarios de cada uno de los posibles tipos, no resulta ser la solución mas adecuada para solucionar este problema.

//¿Qué son los Generics en TypeScript?
// Una herramienta muy útil para construir soluciones que respondan a tipos dinámicos es el uso de generics.
// interface Caja<T> {
//   contenido: T;
// }
// Piensa en la Caja como una plantilla que recibe un tipo, en donde T es un contenedor que será reemplazado con algún tipo. Cuando TypeScript ve Caja<string>, va a reemplazar cada instancia de T dentro de Caja<T> con el tipo string, para que se genere así un contenido: string.
// interface Caja<T> {
//   contenido: T;
// }
// let cajaDeString: Caja<string> = { contenido: "hola mundo" };
// let cajaDeNumero: Caja<number> = { contenido: 100 };
// let cajaDeFecha: Caja<Date> = { contenido: new Date() };
// Podemos ver que nuestra interface Caja<T> se convierte en una interface reutilizable para diferentes tipos. De igual forma podemos crear alias genéricos.
// type Caja<T> = {
//   contenido: T;
// };
// let cajaDeString: Caja<string> = { contenido: "hola mundo" };
// let cajaDeNumero: Caja<number> = { contenido: 100 };
// let cajaDeFecha: Caja<Date> = { contenido: new Date() };


//Object Types Array Type (el tipo arreglo)
// Los generics son por lo general un contenedor de cierto tipo que trabajar de forma independiente del tipo de elementos que contiene. Es ideal para estructuras de datos trabajar de esta forma, de manera que sean reutilizables a través de diferentes tipos de datos.
// Hemos estado trabajando con el tipo Array a lo largo de las lecciones anteriores. Cuando hacemos referencia a string[] o number[], usamos la sintaxis alternativa a Array<string> y Array<number>.
// const imprimirTareas = ( v: Array<string> ) => {
//   v.forEach((v) =>{
//     console.log(v);
//   });
// };
// const misTareas: string[] = [
//   "levantarse",
//   "lavarse los dientes",
//   "sacar al perro",
// ];
// imprimirTareas(misTareas);
// En la función imprimirTareas recibimos un parámetro tipo Array<string> (un arreglo de cadenas). Cuando invocamos la función imprimirTareas le enviamos el argumento misTareas que es tipo string[], que también hace referencia al mismo tipo de arreglo. Esto debido a que tanto Array<string> como string[] representan lo mismo.
// Así como en la lección anterior en donde hablamos de generics, Array también representa un generic.
// interface Array<T> {
//   /**
//    * Obtiene el tamaño del arreglo
//    */
//   length: number;

//   /**
//    * Remueve el útimo elemento del arreglo y lo retorna
//    */
//   pop(): T | undefined;

//   /**
//    * Agrega un nuevo elemento al arreglo y retorna el tamaño de este
//    */
//   push(...items: T[]): number;

//   // ...
// }
// La programación moderna en JavaScript provee ademas otras estructuras que son también generics, como Map<K, V>, Set<T, y Promise<T>. Esto quiere decir que debido a como funcionan Map, Set y Promise, pueden trabajar con cualquier conjunto de tipos.


// Object Types ReadonlyArray type (el tipo de arreglo de solo lectura)
// El ReadonlyArray es un tipo especial que describe arreglos que no deberían cambiar.
// const miLista: ReadonlyArray<string> = ["a", "b", "c"];
// miLista.push("d"); // <- esta línea generaría un error
// El tipo ReadonlyArray es el equivalente para los arreglos de readonly para las propiedades. Cuando vemos una función que consume ReadonlyArray, nos dice que podemos pasar un arreglo a la función sin preocuparnos que este arreglo va a cambiar dentro de ella.
// A diferencia de Array, no existe el constructor ReadonlyArray que pueda ser utilizado. Por lo cual no se puede crear un arreglo ReadonlyArray de la siguiente forma.
// const miLista = new ReadonlyArray("a", "b", "c");
// En lugar de ello podemos asignar un arreglo normal a uno de solo lectura.
// const miLista: ReadonlyArray<string> = ["a", "b", "c"]; 
// Como ya comentamos, sintaxis alternativa de Array<Type> es Type[]. Para el caso de ReadonlyArray[Type] hay que agregar el prefijo readonly Type[] que indica que el arreglo es de solo lectura.


// Object Types Tuples (tuplas)
// Una tupla es otro tipo de Array que conoce exactamente cuantos elementos, de que tipo y en que posición contiene el arreglo.
// type Auto = [string, number];
//Aquí tenemos el tipo Auto que es una tupla que contiene un string y un number. Para TypeScript la tupla Auto describe un arreglo que contiene en la posición 0 un string y en la posición 1 un number.
// type Auto = [string, number];
// const prius: Auto = ["Toyota", 2015];
// const civic: Auto = ["Honda", 2016];
// console.log("El Prius es marca: ", prius[0], " y modelo: ", prius[1]);
// console.log("El Civic es marca: ", civic[0], " y modelo: ", civic[1]);
// Si intentamos escribir un tipo invalido, el compilador de TypeScript generará un error. A diferencia de los arreglos de solo lectura, las tuplas si permiten que el valor de este tipo de arreglos sea modificado siempre que este se ajuste a la definición de la tupla. También soporta operaciones como push.
// Las tuplas son muy utilizadas dentro de las convenciones de API’s, cuando cada uno de los elementos tiene un sentido de obviedad. Esto brinda una buena flexibilidad cuando deseamos asignar nombres a partir de la destructuración.
// const prius: [string, number] = ["Toyota", 2015];
// const [marca, modelo] = prius;
// console.log("La marca del prius es: ", marca);
// console.log("El modelo del prius es: ", modelo);
// Otro detalle que pudiera ser interesante es que las tuplas pueden tener propiedades opcionales utilizando el signo de interrogación ? después del tipo. Los elementos opcionales de una tupla pueden solo aparecer al final, y también afectan el valor length (tamaño) de la tupla.
// type Auto = [string, number, string?];
// const prius: Auto = ["Toyota", 2015, "Raul Jimenez"];
// const civic: Auto = ["Honda", 2021];
// console.log("El prius fue vendido a:", prius[2]);
// console.log("El civic fue vendido a:", civic[2]);

// Rest tuples (valores rest en tuplas)
// Las tuplas pueden contener elementos rest, este puede utilizarse solo para el último elemento de una tupla.
// type StringNumberBooleans = [string, number, ...boolean[]];
// const a: StringNumberBooleans = ["a", 1, true, false, true];

// Readonly tuples (tuplas de solo lectura)
// Un detalle final acerca de las tuplas es que estas también pueden ser de solo lectura readonly, y esto puede ser especificado de la siguiente forma.
// type Auto = readonly [string, number];
// const prius: Auto = ["Toyota", 2014];
// prius[0] = "Honda"; // <- esta linea generaria un error