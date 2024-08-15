//Tipos Enums

//Los enums es una forma de dar nombres mas amigables a un grupo de sets de valores numericos.

enum MarcasDeCoche {
    Toyota = 100,
    Chevrolet,
    Ford
};
let prius: MarcasDeCoche = MarcasDeCoche.Toyota;
console.log(prius);

// **Ejercicio:**
// - Define un enum `DiasDeLaSemana` con los días de la semana.
// - Escribe una función que reciba un valor del enum y retorne si es un día laboral o fin de semana.

enum DiasDeLaSemana {
    Lunes = "Dia Laboral",
    Martes = "Dia Laboral",
    Miercoles = "Dia Laboral",
    Jueves = "Dia Laboral",
    Viernes = "Dia Laboral",
    Sabado = "Fin de Semana",
    Domingo = "Fin de Semana"
}
function esDiaLaboral(dia: DiasDeLaSemana): string {
    return dia;
}
console.log(esDiaLaboral(DiasDeLaSemana.Lunes));  
console.log(esDiaLaboral(DiasDeLaSemana.Domingo)); 