//Tipos Never

//Representa el tipo de valores que nunca ocurren. Es un subtipo, que es asignable a cualquier tipo, sin embargo ningun tipo es un subtipo de never, un tipo never solo puede ser asignado con el valor never. Incluso Any no puede ser asignado a Never.

// esta funcion no tiene un punto final ya que dispara una excepcion

function error1(mensaje: string): never {
    throw new Error(mensaje);
}

// esta funcion no tiene un punto final ya que dispara un error

function fallo(): never {
    return error("Reportar fallo");
}

// esta funcion no finaliza ya que posee un loop infinito

function loopInfinito(): never {
    while (true) {}
}

// **Ejercicio:**
// - Escribe una función `lanzarError` que siempre lance un error. Debe tener un tipo de retorno `never`.

function error(message: string): never {
    throw new Error(message);
}
console.log(error);
