//Funciones Call Signature

//En JavaScript, las funciones ademas de poder ser invocadas pueden tener propiedades. Sin embargo, la sintaxis de las funciones como expresiones no permiten declarar propiedades. Si queremos asociar valores adicionales a una función, podemos escribir un alias para dicho propósito.

type FuncionDescribible = {
    descripcion: string;
    base: number;
    (base: number): number;
}
function imprimirEnConsola(fn: FuncionDescribible){
    console.log(fn.descripcion + fn(fn.base));
}
const cuadradoDeUnNumero: FuncionDescribible = (base) => {
    return base * base;
}
cuadradoDeUnNumero.descripcion = "El cuadrado de 2 es ";
cuadradoDeUnNumero.base = 2;
imprimirEnConsola(cuadradoDeUnNumero);
const mitadDeUnNumero: FuncionDescribible = (base) => {
    return base / 2;
}
mitadDeUnNumero.descripcion = "La mitad de 10 es ";
mitadDeUnNumero.base= 10;
imprimirEnConsola(mitadDeUnNumero);


// **Consigna**: Define un tipo `OperacionMatematica` que sea una función con una propiedad `descripcion` y otra `valor`. Implementa una función llamada `ejecutarOperacion` que reciba un argumento de tipo `OperacionMatematica` e imprima la descripción y el resultado de la operación en la consola. Luego, crea dos funciones `sumarDosNumeros` y `multiplicarDosNumeros` que implementen `OperacionMatematica`, establece sus propiedades y pásalas a `ejecutarOperacion`.

type OperacionMatematica = {
    descripcion: string;
    valor: number;
    (a: number, b: number): number;
}
function ejecutarOperacion (fn: OperacionMatematica) {
    console.log(`${fn.descripcion}: ${fn(fn.valor, fn.valor)}`);
}
const sumarDosNumeros: OperacionMatematica = (a, b) => {
    return a + b;
};
sumarDosNumeros.descripcion = "La suma de dos números es";
sumarDosNumeros.valor = 5;
const multiplicarDosNumeros: OperacionMatematica = (a, b) => {
    return a * b;
};
multiplicarDosNumeros.descripcion = "La multiplicación de dos números es";
multiplicarDosNumeros.valor = 3;
ejecutarOperacion(sumarDosNumeros);
ejecutarOperacion(multiplicarDosNumeros);

