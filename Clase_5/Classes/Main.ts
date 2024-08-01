// Classes (clases)
// TypeScript ofrece soporta para el uso de clases class que fueron introducidas en ES2015.
// Así como con otras características de JavaScript, TypeScript agrega anotaciones y características adicionales a la sintaxis que permiten crear relaciones entre las clases y otros tipos.
// Elementos de las clases
// La estructura mas básica de una clase es la siguiente… 
// class Punto {}
// Esta clase Punto si bien no es muy útil en esta expresión básica, va obteniendo mayor utilidad conforme se van agregando elementos a la clase.
// Campos de una clase
// La declaración de un campo en una clase crea por default una propiedad escribible.
// class Punto {
//     x: number;
//     y: number;
// }
// const miPunto = new Punto();
// miPunto.x = 0;
// miPunto.y = 0;
// Al igual que con otros elementos de TypeScript, como las variables, si en una clase no se especifica el tipo del campo, este por default toma el valor any.
// class Punto {
//     x; // <- any
//     y; // <- any
// }
// Otra posibilidad es es asignar el tipo utilizando inferencia, asignando un valor al campo.
// class Punto {
//     x = 0; // <- number
//     y = 0; // <- number
// }


// Classes, readonly (solo lectura)
// Los campos propiedades de una clase pueden ser precedidos por readonly. Esto previene que se asigne un valor al campo fuera del constructor de la clase.
// class Saludo {
//     readonly nombre: string = "mundo";
//     constructor(nuevoNombre: string) {
//         if (!!nuevoNombre) {
//             this.nombre = nuevoNombre; // <- correcto, asignación es valida dentro del constructor
//         }
//     }
//     asignarNuevoNombre(nuevoNombre: string) {
//         this.nombre = nuevoNombre; // <- error, no se puede asignar valor fuera del constructor
//     }
// }
// const miNombre = new Saludo("Elio"); // <- correcto, asignación mediante el constructor
// miNombre.nombre = "Alejandro"; // <- error, no se puede asignar valor fuera del constructor


// Classes, Constructors (los constructores)
// Los constructores son muy similares a las funciones. Se pueden agregar parámetros que incluyen anotaciones acerca de su tipo, valor por default y sobrecarga.
// class Punto {
//     x: number;
//     y: number;
//     //   asignatura normal utilizando valores por default
//     constructor(x = 10, y = 10) {
//         this.x = x;
//         this.y = y;
//     }
// }
// let miPunto = new Punto();
// console.log(miPunto.x); // 10

// console.log(miPunto.y); // 10
// Sobrecarga del constructor
// Como se mencionó también podemos usar la sobrecarga para definir varias formas de trabajar del constructor.
// class Punto {
//     // uso de sobrecarga
//     constructor(x: number, y: number);
//     constructor(s: string);
//     constructor(xs: number | string, y?: number) {}
// }
// Existen algunas diferencias entre la firma de un constructor y de una función.
// Los constructores no pueden tener tipos en sus parámetros, estos se hacen fuera de la declaración de la clase.
// Los constructores no pueden retornar anotaciones de tipo, la instancia de la clase siempre es retornada.


// Classes, super (uso de super en constructores)
// Así como en JavaScript, si se tiene una clase base, es necesario invocar super(); dentro del cuerpo del constructor, antes de realizar cualquier llamada a this.
// class Figura {
//     lados = 0;
// }
// class Circulo extends Figura {
//     constructor() {
//         this.lados = 2; // <- esto generará un error
//         super();
//         // <- a partir de este punto se puede utilizar this
//     }
// }
// El olvidar invocar super() es un error muy común, pero TypeScript hace saber cuando esto es necesario.


