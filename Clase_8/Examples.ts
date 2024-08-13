// Decorators, Factories (Fábricas de decoradores)
// Consigna: Implementa un decorador de clase utilizando una fábrica de decoradores. La fábrica debe aceptar un argumento logString que se imprimirá junto con el constructor de la clase cuando se cree una instancia de la clase decorada.
// function Logger(logString: string) {
//   return function(constructor: Function) {
//       console.log(logString);
//       console.log(constructor);
//   };
// }

// @Logger('LOGGING - Persona')
// class Persona {
//   nombre = 'Juan';
//   constructor() {
//       console.log('Creando una instancia de Persona...');
//   }
// }

// const persona = new Persona();
// // Output:
// // LOGGING - Persona
// // Creando una instancia de Persona...


// Decorators, Composition (Composición de decoradores)
// Consigna: Aplica múltiples decoradores a una clase para observar cómo se ejecutan en orden inverso al de su aplicación. Crea dos decoradores simples Logger1 y Logger2 que imprimen un mensaje cuando se aplican.
// function Logger1(constructor: Function) {
//   console.log('Logger1');
// }
// function Logger2(constructor: Function) {
//   console.log('Logger2');
// }
// @Logger1
// @Logger2
// class Producto {
//   constructor(public nombre: string) {}
// }
// const producto = new Producto('Laptop');
// // Output:
// // Logger2
// // Logger1


// Decorators, Classes (Decoradores de clases)
// Consigna: Crea un decorador de clase Sellable que añade una propiedad estaEnVenta a la clase decorada. Luego, crea una instancia de la clase decorada y muestra el valor de 'estaEnVenta'.
// function Sellable(constructor: Function) {
//   constructor.prototype.estaEnVenta = true;
// }
// @Sellable
// class Coche {
//   modelo = 'Tesla Model 3';
// }
// const miCoche = new Coche();
// console.log(miCoche.estaEnVenta); // Output: true


// Decorators, Methods (Decoradores de métodos)
// Consigna: Implementa un decorador de método Autobind que automáticamente bindea el método decorado al contexto de la instancia. Esto es útil para asegurar que el método siempre se llame con el 'this' correcto.
// function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//       configurable: true,
//       enumerable: false,
//       get() {
//           const boundFn = originalMethod.bind(this);
//           return boundFn;
//       }
//   };
//   return adjDescriptor;
// }
// class Boton {
//   mensaje = 'Haz clic en mí!';
//   @Autobind
//   clickHandler() {
//       console.log(this.mensaje);
//   }
// }
// const boton = new Boton();
// const botonElemento = document.querySelector('button');
// botonElemento?.addEventListener('click', boton.clickHandler); 
// // Output: Haz clic en mí!


// Decorators, Properties (Decoradores de propiedades)
// Consigna: Crea un decorador de propiedad ReadOnly que haga que una propiedad de la clase no pueda ser modificada después de ser inicializada. Aplica este decorador a la propiedad 'titulo' de la clase 'Libro'.
// function ReadOnly(target: any, propertyName: string) {
//   const descriptor: PropertyDescriptor = {
//       writable: false
//   };
//   return descriptor;
// }
// class Libro {
//   @ReadOnly
//   titulo: string;

//   constructor(titulo: string) {
//       this.titulo = titulo;
//   }
// }
// const miLibro = new Libro('1984');
// miLibro.titulo = 'Un Mundo Feliz'; // Error: No se puede asignar un valor a una propiedad de solo lectura.