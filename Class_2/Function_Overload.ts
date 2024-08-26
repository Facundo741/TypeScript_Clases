//Funciones Overload

//Algunas funciones de JavaScript pueden ser invocadas con diferentes tipos y número de argumentos. Por ejemplo, es posible escribir una función que produce un Date que toma un timestamp (un argumento) o un mes/día/año (tres argumentos).
// En TypeScript, podemos especificar una función que puede ser llamada de formas diferentes utilizando overload signatures o sobrecarga de funciones. Para poder hacer esto escribe un número de posibles definiciones distintos de una función (usualmente dos o mas), seguido del cuerpo de la función.
// Al igual que con los generics, existen algunas guias para el buen uso de la escritura de las funciones con sobrecarga. Al seguir estos principios nos aseguramos que sean sencillas de invocar, sencillas de entender y sencillas de implementar.

function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));

//En este ejemplo tenemos una función con sobrecarga que imprime la longitud de un texto o un string. Si bien cumple con su función, podemos simplificar esta función con sobrecarga de una forma mucho mas sencilla usando unions.

function calcularLongitud(x: any[] | string) {
    return x.length;
}
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));

// **Consigna**: Implementa una función `calcularArea` con sobrecarga que reciba un radio y calcule el área de un círculo, o que reciba el largo y el ancho y calcule el área de un rectángulo. Prueba la función con ambos tipos de argumentos y muestra los resultados en la consola.

function calcularArea(radio: number): number;
function calcularArea(largo: number, radio: number): number;
function calcularArea(...args: number[]): number {
  if (args.length === 1) {
    return Math.PI * args[0] ** 2;
  } else if (args.length === 2) {
    return args[0] * args[1];
  } else {
    throw new Error('Debe proporcionar un radio o un largo y ancho');
  }
}
const areaCirculo = calcularArea(5);
console.log('El area del circulo es: ', areaCirculo);
const areaRectangulo = calcularArea(4, 6);
console.log('El area del rectangulo: ', areaRectangulo);

