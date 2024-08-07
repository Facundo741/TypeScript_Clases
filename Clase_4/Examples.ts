// ### 1. Type Manipulation (Manipulación de tipos)
// **Enunciado**: Define un tipo que represente una dirección postal, incluyendo calle, ciudad, código postal y país. Luego, crea una función que reciba un objeto de este tipo y devuelva una cadena de texto con la dirección formateada.

// type DireccionPostal = {
//   calle: string;
//   ciudad: string;
//   codigoPostal: string;
//   pais: string;
// };
// function formatearDireccion(direccion: DireccionPostal): string {
//   return `${direccion.calle}, ${direccion.ciudad}, ${direccion.codigoPostal}, ${direccion.pais}`;
// };
// const miDireccion: DireccionPostal = {
//   calle: 'Siempre Viva 123',
//   ciudad: 'Tucuman',
//   codigoPostal: '12345',
//   pais: 'Argentina',
// };
// console.log(formatearDireccion(miDireccion));


// ### 2. Type Manipulation, Generics (Genéricos)
// **Enunciado**: Crea una función genérica que tome un arreglo de cualquier tipo y devuelva el primer elemento del mismo. Asegúrate de que la función pueda manejar cualquier tipo de dato.

// function cualquierTipo <T> (arg: T[]): T {
//   return arg[0];
// }
// const miArreglo = [1, 2, 3, 4, 5];
// console.log(cualquierTipo(miArreglo));


// ### 3. Type Manipulation, Generic Variables (Variables genéricas)
// **Enunciado**: Define una clase genérica `Caja<T>` que almacene un valor de tipo `T`. Implementa métodos para obtener y establecer el valor almacenado.

// class Caja<T> {
//   private valor: T;
//   constructor(valor: T) {
//     this.valor = valor;
//   };
//   obtenerValor(): T {
//     return this.valor;
//   };
//   establecerValor(newValor: T): void {
//     this.valor = newValor;
//   };
// };
// const cajaDeNumeros = new Caja<number>(10);
// console.log(cajaDeNumeros.obtenerValor());


// ### 4. Type Manipulation, Generic Types (Tipos genéricos)
// **Enunciado**: Define un tipo genérico `Par<K, V>` que represente un par de clave-valor. Luego, crea una función que tome un arreglo de `Par` y devuelva un objeto donde las claves sean `K` y los valores sean `V`.

// type Par<K, V> = {
//   clave: K,
//   valor: V,
// };
// function generarObjetoPar<K extends string, V>(par: Par<K, V>): { [clave: string]: V } {
//   return { [par.clave]: par.valor };
// };
// const miPar: Par<string, number> = { clave: 'nombre', valor: 10 };

// console.log(generarObjetoPar(miPar));


// ### 5. Type Manipulation, Generic Classes (Clases genéricas)
// **Enunciado**: Crea una clase genérica `Pila<T>` que implemente una pila (stack). La clase debe tener métodos para apilar (push), desapilar (pop) y verificar si la pila está vacía.

// class Pila<T> {
//   private datos: T[] = [];
//   apilar(dato: T): void {
//     this.datos.push(dato);
//   }
//   desapilar(): T | undefined {
//     return this.datos.pop();
//   }
//   estaVacia(): boolean {
//     return this.datos.length === 0;
//   }
// }
// const miPila = new Pila<number>();
// miPila.apilar(1);
// miPila.apilar(2);
// console.log(miPila.desapilar());
// console.log(miPila.estaVacia());
// console.log(miPila.desapilar());


// ### 6. Type Manipulation, Generic Constraints (Restricciones genéricas)
// **Enunciado**: Define una función genérica que tome un objeto y una clave de ese objeto y devuelva el valor asociado a esa clave. Utiliza restricciones genéricas para asegurarte de que la clave existe en el objeto.

// function valor<T, K extends keyof T> (objeto: T, clave: K): T[K] {
//   return objeto[clave];
// }
// interface Persona {
//   nombre: string;
//   edad: number;
// }
// const miPersona: Persona = { nombre: 'Facundo', edad: 23 };
// console.log(valor(miPersona, 'nombre')); 


// ### 7. Type Manipulation, Type Parameters en Generic Constraints
// **Enunciado**: Crea una función genérica que tome dos objetos y una clave compartida por ambos objetos, y devuelva un nuevo objeto con las propiedades combinadas de los dos objetos. Utiliza parámetros de tipo en las restricciones genéricas.

