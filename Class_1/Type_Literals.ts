//Tipos Literals

//Los literals (literales) son bastante útiles cuando se combinan con el uso de funciones y unions.

function imprimir(estadoCivil: "soltero" | "casado") {
    console.log(estadoCivil);
}
imprimir("soltero");

// **Ejercicio:**
// - Escribe una función `imprimirEstadoCivil` que reciba un parámetro `estadoCivil` que solo pueda ser `"soltero"` o `"casado"` y lo imprima en la consola.

function imprimirEstadoCivil(estadoCivil: "soltero" | "casado" ) {
    console.log(estadoCivil);
}
imprimirEstadoCivil("casado");