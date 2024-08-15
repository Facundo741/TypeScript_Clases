//Tipo Type Assertion (Confirmacion de tipos)

//Los type assertions son una forma de decirle al compilador que debe confiar en ti, porque entiendes lo que estas haciendo. Un type assertion es como el type cast de otros lenguajes, pero se ejecuta sin verificar ninguna verificación o reestructurando datos. No tiene impacto durante la ejecución y es manejado exclusivamente por el compilador. TypeScript asume que el programador ha realizado las verificaciones necesarias para cerciorarse que el tipo corresponde al que dice ser.

//Forma 1

//Usando en la sintaxis, as.

let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;

//En este ejemplo, la variable algunValor no es string sino unknown. Le indicamos al compilador mediante algunValor as string que confie que la variable es un string y que sea interpretada como esta.

//Forma 2

//Otra forma es usando <tipo>.

let algunValor2: unknown = "este es un string";
let longitudDelString2: number = (<string>algunValor).length;

// **Ejercicio:**
// - Declara una variable `valorDesconocido` de tipo `unknown`.
// - Usa `type assertions` para tratarla como un string y obtener su longitud.

let valorDesconocido: unknown = "Esto es un ejercicio de prueba.";
let longitudCadena: number = (valorDesconocido as string).length;
console.log(longitudCadena);