// function obtenerPropiedad <T, K extends keyof T> (obj1: T, obj2: T, key: K) {
//   return {...obj1,...obj2, [key]: obj2[key] };
// }
// const valor1 = {a: 1, b: 2, c: 3};
// const valor2 = {a: 10, b: 20, c: 30};
// const valor3 = obtenerPropiedad(valor1, valor2, 'a')
// console.log(valor3)


// ### 8. Type Manipulation, Class Types en Generics
// **Enunciado**: Define una clase genérica `Contenedor<T>`, donde `T` es una clase. La clase debe tener métodos para agregar instancias de `T` y obtener la lista de instancias almacenadas.

// class Contenedor<T>{
//   private datos: T[] = [];
//   agregar(dato: T): void {
//     this.datos.push(dato);
//   }
//   obtenerDatos(): T[] {
//     return this.datos;
//   }
// }
// class Persona{
//   constructor(public nombre: string, public edad: number){}
// }
// const miContenedor = new Contenedor<Persona>();
// miContenedor.agregar(new Persona('Facundo', 23));
// const personas = miContenedor.obtenerDatos();
// console.log(personas);


// ### 9. Type Manipulation, operador keyof
// **Enunciado**: Crea una función que tome un objeto y una clave (utilizando el operador `keyof`), y devuelva una cadena de texto que indique el tipo del valor asociado a esa clave en el objeto.

// function tipoDeValor<T> (objeto: T, clave: keyof T): string {
//   const valor = objeto[clave];
//   return typeof valor;
// };
// interface Persona{
//   nombre: string;
//   edad: number;
// };
// const persona: Persona = {
//   nombre: 'Facundo',
//   edad: 23,
// };
// console.log(tipoDeValor(persona, 'nombre'));


// ### 10. Type Manipulation, operador typeof
// **Enunciado**: Define una variable de tipo objeto con varias propiedades. Luego, crea un tipo que utilice `typeof` para capturar el tipo de esa variable y define una función que acepte parámetros de ese tipo.

// const miObjeto = { nombre: "Facundo", edad: 23, estado: true }; 
// type TipoDeMiObjeto = typeof miObjeto; 
// function imprimirPropiedades(objeto: TipoDeMiObjeto): void { 
//   console.log(`Nombre: ${objeto.nombre}`); 
//   console.log(`Edad: ${objeto.edad}`); 
//   console.log(`Estado: ${objeto.estado}`); 
// } 
// imprimirPropiedades(miObjeto);


// ### 11. Type Manipulation, Indexed Access Types (Tipos basados en índices)
// **Enunciado**: Define un tipo que represente un libro con propiedades como `título`, `autor` y `año`. Luego, crea una función que tome un arreglo de libros y devuelva un arreglo de los títulos de los libros utilizando tipos basados en índices.

// type Libro = { 
//   titulo: string; 
//   autor: string; 
//   anio: number
// };
// const libros: Libro[] = [
//   { titulo: 'El Quijote', autor: 'Miguel de Cervantes', anio: 1605 },
//   { titulo: 'To Kill a Mockingbird', autor: 'Harper Lee', anio: 1960 },
//   { titulo: '1984', autor: 'George Orwell', anio: 1949 },
// ];
// function getTitulosDeLibros(libros: Libro[]): Libro['titulo'][] {
//   return libros.map(libro => libro.titulo);
// }
// const titulos = getTitulosDeLibros(libros);
// console.log(titulos);


// ### 12. Type Manipulation, Conditional Types (Tipos condicionales)
// **Enunciado**: Crea un tipo condicional que tome dos tipos `A` y `B`, y defina un tipo que sea `true` si `A` es asignable a `B` y `false` en caso contrario.

// type esAsignable<A, B> = A extends B ? true : false;
// type Test1 = EsAsignable<string, string>;  // true
// type Test2 = EsAsignable<string, number>;  // false
// type Test3 = EsAsignable<number, any>;     // true
// type Test4 = EsAsignable<any, number>;     // false
// type Test5 = EsAsignable<{ a: number }, { a: number }>; // true
// type Test6 = EsAsignable<{ a: number }, { a: string }>; // false
// type Test7 = EsAsignable<never, string>;  // true


// ### 13. Type Manipulation, Conditional Type Constraints (Restricciones en tipos condicionales)
// **Enunciado**: Define un tipo condicional que verifique si un tipo es un arreglo y, de ser así, devuelva el tipo de los elementos del arreglo; de lo contrario, devuelva el tipo original.

