//Funciones Generics

//Es común escribir funciones en donde los tipos de entrada están asociados a los de salida, o en donde dos tipos de entrada están relacionados de alguna forma. Consideremos por un momento una función que retorna el primer elemento de un arreglo.

function primerElementoDeUnArreglo(arreglo: any[]) {
    return arreglo[0];
}

//La función anterior realiza el trabajo necesario, desafortunadamente para hacer esta función operar con cualquier tipo de arreglo, se hace necesario que el tipo implícito sea any, y sería mucho mejor que pudiéramos utilizar el tipo del arreglo que estamos enviando a la función.
// Para el propósito anterior existen los generics (genéricos) que son utilizados para describir la correspondencia entre dos valores. Para hacer esto utilizamos el parámetro de tipo Type en la firma de la función:

function obtenerPrimerElementoDeArreglo<Type>(arreglo: Type[]): Type {
    return arreglo[0];
}
const primerNumero = obtenerPrimerElementoDeArreglo([1,2,3,4]);
console.log("El primer numero es " + primerNumero);
const primeraLetra = obtenerPrimerElementoDeArreglo(["a", "b", "c", "d"]);
console.log("La primera letra es " + primeraLetra);

// **Consigna**: Implementa una función genérica `obtenerUltimoElemento` que reciba un arreglo de cualquier tipo y retorne el último elemento. Prueba la función con un arreglo de booleanos y un arreglo de objetos, imprimiendo los resultados en la consola.

function obtenerUltimoElemento <Type> (arreglo: Type[]): Type {
    return arreglo[arreglo.length - 1];
}
const arregloBooleanos = [true, false, false, true, false]
const ultimoBooleano = obtenerUltimoElemento (arregloBooleanos);
console.log("El ultimo booleano es: " + ultimoBooleano);
const arregloObjetos = [{ nombre: "Juan"},{ nombre: "Pedro"},{ nombre: "Maria"}];
const ultimoObjeto = obtenerUltimoElemento (arregloObjetos);
console.log("El ultimo objeto es: " , ultimoObjeto);