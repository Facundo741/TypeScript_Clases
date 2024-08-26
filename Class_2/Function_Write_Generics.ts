//Funciones, Recomendaciones Al Escribir Generics

//Guia para escribir buenas funciones genéricas

// Al escribir funciones genéricas es importante no utilizar generics en donde no sean necesarios, debido a que esto puede interferir con el mantener una función sencilla de utilizar e interpretar.
//Favorece la inferencia sobre la declaración de los tipos de los argumentos
//Aquí hay dos funciones que operan igual.

function primerElemento<Type>(arr: Type[]) {
    return arr[0];
}
function primerElemento<Type extends any[]>(arr: Type[]) {
    return arr[0];
}

//Ambas funciones realizan el mismo trabajo y ambas funciones infieren el tipo del return, sin embargo para la primera función el Type sera el tipo provisto como argumento a la función mientras que en la segunda el Type es any que es mucho mas generalista.
//Utiliza pocos parámetros
//Aqui hay otras dos funciones

function filtrar1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}
function filtrar2<Type, Func extends (arg: Type) => boolean> (
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}

//En este ejemplo tenemos dos funciones que realizan la misma tarea, pero en el segundo ejemplo Func no relaciona al menos dos valores, solo hace mas complicado de leer la función y no existe una razón valida para ello.
//El parámetro Type debe aparecer al menos dos veces
//En algunas ocasiones olvidamos que una función no requiere siempre utilizar generics.

function saludar(Type extends string)(s: Type) {
    console.log("Hola " + s);
}
// La función anterior puede ser escrita fácilmente en una forma mas simple.

function saludar(s: string) {
    console.log("Hola " + s);
}

//Intenta recordar siempre que si implementas generics es porque deseas relacionar valores. Si un parámetro es utilizado solamente en una ocasión, no requiere que eches uso de esta característica.