// Classes, Methods (métodos)
// Los métodos son propiedades que actúan como funciones dentro de las clases. Al igual que en las funciones y los constructores, es posible utilizar anotaciones dentro de los métodos.
// class Video {
//     titulo: string;
//     constructor(titulo: string) {
//         this.titulo = titulo;
//     }
//     reproducir(): void {
//         console.log(`${this.titulo} se esta reproduciendo`);
//     }
// }
// const miVideo = new Video("año nuevo");
// miVideo.reproducir(); //año nuevo se esta reproduciendo
// Ademas de las anotaciones generales, TypeScript no agrega nada nuevo a los métodos.
// Toma en cuanta que dentro del cuerpo de un método, es necesario utilizar this para hacer referencia a otros métodos y/o propiedades.
// let titulo = "mi graduación"; // (1)
// class Video {
//     titulo: string; // (2)
//     asignarTitulo(nuevoTitulo: string) {
//         titulo = nuevoTitulo; // <- esto hace referencia a (1)
//         this.titulo = nuevoTitulo; // <- esto hace referencia a (2)
//     }
// }


// Classes, Setters y Getters
// Las clases también pueden tener setters (métodos que asignan) y getters (métodos que retraen valores), a estos se les llama accesors.
// class Desfile {
//     private _participantes = 0;
//     get participantes(): number {
//         return this._participantes;
//     }
//     set participantes(v: number) {
//         this._participantes = v;
//     }
// }
// const desfileHoy = new Desfile();
// desfileHoy.participantes = 100;
// console.log(desfileHoy.participantes); // <- 100
//  Toma en cuenta que el uso de set/get sin lógica adicional, es raramente utilizado en JavaScript. Por ello exponer las propiedades como públicas y escribir el valor sobre ellas.
// TypeScript tiene algunas reglas de inferencia para el uso de accessors (setters/getters).
// Si no existe set, la propiedad es automáticamente readonly.
// El tipo del setter es inferido del tipo de retorno del getter.
// Si el setter tiene definido el tipo, debe coincidir con el tipo de retorno del getter.
// No se puede tener setters y getters asociados a diferentes tipos.


// Classes, Herencia
// Así como sucede en otros lenguajes orientados a objetos, las clases en JavaScript pueden heredar de otras clases utilizando la clausula implements.
// Se puede utilizar implements para verificar que una clase satisface una interface particular. Un error será disparado si no se ha implementado correctamente.
// Por ejemplo si tenemos la siguiente interface.
// interface Encendible {
//     encender(): void;
// }
// Al implementar la clase podemos ver que esto nos genera un error mientras no se haya definido el método de la interface encender.
// class Television implements Encendible {}
// Por ello requerimos que se implementen todos los métodos de la clase Encendible.
// class Television implements Encendible {
//     encender(): void {
//         console.log("El televisor se ha encendido");
//     }
// }
//  Las clases pueden implementar diferentes interfaces, por ejemplo Class Television implements Endendible, Apagable, Sintonizable {}.
// Precauciones
// Es importante entender que la clausula implements solo verifica que la clase sea tratada como un tipo equivalente a la interface. No cambia el tipo de la clase o sus métodos de ninguna forma. Un error común es asumir que la clausula implements cambiará el tipo de la clase, pero esto no sucede.
// interface Verificable {
//     verificar(nombre: string): boolean;
// }
// class NombreVerificable implements Verificable {
//     verificar(nombre): boolean {
//         // <- nombre se convierte en un parámetro typo any
//         return nombre.toLowerCase();
//     }
// }


// Classes, extends (extender clases)
// Las clases pueden extender de otra clase base. Una clase derivada tiene todas las propiedades y métodos de una clase base, y también define métodos adicionales.
// class Animal {
//     moverse() {
//         console.log("El animal se mueve");
//     }
// }
// class Perro extends Animal {
//     ladrar() {
//         console.log("El perro ladra");
//     }
// }
// const miPerro = new Perro();
// miPerro.moverse(); //El animal se mueve
// miPerro.ladrar(); //El perro ladra
// Como vemos podemos ver, podemos invocar tanto los métodos de la clase como aquella de la cual implementa.


