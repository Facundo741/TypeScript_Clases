// Introducción a los decoradores en TypeScript
// Con la aparición de las clases en ECMAScript en ES6, existen algunos nuevos escenarios en los cuales se agrega soporte adicional mediante anotaciones a las clases y los elementos que las componen. Los decoradores proveen una forma de agregar anotaciones y meta-programming syntax (sintaxis de meta-programación) para la declaración de clases y sus miembros. Los decoradores se encuentran en la fase 2 proposal (fase 2 de propuesta) para JavaScript, y están disponibles como una característica experimental de TypeScript.
// ¿Cómo agregar soporte experimental en TypeScript?
// Para habilitar el soporte experimental para habilitar decoradores, se debe habilitar la propiedad experimentalDecorators en la configuración del compilador, ya sea como parámetro en la línea de comandos o en el archivo tsconfig.json.
// ¿Como habilitar los decoradores de TypeScript desde la línea de comandos?
// $ tsc --target ES5 --experimentalDecorators
// ¿Cómo habilitar decoradores desde el archivo de configuración tsconfig.json?
// {
//     "compilerOptions": {
//         "target": "ES5",
//         "experimentalDecorators": true
//     }
// }
// ¿Qué es un decorador?
// Un decorador es un tipo especial de declaración que puede ser asociada a la declaración de una clase, método, accesor, propiedad o parámetro. Los decoradores usan la forma @expression, en donde expression debe ser evaluado como una función que será llamada en tiempo de ejecución con información acerca de la declaración decorada.
// Por ejemplo, dado el decorador @sellado podemos escribir una función como la siguiente.
// function sellado() {
//     // hacer algo
// }


// Decorators, Factories (fábricas)
// Si queremos personalizar como un decorador es aplicado a una declaración, podemos escribir una factory (fábrica). Un fábrica de decoradores es simplemente una función que retorna la expresión que es llamada por el decorador en tiempo de ejecución.
// Podemos escribir una fábrica de la siguiente forma:
// function color(value: string) {
//     // esta es la fábrica
//     return function (target) {
//         // este es el decorador
//     };
// }


// Decorators, Composition (composición)
// Se pueden aplicar múltiples decoradores a una declaración, por ejemplo en una sola línea:
// @f @g x
// O en líneas múltiples:
// @f
// @g
// x
// Cuando múltiples decoradores se aplican a una declaración sencilla, su valor es similar a una función de composición en Matemáticas. En este modelo las funciones f y g, el resultado de la composición es (f * g)(x) es equivalente a f(g(x)).

// Por llo, la forma en la que se evalúan los decoradores es la siguiente:
// La expresión para cada decorador es evaluada de arriba hacia abajo.
// Los resultados son entonces invocados como funciones de abajo hacia arriba.
// Si vamos a utilizar fabricas de decoradores, podemos observar el orden de esta evaluación con el siguiente ejemplo.
// function f1() {
//     console.log("f1 evaluada");
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log("f1 ejecutada");
//     };
// }
// function f2() {
//     console.log("f2 evaluada");
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         console.log("f2 ejecutada");
//     };
// }
// class ClaseEjemplo {
//     @f1()
//     @f2()
//     saludar() {}
// }
// Salida…
// f1 evaluada
// f2 evaluada
// f2 ejecutada
// f1 ejecutada
// Evaluación de los decoradores
// El orden en el que los decoradores es aplicado es el siguiente.
// Decoradores de parámetros (decoradores de parámetros), seguidos por Method Accesors o Decoradores de Propiedades son aplicados a cada instancia de cada miembro.
// Decoradores de parámetros, seguido por Method Accesors, o Decoradores de Propiedades son aplicados a cada miembro estático.
// Decoradores de parámetros, son aplicados al constructor.
// Decoradores de clases son aplicados a las clases.


