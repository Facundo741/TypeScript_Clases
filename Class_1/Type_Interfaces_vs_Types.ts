//Tipos Interfaces vs Types

//El uso de type e interface es muy similar, y en la mayoría de los casos es posible elegir cualquiera de ellos de forma indistinta. Casi todas las características de interface están disponibles en type, la clave para distinguir entre cuando usar una y otra es que una ves que se define un type no se le pueden agregar mas propiedades, mientras que interface es siempre extendible.

//Supongamos que tenemos una interface y un type.

interface Transporte {
    nombre: string;
}
type Figura = {
    nombre: string;
};

//¿Cómo extender una interface?

interface Auto extends Transporte {
    ruedas: number;
}

//¿Cómo extender un type?

type Cuadrado = Figura & {
    lados: 4;
};

//¿Cómo agregar mas propiedades a una interface previamente definida?

interface Transporte {
    peso: number;
}

//¿Cómo agregar propiedades a un type previamente definido?

// Cuando se utiliza type no es posible agregar mas propiedades. Esta es una de las diferencias que existen entre interface vs type.
