// ### Propiedades Opcionales
// 1. Define una interfaz `Libro` con las propiedades `titulo` (string), `autor` (string) y `añoPublicacion` (opcional, number). Luego, crea una función que reciba un objeto `Libro` y muestre sus detalles.

// interface Libro {
//   titulo: string;
//   autor: string;
//   anio?: number;
// }
// function book( libro: Libro ) {
//   return `Libro ${libro.titulo} con ${libro.autor}`;
// }
// console.log(book({titulo: 'IT', autor: 'Stephen King'}))


// ### Propiedades de Solo Lectura
// 2. Define una interfaz `Vehiculo` con la propiedad de solo lectura `matricula` (string) y `modelo` (string). Crea una instancia de `Vehiculo` y muestra sus propiedades.

// interface Vehiculo {
//   readonly matricula: string;
//   readonly modelo: string;
// }
// const miVehiculo: Vehiculo = {matricula: '1404', modelo: 'Peugeot'};
// console.log(`Mi vehiculo con matricula ${miVehiculo.matricula} y modelo ${miVehiculo.modelo}`);


// ### Extensión de Tipos
// 3. Define una interfaz `Producto` con las propiedades `nombre` (string) y `precio` (number). Extiende esta interfaz para crear una interfaz `ProductoElectronico` que agregue la propiedad `marca` (string). Luego, crea una función que reciba un objeto `ProductoElectronico` y muestre sus detalles.

// interface Producto{
//   nombre: string;
//   precio: number;
// }
// interface ProductoElectronico extends Producto{
//   marca: string;
// }
// function mostrarProductoElectronico( producto: ProductoElectronico) {
//   return `Producto: ${producto.nombre}, Marca: ${producto.marca}, Precio: $${producto.precio}`;
// }
// console.log(mostrarProductoElectronico({nombre: 'G305', precio: 45000, marca: 'Logitech'}))


// ### Intersección de Tipos
// 4. Define dos interfaces `Persona` y `Empleado`, donde `Persona` tiene las propiedades `nombre` (string) y `edad` (number), y `Empleado` tiene la propiedad `salario` (number). Usa la intersección de tipos para definir un tipo `PersonaEmpleado` y crea una instancia de este tipo.

// interface Persona{
//   nombre: string;
//   edad: number;
// }
// interface Empleado{
//   salario: number;
// }
// type PersonaEmpleado = Persona & Empleado;
// const empleado: PersonaEmpleado = {
//   nombre: 'Facundo',
//   edad: 23,
//   salario: 50000,
// }
// console.log(empleado);


// ### Generics
// 5. Define una interfaz genérica `Caja<T>` con la propiedad `contenido` de tipo `T`. Crea instancias de `Caja` con diferentes tipos (`string`, `number` y `boolean`) y muestra los contenidos.

// interface Caja<T> {
//   contenido: T;
// }
// let nombreCaja: Caja<string> = {contenido: 'pepe'};
// let numeroCaja: Caja<number> = {contenido: 5000};
// let estadoCaja: Caja<boolean> = {contenido: true};
// console.log(nombreCaja, numeroCaja, estadoCaja);


// ### Tipo Arreglo
// 6. Define una función `imprimirNombres` que reciba un arreglo de strings y los imprima. Usa tanto la sintaxis `string[]` como `Array<string>`.

// const imprimirNombres = ( v: Array<string> ) => {
//   v.forEach((v) =>{
//     console.log(v);
//   });
// };
// const misNombres: string[] = [
//   "Facundo",
//   "Nahuel",
//   "Pachorra",
// ];
// imprimirNombres(misNombres);


// ### Arreglo de Solo Lectura
// 7. Crea un arreglo de solo lectura `readonlyArray` con elementos de tipo `number`. Intenta modificar un elemento del arreglo y observa el error.

// const list: ReadonlyArray<number> = [1,2,3,4,5];
// list.push(6); //La propiedad 'push' no existe en el tipo 'readonly number[]'


// ### Tuplas
// 8. Define una tupla `PersonaTupla` que contenga un `string` y un `number`. Crea una instancia de esta tupla y muestra sus elementos.

// type Persona = [string, number];
// const humano: Persona = ['Facundo', 23];
// console.log('La persona tiene el nombre ',humano[0], 'y edad ',humano[1]); 


// ### Tuplas con Elementos Opcionales
// 9. Define una tupla `Auto` que contenga un `string`, un `number`, y opcionalmente otro `string`. Crea instancias de esta tupla con y sin el elemento opcional y muestra sus elementos.

// type Auto = [string, number, string?];
// const auto1: Auto = ['Ford', 2020];
// const auto2: Auto = ['Chevrolet', 2018, 'Blanco'];
// console.log('Auto 1:',auto1[0],auto1[1]);
// console.log('Auto 2:',auto2[0],auto2[1],auto2[2]);


// ### Tuplas de Solo Lectura
// 10. Define una tupla de solo lectura `AutoReadonly` con un `string` y un `number`. Intenta modificar uno de sus elementos y observa el error.

// type pc = readonly [string, number];
// const miPc: pc = ['Asus', 16];
// miPc[0] = 'Gigabyte'//No se puede asignar a "0" porque es una propiedad de solo lectura.
