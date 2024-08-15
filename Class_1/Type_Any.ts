//Tipos Any 

// En ocasiones no toda la informacion se encuentra disponible o la declaracion de un tipo nos puede llevar a tener un error inesperado, esto es por un codigo no escrito en TypeScript o libreria de terceros.

let variableSinTipo: any = "hola miguel";
variableSinTipo = 100;

// **Ejercicio:**
// - Declara una variable `dato` de tipo `any` y asígnale diferentes tipos de valores.
// - Escribe una función que reciba un parámetro de tipo `any` y retorne una descripción del tipo de dato recibido.

let varST: any = "Leonel Messi";
varST= 1350;
varST = [1,2,3,4,5,6,7,8,9,10];
varST = true;
function descripción(valor: any): string {
    let tipo = typeof valor;
    switch (tipo) {
        case "string":
            return "Es un string";
        case "number":
            return "Es un number";
        case "boolean":
            return "Es un boolean";
        case "object":
            return "Es un object";
        default:
            return "No se que tipo es";
    }
}
console.log(descripción("Leonel Messi"));
console.log(descripción(1350));
console.log(descripción([1,2,3,4,5,6,7,8,9,10]));
console.log(descripción(true));