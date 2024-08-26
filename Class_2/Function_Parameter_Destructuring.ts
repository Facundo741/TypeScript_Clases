//Funciones Parameter Destructuring

// //La destructuración de parámetros permite romper objetos en una o mas variables locales. En el caso de la función permite romper los argumentos para crear variables con un scope al nivel del cuerpo de la función.

function sumar(num) {
    return num.a + num.b + num.c;
}
const numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));

//Ahora supongamos que deseamos descomponer el parámetro num en variables independientes para realizar la suma. Para ello podemos usar la destructuración.

function sumar({ a, b, c }): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));

//TypeScript nos permite definir los tipos que el objeto a desestructurar posee.

function sumar({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));

// 'Tomar en cuenta que la sintáxis de destructuración es similar a la de definición de tipos. Pero a diferencia de esta separa los valores por comas , (destructuración) y no por punto y coma ; (definición de tipos).'

// **Consigna**: Implementa una función `calcularPromedio` que reciba un objeto con tres propiedades `x`, `y`, y `z`, y retorne el promedio de estas propiedades. Usa la desestructuración de parámetros en la definición de la función. Prueba la función con un objeto de ejemplo y muestra el resultado en la consola.

function calcularPromedio({ x, y, z }: { x: number, y: number, z: number }):number{
  return (x + y + z) / 3;
}
const num = {x:10, y:10, z:10}
console.log(calcularPromedio(num))