//Funciones Parametros Opcionales

//Las funciones en JavaScript usualmente tienen un número de argumentos variable. Por ejemplo el método toFixed del tipo number toma como segundo parámetro un número que indica la cantidad de dígitos a los cuales debe redondear.

function f(n: number) {
    console.log(n.toFixed()); // no se especifican argumentos
    console.log(n.toFixed(3)); // se especifica un argumento
}

//Para poder reproducir esta característica dentro de TypeScript utilizamos el signo de interrogación ? que indica que el parámetro es opcional.

function f(n?: number) {
    // ...
}

//Si bien el parámetro ha sido especificado como un tipo number, cuando no se envía un argumento a la función este tiene el tipo undefined, esto se debe a que los parámetros no especificados en JavaScript tienen por default el valor undefined.
// También es posible asignar un valor por default y omitir el tipo que es inferido desde su asignación.

function f(n = 10) {
    // ...
}

//Ahora tendremos dentro de la firma de f un parámetro n con un valor por default de 10 y el tipo number que ha sido inferido de su valor por default.
//Parámetros opcionales en los callbacks
// Una ves que se ha aprendido como utilizar los parámetros opcionales, es muy común cometer el siguiente tipo de errores.

function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}

// El error que por lo general se comete al hacer el parámetro index opcional, es que cualquiera de las dos siguientes llamadas a la función sean validas.

miIterador([1, 2, 3], (a) => console.log(a));
miIterador([1, 2, 3], (a, i) => console.log(a, i));

//Pero esto no funciona así, ya que lo que TypeScript entiende es que la función callback puede ser invocada desde el iterador también con un solo argumento.

function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i <= arr.length; i++) {
        // aqui es en donde index es opcional o no
        callback(arr[i]);
    }
}

// Incluso dentro de la definición del callback TypeScript envía un mensaje indicando que index puede ser undefined.

miIterador([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
});

//En este último caso veremos que el compilador tira el error Object is possibly 'undefined'.