// type EsArreglo<T> = T extends (infer U)[] ? U : T;
// type Test1 = EsArreglo<string[]>;  // string
// type Test2 = EsArreglo<number[]>;  // number
// type Test3 = EsArreglo<boolean>;   // boolean
// type Test4 = EsArreglo<{ a: number }[]>; // { a: number }
// type Test5 = EsArreglo<string>;    // string


// ### 14. Type Manipulation, Inferencia en Conditional Types
// **Enunciado**: Crea un tipo condicional que tome un tipo `T` y use la inferencia para determinar si `T` es una promesa. Si es una promesa, el tipo debe ser el tipo resuelto de la promesa; de lo contrario, debe ser `T`.

// type ResolvedType<T> = T extends Promise<infer U> ? U : T;
// type Test1 = ResolvedType<Promise<string>>;  // string
// type Test2 = ResolvedType<Promise<number>>;  // number
// type Test3 = ResolvedType<string>;           // string
// type Test4 = ResolvedType<number>;           // number
// type Test5 = ResolvedType<Promise<boolean>>; // boolean
// type Test6 = ResolvedType<boolean>;          // boolean


// ### 15. Type Manipulation, Distributive Conditional Types (Tipos condicionales distributivos)
// **Enunciado**: Define un tipo condicional distributivo que tome un tipo union y devuelva `true` si alguno de los tipos en la union es una cadena (`string`).

// type ContainsString<T> = T extends string ? true : false;
// type UnionContainsString<U> = U extends any ? ContainsString<U> : never;
// type Result1 = UnionContainsString<string | number>;  // true | false
// type Result2 = UnionContainsString<number | boolean>; // false
// type Result3 = UnionContainsString<string | boolean>; // true | false
// type Result4 = UnionContainsString<string>;           // true
// type Result5 = UnionContainsString<number>;           // false


// ### 16. Type Manipulation, Mapped Types (Tipos basados en mapas)
// **Enunciado**: Crea un tipo mapeado que convierta todas las propiedades de un tipo `T` en opcionales (`optional`).

// type MakeOptional<T> = {
//   [P in keyof T]?: T[P];
// };
// type OriginalType = {
//   a: number;
//   b: string;
//   c: boolean;
// };
// type OptionalType = MakeOptional<OriginalType>;
// const example: OptionalType = {
//   a: 42,
// };


// ### 17. Type Manipulation, Mapped Types, Modifiers (Modificadores en mapas basados en tipos)
// **Enunciado**: Define un tipo mapeado que haga todas las propiedades de un tipo `T` solo lectura (`readonly`).

// type MakeReadonly<T> = {
//   readonly [P in keyof T]: T[P];
// };
// type OriginalType = {
//   a: number;
//   b: string;
//   c: boolean;
// };
// type ReadonlyType = MakeReadonly<OriginalType>;
// const example: ReadonlyType = {
//   a: 42,
// };


// ### 18. Type Manipulation, Mapped Types, Key Remapping (Re-mapeado de propiedades)
// **Enunciado**: Crea un tipo mapeado que remapee las claves de un objeto a sus valores, pero en minúsculas. Por ejemplo, un objeto `{ A: string; B: number; }` debe ser remapeado a `{ a: string; b: number; }`.

// type RemapKeysToLowercase<T> = {
//   [K in keyof T as K extends string ? Lowercase<K> : never]: T[K];
// };
// type OriginalType = {
//   A: string;
//   B: number;
// };
// type RemappedType = RemapKeysToLowercase<OriginalType>;
// const example: RemappedType = {
//   a: 42,
// };


// ### 19. Type Manipulation, Template Literal Types (Tipos literales de plantilla)
// **Enunciado**: Define un tipo literal de plantilla que tome dos cadenas de texto y las combine en una nueva cadena de texto. Por ejemplo, dado `Type1` y `Type2`, el resultado debe ser `Type1Type2`.

// type CombineStrings<S1 extends string, S2 extends string> = `${S1}${S2}`;
// type Combined = CombineStrings<'Type1', 'Type2'>;


// ### 20. Type Manipulation, Intrinsic String Manipulation Types (Tipos intrínsecos de manipulación de strings)
// **Enunciado**: Utiliza tipos intrínsecos de manipulación de strings para definir un tipo que convierta todas las propiedades de un tipo `T` a camelCase.

// type CamelCase<S extends string> =
//   S extends `${infer P1}_${infer P2}${infer P3}`
//     ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
//     : S;
// type ConvertToCamelCase<T> = {
//   [K in keyof T as CamelCase<string & K>]: T[K];
// };
// type OriginalType = {
//   first_name: string;
//   last_name: string;
//   user_age: number;
// };
// type CamelCaseType = ConvertToCamelCase<OriginalType>;