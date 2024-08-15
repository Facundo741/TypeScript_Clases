//Tipos Void

//Puede considerarse como el opuesto a Any, mientras que Any representa Cualquier Tipo, void representa Ningun Tipo.

function saludar (): void {
    console.log("Hola Mundo");
}
saludar ();

//Declarar variables del Tipo Void no es util ya que solo pueden ser null o undefined.

// **Ejercicio:**
// - Escribe una función `logMensaje` que reciba un mensaje y lo imprima en la consola. La función debe tener un tipo de retorno `void`.

function logMensaje(menssage: string): void {
    return console.log(menssage);
}
console.log("Bichito de luz");