// Classes, Sobrecarga
// Una clase que extiende a otra puede reescribir sus propiedades. Si deseamos acceder a los elementos de una clase padre, cuyo clase hijo ha sobreescrito sus propiedades, podemos utilizar la sentencia super para acceder a ellos.
// TypeScript fuera a una clase derivada a tener siempre un subtipo de la clase base.
// class Padre {
//     saludar() {
//         console.log("Hola");
//     }
// }
// class Hijo extends Padre {
//     saludar(nombre?: string) {
//         if (!!nombre) {
//             console.log(`Hola ${nombre}`);
//         } else {
//             super.saludar();
//         }
//     }
// }
// const hijo = new Hijo();
// hijo.saludar(); //Hola
// hijo.saludar("Luis"); //Hola Luis
// Es importante que una clase drivada siga las bases de la clase padre (o clase contrato). Recuerda que es muy común que se haga una referencia a una instancia de la clase derivada a través de una clase base.
// const h: Padre = new Hijo();
// Es importante seguir las indicaciones del contrato, si cambiamos la definición de alguno de los métodos heredados, de forma que se vuelven incompatibles, el compilador de TypeScript generará un error.


// Classes, Orden de inicialización de las clases
// El orden de inicialización de las clases de JavaScript puede sorprender en algunas casos. Consideremos el siguiente código.
// class Definicion {
//     nombre = "definicion";
//     constructor() {
//         console.log(`Mi nombre es ${this.nombre}`); //Mi nombre es definicion
//     }
// }
// class Implementacion extends Definicion {}
// const d = new Implementacion(); //definicion
// ¿Cuál es el orden de la inicialización de las clases?
// El orden de la inicialización de las clases es el siguiente.
// Los campos de la clase base son inicializados.
// El constructor de la clase base se ejecuta.
// Los campos de la clase derivada son inicializados.
// El constructor de la clase derivada se ejecuta.


// Classes, Herencia en Built-in Types (tipos nativos)
// En ES2015, los constructores que devuelven un objeto sustituyen implícitamente el valor de this para cualquier invocador de super(…). Es necesario que el código del constructor generado capture cualquier valor de retorno potencial de super(…) y lo sustituya por this.
// Como resultado, una subclase de Error, Array y otros, puede no funcionar de forma adecuada. Esto se debe a que las funciones de constructor para Error, Array, utilizan new.target de ES6 para ajustar la cadena de prototipos; sin embargo, no hay forma de asegurar un valor para new.target cuando se invoca con un constructor de ES5. Otros compiladores de nivel inferior suelen tener la misma limitación por defecto.
// Para una clase como la siguiente:
// class MsgError extends Error {
//     constructor(m: string) {
//         super(m);
//     }
//     imprimirError() {
//         console.log("Hola " + this.message);
//     }
// }
// const a = new MsgError("Este es un nuevo error");
// a.imprimirError(); // <- esto generara un error <-> TypeError: a.imprimirError is not a function
// las situaciones que se presentan son:
// Los métodos al construir estas subclases pueden ser undefined.
// El valor instanceof no funcionará entre instancia de subclases, de forma que new MsgError() instanceof MsgError retornará false.
// Como recomendación, se puede ajustar manualmente el prototype después de invocar super(...).
// class MsgError extends Error {
//     constructor(m: string) {
//         super(m);
//         Object.setPrototypeOf(this, MsgError.prototype);
//     }
//     imprimirError() {
//         console.log("Hola " + this.message);
//     }
// }
// const a = new MsgError("Este es un nuevo error");
// a.imprimirError(); //Hola Este es un nuevo error
//  Los workarounds presentados no funcionan en navegadores como IE10 y previos.


// Classes, Visibility, Public (visibilidad pública)
// Se pueden utilizar TypeScript para controlar la visibilidad de ciertos métodos o propiedades fuera de la clase a la que pertenecen.
// Visibilidad public (publica)
// La visibilidad pública permite que las propiedades y/o métodos sean accesados desde cualquier parte.
// class Saludo {
//     public saludar() {
//         console.log("Saludar!");
//     }
// }
// const inst = new Saludo();
// inst.saludar();
//  Debido a que public es la visibilidad por default, no es necesario declararlo, es decir si no se indica se asume que el método o la propiedad son public. Pero si se desea hacer agregar la palabra public se puede hacer por cuestiones como por ejemplo la legibilidad del código.


