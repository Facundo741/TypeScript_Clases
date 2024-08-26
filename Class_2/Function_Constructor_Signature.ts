//Funciones Constructor Signature

//Las funciones de JavaScript pueden ser también invocadas con el operador new. TypeScript hace referencia a estos operadores como constructors (constructores) porque estos sirven para crear un objeto. Por ello se puede escribir un constructor signature (firma para el constructor) añadiendo la palabra new enfrente de la firma

interface Transporte {
    nombre: string;
}
class Caballo implements Transporte {
    constructor(public nombre: string) {}
}
class Automovil implements Transporte {
    constructor(public nombre: string) {}
}
type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};
function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
    return new ctr(nombre);
}
const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);

//En el ejemplo hemos construido una función a la cual se le pasa un objeto que posee un constructor como parte de su firma. En este caso dicho constructor debe retornar un objeto que implemente la interface Transporte

// **Consigna**: Define una interfaz `Electrodomestico` con una propiedad `marca`. Crea dos clases `Refrigerador` y `Lavadora` que implementen `Electrodomestico`. Define un tipo `ConstructorDeElectrodomestico` que sea un constructor que retorne un objeto de tipo `Electrodomestico`. Implementa una función `construirElectrodomestico` que reciba un constructor y una marca, y retorne una instancia del electrodoméstico. Crea instancias de `Refrigerador` y `Lavadora` y muestra sus marcas en la consola.

interface Electrodomestico {
  marca: string;
}
class Refrigerador implements Electrodomestico { 
  constructor(public marca: string) {}
}
class Lavadora implements Electrodomestico { 
  constructor(public marca: string) {}
}
type construirElectrodomestico = {
  new (marca: string): Electrodomestico;
}
function construirElectrodomestico(ctr: construirElectrodomestico, marca: string) {
  return new ctr(marca);
}
const miRefrigerador = construirElectrodomestico(Refrigerador, "Samsung")
const miLavadora = construirElectrodomestico(Lavadora, "LG")
console.log('Mi refrigerador es ' + miRefrigerador.marca)
console.log('Mi lavadora es ' + miLavadora.marca)