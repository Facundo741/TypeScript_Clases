//Tipos Objetos

//Representa un tipo no primitivo, cualquier cosa que no sea number, string, boolean, bigint, symbol, null o undefined. Con el tipo object, las APIs como Object.create pueden ser mejor representadas.

declare function crear( o: Object ): void;
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//false es un tipo primitive, lo cual genera un error.
crear(false);

// **Ejercicio:**
// - Declara una función `crearObjeto` que reciba un objeto y lo imprima en la consola.

function crearObjeto(objeto: Object): void {
    return console.log(objeto);
}
crearObjeto({saludo: "hola"})