// Classes, Visibility, Protected (visibilidad protegida)
// Las propiedades y métodos protected solo son visibles para subclases de la clase en donde son declaradas.
// class Saludo {
//     protected getDestinatario() {
//         return "amigos";
//     }
// }
// class SaludoEspecial extends Saludo {
//     saludar() {
//         console.log(`Hola ${this.getDestinatario()}`); // <- accedemos al método protected
//     }
// }
// const saludo: SaludoEspecial = new SaludoEspecial();
// saludo.saludar(); //Hola amigos
// saludo.getDestinatario(); // <- error, no se tiene acceso de forma publica
// Habilitar los métodos protegidos
// Las clases derivadas siguen el contrato definido por la clase padre, pero cuando pueden habilitar un subtipo de la clase base para brindar mas permisos sobre este. Esto incluye el convertir un método protected en public.
// class Base {
//     protected m = 10;
// }
// class Derivada extends Base {
//     m = 15;
// }
// const d = new Derivada();
// console.log(d.m); //15 
// Toma en cuenta que Derivada desde el momento que extiende Base tiene acceso a m, sin embargo al no incluir protected la propiedad m pasa a ser public y se vuelve accesible desde fuera de la definición de la clase.
// Cross-hierarchy protected access (protected entre diferentes clases que comparten herencia)
// Diferentes tipos de lenguajes de Lenguages de POO (Programación Orientados a Objetos) estan en desacuerdo en relación a si es valido o no acceder a elementos protected a través de diferentes clases que extienden la clase base.
// Java por ejemplo considera que esto debe ser posible, mientras tanto otros lenguajes como C#, C++ y TypeScript consideran que esto no debe ser así.
// class Base {
//     protected x: number = 1;
// }
// class Derivada1 extends Base {
//     protected x: number = 5;
// }
// class Derivada2 extends Base {
//     imprimirX(c1: Derivada2) {
//         // <-
//         console.log(c1.x);
//     }
// }
// Si reemplazamos Derivada2 por Derivada1 esto generará un error ya que esta fuera de su scope.
// Property 'x' is protected and only accessible within class 'Derivada1' and its subclasses.


// Classes, Visibility, Private (visibilidad privada)
// La visibilidad private funciona como protected en el sentido que no permite que el elemento sea accedido fuera de la clase. Sin embargo a diferencia de protected, no permite que las clases que hereden de la clase base lo utilicen, por lo que solo puede ser utilizado por la clase en la cual fue definido.
// class Base {
//     private x = 0;
// }
// class Derivada1 extends Base {
//     imprimirX() {
//         console.log(this.x); // <- esta linea generará un error
//     }
// }
// const b = new Base();
// console.log(b.x); // <- esta linea tambien generará un error
// En este ejemplo estamos intentando acceder a la propiedad x, pero al ser private no puede ser accedida fuera de la clase.
// Tampoco es posible acceder a x desde una clase que extiende Base como es el caso de Derivada1.
// Cross-instance private access (private entre diferentes instancias de la misma clase)
// Diferentes lenguajes de POO (Programación Orientada a Objetos) tienen visiones diferentes en relación a como deben manejarse los permisos de private entre instancias de la misma clase. Lenguajes como Java, C#, C++, Switch y PHP lo permiten, mientras que para otros como Ruby no.
// class A {
//     private x = 10;

//     public imprimirX(otra: A) {
//         console.log(otra.x); // <- podemos acceder a una propiedad privada de otra instancia
//     }
// }
// Consideraciones
// Como otros aspectos de TypeScript, private y protected solo son analizados durante la revisión del tipado. Esto quiere decir que solo se JavaScript durante su ejecución puede acceder tanto a elementos private como protected.


