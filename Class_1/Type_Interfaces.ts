//Tipos Interfaces

//Uno de los principios fundamentales de TypeScript es el que la verificación del tipado se enfoca en la forma que tienen los valores. Esto es a veces conocido como duck typing (tipado pato) o structural subtyping (tipado subestructurado). En TypeScript, las interfaces juegan el rol de nombrar estos tipos, y son una forma poderosa de definir contratos dentro del código así como contratos fuera del proyecto.

function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}
let myLabel = { number: 10, label: 'This is my label' };
printLabel(myLabel);

//El verificador de tipos revisa el proceso que invoca la función imprimirEtiqueta. Esta función tiene un solo parámetro que requiere que el objeto que se envía llamado etiqueta tiene una propiedad llamada label del tipo string. Si bien el objeto tiene otra propiedad llamada numero, como podemos ver no es necesario que el objeto miEtiqueta tenga exactamente las mismas propiedades del contrato del argumento etiqueta: { label: string }, pero si que implementa aquellas que forman parte del contrato.

//Podemos reescribir el ejemplo anterior definiendo una interface que describe los requerimientos anteriores.

interface Label {
  label: string;
}

function printLabel1(labelObj: Label) {
  console.log(labelObj.label);
}

let myObject = { number: 10, label: "This is my label" };
printLabel1(myObject);

//La interface Etiqueta es un nombre que podemos utilizar para describir los requerimientos del ejemplo previo. Contiene una propiedad llamada label del tipo string. Toma en cuenta que el objeto que enviamos a la función no implementa de forma implícita esta interface. La única parte relevante es que la composición del valor enviado coincida para que se considere valido.

//El type checker no requiere que las propiedades se definan en el orden de la interface.

//Propiedades opcionales de las interfaces
//No todas las propiedades de una interface tienen que ser requeridas. Algunas existen solo durante ciertas condiciones o incluso pueden ni siquiera estar presentes.

interface Square {
  color?: string;
  width: number;
}
function createSquare(square: Square): { area: number } {
  const area = square.width * square.width;
  return { area };
}
createSquare({ width: 10 });

//Las interfaces con propiedades opcionales son escritas de forma similar a otras interfaces pero incluyen propiedades que llevan incluido el sufijo ? .

//Propiedades de solo lectura de las interfaces
//Algunas propiedades pueden ser solo modificables cuando se crean los objetos. Para especificar este comportamiento se deben definir las clases como readonly (de solo lectura).

interface Punto {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto = { x: 10, y: 20 };
punto1.x = 20;

//En el ejemplo anterior, cuando definimos punto1 este puede recibir los valores asignados, pero en cuanto intentamos reasignar un valor a cualquiera de las propiedades, el compilador muestra un error.

// TypeScript incluye el tipo ReadonlyArray<T> que es el mismo que Array<T> con todos sus mutators (métodos para cambiar el arreglo) removidos, de tal forma que no se pueda cambiar el arreglo después de que se crea.

let ro: ReadonlyArray<number> = [1, 2, 3, 4, 5];
ro.push(6);

//En el ejemplo anterior al intentar utilizar push se generará un error debido a que ReadonlyArray no define arreglos que no pueden ser modificados.

//readonly vs const

// La forma mas sencilla de entender readonly es si lo comparamos con const. Las variables utilizan const mientras que las propiedades usan readonly.

// Tipos Interfaces
// **Ejercicio:**
// - Define una interfaz `Etiqueta` con una propiedad `label` de tipo `string`.
// - Escribe una función `imprimirEtiqueta` que reciba un objeto que implemente la interfaz `Etiqueta` y lo imprima en la consola.

interface Etiqueta {
    label: string;
}
function imprimirEtiqueta (etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}
let miEtiqueta = {label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta)

// Propiedades Opcionales en Interfaces
// **Ejercicio:**
// - Define una interfaz `Cuadrado` con una propiedad `color` opcional de tipo `string` y una propiedad `ancho` de tipo `number`.
// - Escribe una función `crearCuadrado` que reciba un objeto que implemente la interfaz `Cuadrado` y retorne el área del cuadrado.

interface Cuadrado {
    color?: string;
    ancho: number;
}
function crearCuadrado(c: Cuadrado) {
    return `El area del cuadrado es ${c.ancho*c.ancho}`;
}
let miCuadrado = {color:"rojo", ancho: 10}
console.log(crearCuadrado(miCuadrado));

// Propiedades de Solo Lectura en Interfaces
// **Ejercicio:**
// - Define una interfaz `Punto` con propiedades `x` y `y` de solo lectura.
// - Declara una variable `punto1` que implemente la interfaz `Punto` y asigna valores a `x` y `y`.

interface Punto {
    readonly x: number;
    readonly y: number;
}
let punto1: Punto =  { x: 20, y: 30 };
console.log(punto1);