//Tipos Unions

//El sistema de tipos de TypeScript permite crear nuevos tipos utilizando una variedad de operadores.
//¿Cómo definir utilizar union en TypeScript?
//La primera forma de combinar tipos es utilizando uniones. Es una union los tipos que forman parte de esta se le llaman miembros.

function imprimirId ( id: number | string) {
    console.log(`El id es ${id}`);
} 
imprimirId(1);
imprimirId("abc");

//¿Cómo trabajar con uniones?

//Supongamos ahora que dentro de nuestra función deseamos utilizar los métodos asociados aid que puede ser number o string. Como cada uno de estos tipos tiene diferentes métodos se hace necesario primero hacer una verificación del tipo para poder interactuar con este.

function imprimirId2( id: number | string) {
    if (typeof id === 'string') {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}
imprimirId2("este_es_mi_id");
imprimirId2(100.234234123);

// **Ejercicio:**
// - Escribe una función `imprimirId` que reciba un `id` que puede ser un número o una cadena y lo imprima en la consola. La función debe manejar ambos tipos adecuadamente.

function imprimirId3(id: number | string) {
    console.log(`El id es ${id}`);
}
imprimirId3(1);
imprimirId3("Hola")