// Classes, Static Members (elementos estáticos)
// Las clases tienen componentes estáticos. Estos elementos no están asociados con una instancia particular de la clase. Pueden ser accedidos a través del constructor de la clase.
// class MiClase {
//     static x = 10;
//     static imprimirX() {
//         // para acceder a una propiedad estática utilizamos this dentro de un método estático
//         console.log(`El valor de x es: ${this.x}`); //El valor de x es: 10
//     }
//     imprimirX() {
//         // para acceder a una propiedad estática usamos el nombre de la clase dentro de un método de una instancia
//         console.log(`El valor de x en una instancia es: ${MiClase.x}`); //El valor de x en una instancia es: 10
//     }
// }
// // para acceder a un método lo hacemos directamente desde la clase
// MiClase.imprimirX();
// // para acceder a una propiedad estática lo hacemos directamente desde la clase
// console.log(`El valor obtenido de x es: ${MiClase.x}`); //El valor obtenido de x es: 10
// const miClase = new MiClase();
// miClase.imprimirX();
// Los elementos estáticos pueden ser también public, protected y private.
// class MiClase {
//     private static x = 10;
// }
// console.log(MiClase.x); // <- esta linea generará un error
// // Property 'x' is private and only accessible within class 'MiClase'.
// Los métodos estáticos también se heredan.
// class Base {
//     static saludar() {
//         console.log("Hola mundo"); //Hola mundo
//     }
// }
// class Derivada extends Base {}
// Derivada.saludar();
// Palabras reservadas en clases
// Debido a que las clases son funciones que pueden ser invocadas con new, algunos nombres no pueden ser definidos como static, algunos ejemplos son: name, length y call.
// class Base {
//     static name = "S!"; // <- esta línea generara un error
//     // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'Base'
// }


// Classes, Generics (generics dentro de clases)
// Las clases al igual que las interfaces, pueden ser genéricas. Cuando una clase es instanceada con el constructor new, su tipo es inferido de la misma forma que cuando se llama a una función.
// class Caja<T> {
//     contenido: T;

//     constructor(value: T) {
//         this.contenido = value;
//     }
// }
// type Juguete = {
//     nombre: string;
// };
// const misJuguetes: Juguete[] = [];
// misJuguetes.push({ nombre: "Pelota" });
// misJuguetes.push({ nombre: "Consola" });
// const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);
// type Maquillaje = {
//     nombre: string;
// };
// const miMaquillaje: Maquillaje[] = [];
// miMaquillaje.push({ nombre: "Sombras" });
// miMaquillaje.push({ nombre: "Labial" });
// const miCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);
// Las clases pueden utilizar restricciones y valores por default de la misma forma que las interfaces.
// Types en parámetros de clases estáticas
// El siguiente código generará un error…
// class Caja<T> {
//     static valorPorDefault: T; // <- Static members cannot reference class type parameters.
// }
//  Los elementos estáticos de una clase genérica nunca pueden ser referidos a parámetros de tipo ya que generan un error en tiempo de ejecución.


// Classes, this runtime behavior (comportamiento de this en tiempo de ejecución)
// Es importante recordar que TypeScript no cambia el valor en tiempo de ejecución de JavaScript, y que JavaScript es en cierta forma famoso por tener ciertas particularidades en su comportamiento.
// Un ejemplo de esto es el valor o la referencia de this según donde este se utilice…
// class MiClase {
//     nombre = "MiClase";
//     getNombre(): string {
//         return this.nombre;
//     }
// }
// const miClase: MiClase = new MiClase();
// const obj: MiClase = {
//     nombre: "obj",
//     getNombre: miClase.getNombre,
// };
// console.log(obj.getNombre()); // <- la salida será obj <-> obj
// La razón del porque el valor retornado no es “MiClase” se debe a que this dentro de una función depende de como la función es invocada. En este ejemplo, debido a que la función es invocada dentro de un objeto, esta hace referencia a a propiedad nombre de dicho objeto cuyo valor es obj.
// Esto rara ocasión es lo que se desea, y TypeScript intenta mitigar este tipo de comportamientos en la medida de lo posible.


// Classes, Arrow Functions (funciones tipo flecha)
// Si tienes una función cuyo que frecuentemente pierde el contexto de su valor this, puede tener sentido utilizar una arrow function (función tipo flecha) en lugar de la función habitual.
// class MiClase {
//     nombre = "MiClase";

//     getNombre = () => {
//         return this.nombre;
//     };
// }
// const miClase: MiClase = new MiClase();
// const obj: MiClase = {
//     nombre: "obj",
//     getNombre: miClase.getNombre,
// };
// console.log(obj.getNombre());
// MiClase;
// El uso de arrow functions viene con algunas ventajas.
// El valor de this esta garantizado para ser el correcto en tiempo de ejecución, aun cuando el código no ha sido verificado con TypeScript.
// Esto usualmente utiliza mas memoria, debido a que cada clase tendra su propia copia de cada una de las funciones definidas de esta forma.
// No se puede utilizar super.getNombre en una clase derivada.


