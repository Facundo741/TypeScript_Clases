//Tipos Aliases (alias)

//Un alias de tipo es un nombre dado a cualquier tipo.

type Punto = {
    x: number;
    y: number;
};
function imprimirCoordernada (punto: Punto) {
    console.log(`X: ${punto.x}, Y: ${punto.y}`);
}
imprimirCoordernada({x: 10, y: 25});

// **Ejercicio:**
// - Define un alias de tipo `Punto` para un objeto con propiedades `x` y `y` de tipo `number`.
// - Escribe una función `imprimirCoordernada` que reciba un `Punto` y lo imprima en la consola.

type Punto1 = {
    x: number;
    y: number;
}
function imprimirCoordernada1(x: number, y: number) { 
    return `Coordenadas: ${x} ${y}`;
}
console.log(imprimirCoordernada1(10,12));
