//Funciones Rest Parameters

//Además de utilizar parámetros opcionales o sobrecarga para hacer que las funciones acepten una variedad de argumentos, también es posible definir funciones que tomen un número indeterminado de argumentos utilizando rest parameters.
//Un parámetro rest aparece al final de la lista de parámetros con un prefijo de tres puntos seguido del nombre del parámetro ...nombre.

function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2)); // 4;
console.log(multiplicar(2, 2, 3)); // 12;
console.log(multiplicar(2, 2, 3, 4)); // 48;

//La función multiplicar recibe un segundo parámetro llama m, este almacena todos los números adicionales como parte de un arreglo tipo number y despues los multiplica uno a uno.

// **Consigna**: Implementa una función `concatenarStrings` que reciba un string inicial y un número variable de argumentos adicionales. La función debe concatenar el string inicial con todos los argumentos adicionales. Prueba la función con diferentes cantidades de argumentos y muestra los resultados en la consola.

function concatenarStrings(s: string, ...m: string[]): string { 
  return m.reduce((f,n) =>{
    return f.concat(n);
  }, s)
}
console.log(concatenarStrings('Hola', ' como estas?'));
console.log(concatenarStrings('Hola', ' como estas?', ' Encatado de conocerte'));