// Decorators, Classes (decoradores de clases)
// Un Class Decorator (Decorador de Clase) es declarado justamente antes de la clase. La clase decorator es aplicada al constructor de la clase, y puede ser utilizado para observar, modificar o reemplazar la definición de una clase.
// export function cambiarNombre(_nombre: string) {
//     return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//         return class extends constructor {
//             nombre = _nombre;
//         };
//     };
// }
// export function cambiarAlias(_alias: string) {
//     return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//         return class extends constructor {
//             alias = _alias;
//         };
//     };
// }
// export function cambiarEdad(_edad: number) {
//     return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//         return class extends constructor {
//             edad = _edad;
//         };
//     };
// }
// Si ejecutamos el siguiente bloque…
// class usuario {
//     constructor(
//         public nombre: string,
//         public alias: string,
//         public edad: number
//     ) {}
//     saludar() {
//         console.log(`Mi nombre es ${this.nombre}`);
//         console.log(`me dicen ${this.alias}`);
//         console.log(`y tengo ${this.edad} años`);
//     }
// }
// const u1 = new usuario("Roberto", "Robert", 19);
// u1.saludar();
// La salida será…
// Mi nombre es Roberto
// me dicen Robert
// y tengo 19 años
// Pero si aplicamos los decoradores, estos reescribirán los valores enviados al constructor.
// import { cambiarAlias, cambiarEdad, cambiarNombre } from "./cambiarNombre";
// @cambiarNombre("Francisco")
// @cambiarAlias("Paco")
// @cambiarEdad(20)
// class usuario {
//     constructor(
//         public nombre: string,
//         public alias: string,
//         public edad: number
//     ) {}
//     saludar() {
//         console.log(`Mi nombre es ${this.nombre}`); //Mi nombre es Francisco
//         console.log(`me dicen ${this.alias}`); //me dicen Paco
//         console.log(`y tengo ${this.edad} años`); //y tengo 20 años
//     }
// }
// const u1 = new usuario("Roberto", "Robert", 19);
// u1.saludar();


// Decorators, Methods (decoradores de métodos)
// Un decorador de método es declarado justo antes del método. El decorador es aplicado al descriptor de la propiedad para el método, y puede ser utilizado para observar, modificar o reemplazar la definición de un método.
// El decorador de métodos tiene tres componentes:
// target: contiene el objetivo (la función de la clase).
// propertyKey: el nombre del método.
// descriptor: PropertyDescriptor del objeto, nos proporciona la función (método) dentro de descriptor.value y es aquí en donde podemos cambiar su comportamiento.
// Suponiendo que tuviéramos un controlador en el cual un decorador proporciona la posibilidad de definir que la pagina home se despliega través de la ruta “/home” mediante el método GET.
// function get(ruta: string) {
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         const content = descriptor.value();
//         descriptor.value = function (...args: any) {
//             console.log("El contenido es:", content); //El contenido es: contenido de la pagina del home
//             console.log("La ruta de carga es:", ruta); //La ruta de carga es: /home
//             console.log("El método es: get"); //El método es: get
//         };
//     };
// }
// class Controlador {
//     @get("/home")
//     mostrarHome() {
//         return "contenido de la pagina del home";
//     }
// }
// const miControlador = new Controlador();
// miControlador.mostrarHome();
// "Mediante descriptor.value se puede redefinir el método mostrarHome(), podemos incluso obtener la salida original de esta función."


// Decorators, Properties (decoradores de propiedades)
// Un decorador de propiedades es declarado antes de la declaración de la propiedad. Y no puede ser utilizado para decorar ningún otro scope como podría ser un método o una clase.
// La expresión para el decorador de la propiedad será llamada como una función en tiempo de ejecución, con los siguientes argumentos:
// La función constructora de la clase para un miembro estático o el prototype de la clase para una instancia.
// El nombre del miembro.
//  El Property Descriptor no es proporcionado como argumento para un decorador de propiedades.
// function Writable(value: boolean) {
//     return function (target: any, propertyKey: string): any {
//         console.log("target", target); // PostRequest {}
//         console.log("propertyKey", propertyKey); // _email
//         const descriptor: PropertyDescriptor = {
//             writable: value,
//         };
//         return descriptor;
//     };
// }
// class PostRequest {
//     @Writable(true)
//     public _email: string = "";
// }
// const miRequest = new PostRequest();
// miRequest._email = "luis@mail.com";
// Le hemos indicado a nuestra clase PostRequest que la propiedad _email es escribible mediante el decorador Writable.
// Si cambiamos el valor del argumento true a false, y volvemos a ejecutar el código, obtendremos esto en la salida.
// TypeError: Cannot assign to read only property '_email' of object '#<PostRequest>'
// Lo anterior debido a que hemos indicado que la propiedad _email no es escribible.