// JavaScript tiene una larga historia acerca de la modularización del código. A través del tiempo la comunidad y la especificación de JavaScript ha convergido en un formato llamado ES Modules (Módulos ES) que muy probablemente conozcas como import/export.
// Los ES Modules fueron agregados a partir del 2015, y para el 2020 han adquirido bastante soporte dentro de los navegadores web e interpretes de JavaScript runtime.
// Para propósitos de aprendizaje cubriremos los ES Modules import/export así como su precursor Common JS modules.exports.

// ¿Cómo se definen los módulos en TypeScript?
// En TypeScript al igual que en ES 2015, cualquier archivo que contenga en su parte superior import o export es considerado un módulo.
// Por el contrario cualquier archivo que no contenga un import o export es tratado como un script cuyo contenidos son tratados en un scope global (y por ende para los módulos son considerados así también).
// Los módulos son ejecutados dentro de su propio scope, no en el scope global. Esto quiere decir que las variables, funciones, clases, etc. declaradas dentro de un módulo no son visibles fuera del módulo a menos que estas sean explícitamente exportadas utilizando una de las formas de exportarlas. De igual manera para utilizar una variable, clase, interface, etc., esta tiene que ser importada primero.

// No modules
// Antes de que empecemos, es importante entender que es lo que TypeScript considera un módulo. La especificación de JavaScript sostiene que cualquier archivo JavaScript que no tenga una instrucción export o un await en el nivel superior, entonces debe ser considerado un script y no un módulo.
// Dentro de un script, las variables son declaradas para residir dentro de un scope global, y se asume que se utilizará la directiva --outFile del compilador para unir el código de todos los archivos en uno solo, o múltiples tags <script> dentro del HTML para cargar estos archivos en el orden correcto.

// "Si tienes un archivo que no tiene ninguna instrucción import o export, pero deseas que sea tratado como un módulo, utiliza la siguiente instrucción al final."
// export {};


// Modules, TypeScript Modules (módulos en TypeScript)
// Hay tres factores a considerar cuando escribimos módulos en TypeScript.
// La syntaxis: Que sintaxis quiero utilizar para importar/exportar cosas.
// La resolucion del módulo: ¿Cuál es la relación entre los nombres de los módulos (o sus rutas) y los archivos en disco?
// Módulo de salida objetivo: ¿Cómo debería lucir el archivo JavaScript generado por mi módulo?
// Sintaxis de ES
// // @filename: hola-mundo.js
// export default function holaMundo() {
//     console.log("Hola, Mundo!");
// }
// Después esto se importa de esta forma:
// import hola from "./hola-mundo.js";
// Además de la expresión default export, podemos exportar mas variables, funciones, clases, types, etc. utilizando export adicionales omitiendo la palabra default.
// // @filename: math.js
// export const pi = 3.1416;
// export default class MiClase {}
// Esto puede ser utilizado en otro módulo de la siguiente forma:
// import { pi } from "./math";
// Uso de aliases
// También es posible utilizar un alias al momento de importar desde otros módulos.
// import { pi as valorDePi } from "./math";
// Se pueden combinar estas formas de importar.
// import MiClase, { pi } from "./math";
// O incluso se pueden importar todos los elementos exportables dentro de otro contenedor o namespace.
// import * as math from "./math";
// console.log(math.pi); // <- 3.1416
// Un caso mas es cuando importamos un módulo sin utilizar ninguno de los elementos que lo componen.
// import "./math";


// Modules, CommonJS Syntax (Sintaxis CommonJS)
// CommonJS es el formato en el que la mayoría de los módulos dentro de npm han sido creados. Incluso cuando se están escribiendo módulos utilizando la sintaxis de ES mostrada a continuación, tener un entendimiento de como trabaja la sintaxis CommonJS ayuda a depurar de forma mas sencilla.
// Para exportar…
// Los identificadores se exportan mediante la propiedad exports de la global llamada module.
// function valorAbsoluto(num: number) {
//     if (num < 0) {
//         return num * -1;
//     }
//     return num;
// }
// module.exports = {
//     pi: 3.1416,
//     valorAbsoluto,
// };
// Entonces estos archivos pueden ser importados utilizando la sentencia require.
// const maths = require("./maths");
// O se puede aplicar la destructuración de JavaScript.
// const { absoluto } = require("maths");


// Modules, Output Options (opciones de salida de los módulos)
// Existen dos opciones que afectan el archivo emitido por JavaScript.
// target que determina que características de JS son rebajadas (convertidas para ser ejecutadas en runtimes antiguos de JS) y cuales son dejadas intactas.
// module que determina que código es utilizado por módulos para interactuar con cada uno de ellos.
// El target que utilice es determinado por las características disponibles en el runtime de JS en el cual se desea ejecutar el código de TypeScript. Este puede ser: el navegador mas antiguo soportado, la versión mas antigua de NodeJS o características exclusivas como un ambiente Electron.
// Toda la comunicación entre módulos sucede vía el module loader, el parámetro module del compilador determina cual será utilizada. Durante el tiempo de ejecución, el modulo loader es responsable por localizar y ejecutar todas las dependencias de un módulo antes de ejecutarlo.
// Por ejemplo, el siguiente es un archivo de TypeScript que utiliza la sintaxis de módulos para ES, enseguida el resultado en base a los distintos valores que puede tener el parámetro module.
// import { valueOfPi } from "./constants.js";
// export const twoPi = valueOfPi * 2;
// ES2020
// import { valueOfPi } from "./constants.js";
// export const twoPi = valueOfPi * 2;
// CommonJS
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.twoPi = void 0;
// const constants_js_1 = require("./constants.js");
// exports.twoPi = constants_js_1.valueOfPi * 2;
// UMD
// (function (factory) {
//     if (typeof module === "object" && typeof module.exports === "object") {
//         var v = factory(require, exports);
//         if (v !== undefined) module.exports = v;
//     } else if (typeof define === "function" && define.amd) {
//         define(["require", "exports", "./constants.js"], factory);
//     }
// })(function (require, exports) {
//     "use strict";
//     Object.defineProperty(exports, "__esModule", { value: true });
//     exports.twoPi = void 0;
//     const constants_js_1 = require("./constants.js");
//     exports.twoPi = constants_js_1.valueOfPi * 2;
// });
//  Podemos darnos cuenta que ES2020 es exactamente igual que el archivo TypeScript.