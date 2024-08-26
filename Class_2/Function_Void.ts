//Funciones Void como Valor de Retorno

// Funciones que retornan void

// El valor void que retornan las funciones puede producir algunos comportamientos inusuales e inesperados.
// Cuando se utiliza void no se obliga a una función a retornar algo, si creamos un alias que defina una función void, esta puede tener cualquier tipo de valor retornado.

type funcionTipoVoid = () => void;
const f1: funcionTipoVoid = () => {
    return true;
};
console.log(f1());
const f2: funcionTipoVoid = () => true;
console.log(f2());
const f3: funcionTipoVoid = function () {
    return true;
};
console.log(f3());

// El compilador no mostrará ningún error, por el contrario retornará true en cada uno de los casos.
// Sin embargo si especificamos que la función debe retornar un void como en el siguiente ejemplo, el compilador de TypeScript si generará un error cuando se retorne algún valor por parte de la función.

const f4: funcionTipoVoid = (): void => {
    return true;
};

// **Consigna**: Define un tipo `accionTipoVoid` que sea una función que retorne void. Implementa varias funciones que sigan este tipo pero que retornen diferentes valores como números, strings, y objetos. Observa el comportamiento de TypeScript al intentar compilar estas funciones y prueba qué pasa al ejecutarlas.

type accionTipoVoid = () => void;
const funcionNumero: accionTipoVoid = () => {
  return 50;
}
const funcionString: accionTipoVoid = () => {
  return 'Hola, mundo!';
}
const funcionObjeto: accionTipoVoid = () => {
  return { nombre: 'John', apellido: 'Doe' };
}
console.log(funcionNumero());
console.log(funcionString());
console.log(funcionObjeto());