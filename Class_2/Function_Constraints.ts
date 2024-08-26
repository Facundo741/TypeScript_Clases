//Funciones Constraints

//Hemos escrito algunas funciones que pueden trabajar con cualquier valor. En algunas ocasiones queremos definir generics pero también deseamos que este se restrinja a una serie de posibles valores. Para tal caso podemos utilizar los constranints que permiten limitar que tipos podemos aceptar.
//Vamos a escribir una función que retorne dos valores. Para hacer esto, necesitamos al propiedad length que es un número. Así restringimos el tipo del parámetro a este tipo utilizando la clausula extends.

function determinarMasLargo<T extends { length: number}>(a: T, b: T){
    if (a.length){
        return a;
    } else { 
        return b;
    }
}
const elArregloMasLargo = determinarMasLargo(['a','b'], ['a','b','c','d']);
console.log('El arreglo mas largo es ', elArregloMasLargo);
const elStringMasLargo = determinarMasLargo (
    'This is my first text',
    'and this is text which is longer'
);
console.log(`El string mas largo es '${elStringMasLargo}'`);

//Existen algunas algunas cosas interesantes que hay que hacer notar. Mediante TypeScript se puede permitir interferir el tipo retornado por la función determinarMasLargo. El concepto de interference también funciona dentro de generic functions.
// Debido a que hemos restringido Type a { length: number }, hemos podido accesar la propiedad length de los parámetros a y b.
// Los tipos de elArregloMasLargo y elStringMasLargo son determinados en base a los argumentos. Recuerda que los generics consisten en relacionar dos o mas valores con el mismo tipo.

// **Consigna**: Implementa una función genérica `compararLongitud` que reciba dos argumentos con una propiedad `length` y retorne el que tenga menor longitud. Prueba la función con arreglos y strings, e imprime los resultados en la consola.

function compararLongitud <T extends {length: number}> (a: T, b: T){
    if (a.length) {
      return a;
    } else {
      return b;
    }
}
const menorLongitud = compararLongitud (['a','b'], ['a','b','c','d']);
console.log ('El arreglo con mejor longitud es ', menorLongitud);
const menorString = compararLongitud (
  'Hola, como estas?',
  'Esto es una cadena a modo de ejemplo'
);
console.log ('La cadena con menor longitud es ', menorString);