// Classes, this paramemeter (el parámetro this)
// Dentro de un método o una función, un parámetro inicial llamado this tiene un significado especial en TypeScript. Estos parámetros son eliminados durante la compilación.
// function miFuncion(this: string, x: number) {
//     // ... codigo de la funcion
// }
// La anterior función es transformada al siguiente código JavaScript.
// function miFuncion(x) {
//     // codigo de la funcion
// }
// TypeScript verifica que la llamada a la función con el parámetro this se realice dentro de un contexto apropiado. En lugar de utilizar una arrow function (función tipo flecha), podemos agregar e parámetro this a las definiciones de los métodos para obligar a que estos métodos sean invocados de manera correcta.
// class MiClase {
//     nombre = "MiClase";
//     getNombre(this: MiClase) {
//         return this.nombre;
//     }
// }
// const miClase: MiClase = new MiClase();
// const r = miClase.getNombre(miClase);
// console.log(r()); // <- esto generará un error <-> The 'this' context of type 'void' is not assignable to method's 'this' of type 'MiClase'
// Este método toma un enfoque distinto al de los arrow functions.
// Quienes invoquen el método de la clase de forma incorrecta pueden seguir haciéndolo sin darse cuenta.
// Solo una función por clase es creada, en lugar de una clase por instancia.
// La definición de los métodos base pueden seguir haciendo uso de super.


// Classes, this types (tipos "this")
// Dentro de las clases, un tipo especial llamado this hace referencia de forma dinámica a la clase que lo utiliza.
// class Caja {
//     contenido = "";
//     set(valor: string) {
//         this.contenido = valor;
//         return this;
//     }
// }
// const miCaja: Caja = new Caja();
// const valorRetornado = miCaja.set("Joyas");
// // const valorRetornado: Caja
//  El tipo de valorRetornado es inferido por TypeScript a partir de la referencia this que retorna la función set.
// También es posible utilizar this como anotación dentro de los parámetros.
// class Caja {
//     contenido = "";
//     constructor(contenido: string) {
//         this.contenido = contenido;
//     }
//     igualQue(otro: this) {
//         return otro.contenido === this.contenido;
//     }
// }
// const caja1 = new Caja("joyas");
// const caja2 = new Caja("joyas");
// const caja3 = new Caja("maquillaje");
// console.log(caja1.igualQue(caja2)); //true
// console.log(caja1.igualQue(caja3)); //false
// Esto es diferente de escribir otro: Caja si se tiene una clase derivada, entonces igualQue solo aceptara instancias derivadas de la misma clase.
// class Caja {
//     contenido = "";
//     igualQue(otro: this) {
//         return this.contenido === otraInstancia.contenido;
//     }
// }
// class CajaDerivada extends Caja {
//     otroContenido = "";
// }
// const base = new Caja();
// const derivada = new CajaDerivada();
// derivada.igualQue(base); // <- base no extiende de derivada, esto generará un error
// // Argument of type 'Caja' is not assignable to parameter of type 'CajaDerivada'.


// Classes, this type guard
// En TypeScript, el tipo this en el contexto de una clase representa el tipo del objeto que está instanciando la clase. Cuando usamos this como un tipo guard (o "guardia de tipo"), estamos ayudando al compilador a entender el tipo de this dentro de diferentes contextos, especialmente cuando el tipo de this puede variar debido a sobrecargas de métodos o la herencia.
// ¿Qué es un Tipo Guard?
// Un tipo guard (o "guardia de tipo") es una técnica en TypeScript que permite refinar el tipo de una variable dentro de una estructura condicional. Esto ayuda a proporcionar un tipo más específico para una variable en lugar de depender del tipo general.
// class Animal {
//   nombre: string;

