// TypeScript provee una serie de utilidades para facilitar transformaciones entre tipos. Estas utilidades se encuentran de forma global.

// Partial<Type>
// Construye un tipo con todas las propiedades de Type como opcionales. Esta utilidad retorna un tipo que representa todos los subelementos del tipo provisto.
// interface Tarea {
//     titulo: string;
//     descripcion: string;
// }
// function actualizarTodo(tarea: Tarea, camposActualizar: Partial<Tarea>) {
//     return { ...tarea, ...camposActualizar };
// }
// const tarea1: Tarea = {
//     titulo: "Organizar escritorio",
//     descripcion: "Limpiar, ordenar y destruir material vencido",
// };
// const tarea2 = actualizarTodo(tarea1, {
//     descripcion: "Tirar la basura",
// });

// Required<Type>
// Construye un tipo en el cual existen todas las propiedades de Type en donde los elementos que la componen son todos requeridos. Es decir lo opuesto a Partial<Type>.
// interface Props {
//     a?: number;
//     b?: string;
// }

// const obj: Props = { a: 5 };

// const obj1: Required<Props> = { a: 100 };

// Readonly<Type>
// Construye un tipo con todas las propiedades de Type definidas como readonly, lo que quiere decir que las propiedades del nuevo tipo no pueden ser reasignadas.
// interface Tarea {
//     titulo: string;
// }

// const tarea: Readonly<Tarea> = {
//     titulo: "Eliminar usuarios inactivos",
// };
// tarea.titulo = "Hola!"; // <- esta línea generará un error

// Record<Keys,Type>
// Construye un objeto cuyas propiedades son Keys (llaves) y cuyos valores son Type. Esta utilidad puede ser utilizada para mapear propiedades de un tipo a otro.
// interface GatoInfo {
//     edad: number;
//     color: string;
// }

// type GatoNombre = "bolita" | "michi" | "rayas";
// const gatos: Record<GatoNombre, GatoInfo> = {
//     bolita: { edad: 10, color: "Rojo" },
//     michi: { edad: 15, color: "Negro" },
//     rayas: { edad: 21, color: "Amarilla" },
// };

// Pick<Type, Keys>
// Construye un tipo eligiendo un grupo de propiedades a partir de Type.
// interface Tarea {
//     titulo: string;
//     descripcion: string;
//     completado: boolean;
// }
// type TareaReducido = Pick<Tarea, "titulo" | "descripcion">;

// const tarea: TareaReducido = {
//     titulo: "Limpiar Recamara",
//     descripcion: "Poner en orden todo lo que existe en la recamara",
// };

// Omit<Type, Keys>
// Construye un tipo tomando las propiedades de Type removiendo las Keys especificadas.
// interface Tarea {
//     titulo: string;
//     descripcion: string;
//     completado: boolean;
// }
// type TareaPreview = Omit<Tarea, "titulo">;
// const tarea: TareaPreview = {
//     completado: true,
//     descripcion: "Aqui la descripción de la tarea",
//     titulo: "Este es el título", // <- esta línea generará un error
// };

// Exclude<Type,UnionDeExcluidos>
// Construye un tipo excluyendo de Type el resultado de la unión.
// type T0 = Exclude<"a" | "b" | "c", "c">;
// // type T0 = "a" | "b"

// Extract<Type,Union>
// Construye un tipo extrayendo de Type basado en el resultado de la unión.
// type T0 = Extract<"a" | "b" | "c", "a" | "c">;
// // type T0 = "a" | "c"

// NonNullable
// Construye un tipo excluyendo null y undefined de Type.
// type T0 = NonNullable<string | number | undefined | null>;
// // type T0 = string | number

// Parameters<Type>
// Construye una tupla de tipos a partir de los tipos utilizados en los parámetros de una función de tipo Type.
// declare function f1(arg: { a: number; b: string }): void;
// type T0 = Parameters<() => string>;
// // type T0 = []
// type T1 = Parameters<(s: string) => void>;
// // type T1 = [s: string]
// type T2 = Parameters<<T>(arg: T) => T>;
// // type T2 = [arg: unknown]
// type T3 = Parameters<typeof f1>;
// // type T3 = [arg: { a: number; b: string; }]
// type T4 = Parameters<any>;
// // type T4 = unknown[]
// type T5 = Parameters<never>;
// // type T5 = never
// type T6 = Parameters<string>;
// // type T6 = never
// type T7 = Parameters<Function>;
// // type T7 = never

// ConstructorParameters<Type>
// Construye una tupla o arreglo de tipos a partir de los tipos provistos a la función del constructor.
// type T0 = ConstructorParameters<ErrorConstructor>;
// // type T0 = [message?: string]
// type T1 = ConstructorParameters<FunctionConstructor>;
// // type T1 = string[]
// type T2 = ConstructorParameters<RegExpConstructor>;
// // type T2 = [pattern: string | RegExp, flags?: string]
// type T3 = ConstructorParameters<any>;
// // type T3 = unknown[]
// type T4 = ConstructorParameters<Function>; // <- error
// // Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.

// ReturnType<Type>
// Construye un tipo en base al Type del valor de retorno de una función.
// declare function f1(): { a: number; b: string };
// type T0 = ReturnType<() => string>;
// // type T0 = string
// type T1 = ReturnType<() => void>;
// // type T1 = void

// InstanceType<Type>
// Construye un tipo a partir del tipo de instancia de la función constructor en Type.
// type T0 = InstanceType<typeof C>;
// // type T0 = C
// type T1 = InstanceType<any>;
// // type T1 = any
// type T2 = InstanceType<never>;
// // type T2 = never

// ThisParameterType<Type>
// Extrae el tipo del parámetro this del tipo de una función, o unknown si la función no tiene un parámetro this.
// function toHex(this: number) {
//     return this.toString(16);
// }
// function numeroToString(n: ThisParameterType<typeof toHex>) {
//     return toHex.apply(n);
// }

// Intrinsic Manypulation Types (Manipuladores Intrínsecos)
// Uppercase<Type>;
// Lowercase<Type>;
// Capitalize<Type>;
// Uncapitalize<Type>;