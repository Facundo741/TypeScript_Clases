//Comando para ejecutar el ts
//npx ts-node 'Examples'.ts

// ### Funciones como Expresiones
// **Consigna**: Implementa una función llamada `notificar` que reciba otra función como argumento. La función pasada como argumento debe recibir un string y no retornar nada. Luego, invoca `notificar` pasando una función que muestre una alerta con el string recibido.

// function notificar (fn: (mensaje: string) =>void) {
//     fn("Hola Mundo");
// }
// function consola (s: string) {
//     console.log(s);
// }
// notificar(consola);


// ### Funciones Call Signature
// **Consigna**: Define un tipo `OperacionMatematica` que sea una función con una propiedad `descripcion` y otra `valor`. Implementa una función llamada `ejecutarOperacion` que reciba un argumento de tipo `OperacionMatematica` e imprima la descripción y el resultado de la operación en la consola. Luego, crea dos funciones `sumarDosNumeros` y `multiplicarDosNumeros` que implementen `OperacionMatematica`, establece sus propiedades y pásalas a `ejecutarOperacion`.

// type OperacionMatematica = {
//     descripcion: string;
//     valor: number;
//     (a: number, b: number): number;
// }
// function ejecutarOperacion (fn: OperacionMatematica) {
//     console.log(`${fn.descripcion}: ${fn(fn.valor, fn.valor)}`);
// }
// const sumarDosNumeros: OperacionMatematica = (a, b) => {
//     return a + b;
// };
// sumarDosNumeros.descripcion = "La suma de dos números es";
// sumarDosNumeros.valor = 5;
// const multiplicarDosNumeros: OperacionMatematica = (a, b) => {
//     return a * b;
// };
// multiplicarDosNumeros.descripcion = "La multiplicación de dos números es";
// multiplicarDosNumeros.valor = 3;
// ejecutarOperacion(sumarDosNumeros);
// ejecutarOperacion(multiplicarDosNumeros);


// ### Funciones Constructor Signature
// **Consigna**: Define una interfaz `Electrodomestico` con una propiedad `marca`. Crea dos clases `Refrigerador` y `Lavadora` que implementen `Electrodomestico`. Define un tipo `ConstructorDeElectrodomestico` que sea un constructor que retorne un objeto de tipo `Electrodomestico`. Implementa una función `construirElectrodomestico` que reciba un constructor y una marca, y retorne una instancia del electrodoméstico. Crea instancias de `Refrigerador` y `Lavadora` y muestra sus marcas en la consola.

// interface Electrodomestico {
//   marca: string;
// }
// class Refrigerador implements Electrodomestico { 
//   constructor(public marca: string) {}
// }
// class Lavadora implements Electrodomestico { 
//   constructor(public marca: string) {}
// }
// type construirElectrodomestico = {
//   new (marca: string): Electrodomestico;
// }
// function construirElectrodomestico(ctr: construirElectrodomestico, marca: string) {
//   return new ctr(marca);
// }
// const miRefrigerador = construirElectrodomestico(Refrigerador, "Samsung")
// const miLavadora = construirElectrodomestico(Lavadora, "LG")
// console.log('Mi refrigerador es ' + miRefrigerador.marca)
// console.log('Mi lavadora es ' + miLavadora.marca)


// ### Funciones Genéricas
// **Consigna**: Implementa una función genérica `obtenerUltimoElemento` que reciba un arreglo de cualquier tipo y retorne el último elemento. Prueba la función con un arreglo de booleanos y un arreglo de objetos, imprimiendo los resultados en la consola.






// ### Funciones Genéricas con Inferencia
// **Consigna**: Implementa una función genérica `transformar` que reciba un arreglo y una función que transforme cada elemento del arreglo. La función debe retornar un nuevo arreglo con los elementos transformados. Usa `transformar` para transformar un arreglo de números en un arreglo de booleanos que indiquen si cada número es par.

// ### Funciones con Constraints
// **Consigna**: Implementa una función genérica `compararLongitud` que reciba dos argumentos con una propiedad `length` y retorne el que tenga menor longitud. Prueba la función con arreglos y strings, e imprime los resultados en la consola.

// ### Funciones con Parámetros Opcionales
// **Consigna**: Implementa una función `g` que reciba un parámetro opcional de tipo `string`. Si no se proporciona un argumento, debe usar un valor por defecto de `"default"`. Prueba la función con y sin el argumento, y muestra el resultado en la consola.

// ### Funciones con Sobrecarga
// **Consigna**: Implementa una función `calcularArea` con sobrecarga que reciba un radio y calcule el área de un círculo, o que reciba el largo y el ancho y calcule el área de un rectángulo. Prueba la función con ambos tipos de argumentos y muestra los resultados en la consola.

// ### Uso de 'This' en Funciones
// **Consigna**: Define un objeto `carrito` con propiedades `productos` (un arreglo de strings) y `agregarProducto` (una función que agregue un producto al arreglo). Luego, crea otro objeto `carrito2` con una función flecha en lugar de un método, y observa la diferencia en el comportamiento de `this`.

// ### Funciones con Parámetros Rest
// **Consigna**: Implementa una función `concatenarStrings` que reciba un string inicial y un número variable de argumentos adicionales. La función debe concatenar el string inicial con todos los argumentos adicionales. Prueba la función con diferentes cantidades de argumentos y muestra los resultados en la consola.

// ### Funciones con Desestructuración de Parámetros
// **Consigna**: Implementa una función `calcularPromedio` que reciba un objeto con tres propiedades `x`, `y`, y `z`, y retorne el promedio de estas propiedades. Usa la desestructuración de parámetros en la definición de la función. Prueba la función con un objeto de ejemplo y muestra el resultado en la consola.

// ### Funciones con Retorno Void
// **Consigna**: Define un tipo `accionTipoVoid` que sea una función que retorne void. Implementa varias funciones que sigan este tipo pero que retornen diferentes valores como números, strings, y objetos. Observa el comportamiento de TypeScript al intentar compilar estas funciones y prueba qué pasa al ejecutarlas.