//   constructor(nombre: string) {
//       this.nombre = nombre;
//   }
//   // Método para hacer sonido, a implementar en subclases
//   hacerSonido(): void {
//       console.log("Este animal hace un sonido.");
//   }
//   // Tipo guard para verificar si el objeto es un Perro
//   hacerSonidoEnBaseAlTipo(): void {
//       if (this instanceof Perro) {
//           this.hacerSonido();  // `this` es `Perro` aquí
//       } else {
//           console.log("Este animal no es un perro.");
//       }
//   }
// }
// class Perro extends Animal {
//   constructor(nombre: string) {
//       super(nombre);
//   }
//   // Sobrescribe el método hacerSonido
//   hacerSonido(): void {
//       console.log("¡Guau!");
//   }
// }
// const animal = new Animal("Animal genérico");
// animal.hacerSonidoEnBaseAlTipo();  // Output: Este animal no es un perro.
// const perro = new Perro("Rex");
// perro.hacerSonidoEnBaseAlTipo();   // Output: ¡Guau!


// Classes, parameter properties (parámetros como propiedades)
// TypeScript ofrece un tipo de sintaxis especial para convertir un parámetro de un constructor en una propiedad de una clase con el mismo nombre y valor. Estos son llamados parameter properties (parámetros como propiedades) y son creados utilizando como prefijo al argumento del constructor uno de los modificadores de visibilidad como public, private, protected y readonly.
// class Video {
//     constructor(
//         public readonly nombre: string,
//         public readonly duracion: number,
//         public readonly formato: "mp4" | "mkv" | "web"
//     ) {}
// }
// const miVideo: Video = new Video("vacaciones", 60, "mp4");
// console.log(`Mi vide de: ${miVideo.nombre}`); //Mi vide de: vacaciones
// console.log(`Tiene una duración de: ${miVideo.duracion} segundos`); //Tiene una duración de: 60 segundos
// console.log(`Y el formato es: ${miVideo.formato}`); //Y el formato es: mp4


// Classes, Class Expressions (clases como expresiones)
// Las class expresions (clases como expresiones) son muy similares a las class declarations (clases como declaraciones). La única diferencia real es que las class expresions no necesitan tener un nombre, sin embargo podemos referirnos a ellas a través de cualquier identificador al que esten relacionados.
// const miClase = class<T> {
//     contenido: T;
//     constructor(v: T) {
//         this.contenido = v;
//     }
// };
// const miInstancia = new miClase("Un video de 12 minutos");
// console.log(`El contenido del video es: ${miInstancia.contenido}`); //El contenido del video es: Un video de 12 minutos


// Classes, Abstract Classes (clases abstractas)
// Las clases, métodos y propiedades pueden ser declaradas como abtract (abstractas) en TypeScript.
// Un método y/o una propiedad abstracta es un método que no ha sido implementado. Cuando una clase no tiene ningún método abstracto, se le conoce como concrete (concreta).
// No es posible instanciar una clase abstracta, como se ve en el siguiente ejemplo.
// abstract class Base {
//     abstract getNombre(): string;
//     imprimirNombre() {
//         console.log(`Mi nombre es ${this.getNombre()}`);
//     }
// }
// const miInstancia = new Base(); // <- esta línea generara un error pues
// // no se puede instancear una clase abstracta
// Pero si es posible instanciar aquellas que la implementan.
// abstract class Base {
//     abstract getNombre(): string;
//     imprimirNombre() {
//         console.log(`Mi nombre es ${this.getNombre()}`);
//     }
// }
// class Derivada extends Base {
//     getNombre(): string {
//         return "Laura";
//     }
// }
// const miInstancia = new Derivada();
// miInstancia.imprimirNombre(); //Mi nombre es Laura
//  Si no implementamos alguno de los métodos abstractos de una clase abstracta, esto generará un error en el compilador.


// Classes, Relationships (relaciones entre clases)
// En la mayoría de los casos, las clases dentro de TypeScript son comparadas de forma estructural, es decir que aquellas que sean compatibles con otras pueden ser utilizadas como reemplazos aunque no existan vínculos como herencia o interfaces que las asocien.
// class Persona {
//     nombre: string;
//     edad: number;
// }
// class Empleado {
//     nombre: string;
//     edad: number;
//     salario: number;
// }
// const p: Persona = new Empleado();