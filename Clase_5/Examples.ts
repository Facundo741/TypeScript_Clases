// 1. **Classes, readonly (solo lectura)**: Crea una clase `Book` con una propiedad de solo lectura `title` que se inicializa en el constructor. Intenta cambiar el valor de `title` fuera del constructor y observa qué sucede.

// 2. **Classes, Constructors (los constructores)**: Define una clase `Car` que tenga un constructor para inicializar las propiedades `make`, `model`, y `year`.

// 3. **Classes, super (uso de super en constructores)**: Crea una clase `Animal` con una propiedad `name` y un constructor que la inicialice. Luego, crea una clase `Dog` que herede de `Animal` y que inicialice `name` usando `super`.

// 4. **Classes, Methods (métodos)**: Define una clase `Calculator` que tenga métodos `add`, `subtract`, `multiply`, y `divide`.

// 5. **Classes, Setters y Getters**: Crea una clase `Person` con propiedades privadas `firstName` y `lastName`. Implementa métodos `getter` y `setter` para ambas propiedades.

// 6. **Classes, Herencia**: Define una clase `Shape` con un método `area`. Luego, crea una clase `Circle` que herede de `Shape` y sobreescriba el método `area` para calcular el área de un círculo.

// 7. **Classes, extends (extender clases)**: Usa la palabra clave `extends` para crear una clase `Rectangle` que herede de una clase `Shape` base.

// 8. **Classes, Sobrecarga**: Implementa una clase `Printer` que tenga un método `print` que pueda aceptar diferentes tipos de parámetros (por ejemplo, `string`, `number`, y `array`).

// 9. **Classes, Orden de inicialización de las clases**: Crea una clase `Base` con una propiedad inicializada en el constructor. Luego, crea una clase `Derived` que herede de `Base` y tenga su propia propiedad inicializada en su constructor. Explica el orden de inicialización de las propiedades.

// 10. **Classes, Herencia en Built-in Types (tipos nativos)**: Crea una clase `CustomArray` que herede de `Array` y añade un método `last` que devuelve el último elemento del array.

// 11. **Classes, Visibility, Public (visibilidad pública)**: Define una clase `Employee` con propiedades públicas `name` y `age`, y un método público `getDetails`.

// 12. **Classes, Visibility, Protected (visibilidad protegida)**: Crea una clase `Account` con una propiedad protegida `balance` y un método protegido `calculateInterest`.

// 13. **Classes, Visibility, Private (visibilidad privada)**: Define una clase `BankAccount` con una propiedad privada `accountNumber` y un método privado `generateStatement`.

// 14. **Classes, Static Members (elementos estáticos)**: Implementa una clase `MathUtils` con un método estático `add` y una propiedad estática `PI`.

// 15. **Classes, Generics (generics dentro de clases)**: Crea una clase `Box<T>` que pueda contener un elemento de cualquier tipo y tenga métodos `getItem` y `setItem`.

// 16. **Classes, this runtime behavior (comportamiento de this en tiempo de ejecución)**: Crea una clase `User` con un método `sayHello` que use `this` para acceder a la propiedad `name`. Luego, llama a `sayHello` en diferentes contextos y observa el comportamiento de `this`.

// 17. **Classes, Arrow Functions (funciones tipo flecha)**: Define una clase `Timer` que tenga un método que use una función flecha para mantener el contexto de `this` dentro de un `setTimeout`.

// 18. **Classes, this parameter (el parámetro this)**: Crea una clase `Greeter` con un método `greet` que acepte el parámetro `this` y use `this.name`.

// 19. **Classes, this types (tipos "this")**: Implementa una clase `Fluent` con métodos que devuelvan `this` para permitir el encadenamiento de métodos.

// 20. **Classes, this type guard**: Crea una clase `Shape` con una guardia de tipo (`type guard`) que verifique si una instancia es de un tipo específico usando `this`.

// 21. **Classes, parameter properties (parámetros como propiedades)**: Define una clase `Movie` que use parámetros como propiedades en su constructor para inicializar `title`, `director`, y `releaseYear`.

// 22. **Classes, Class Expressions (clases como expresiones)**: Define una clase `Animal` usando una expresión de clase y crea una instancia de ella.

// 23. **Classes, Abstract Classes (clases abstractas)**: Crea una clase abstracta `Vehicle` con un método abstracto `move`. Luego, crea una clase `Car` que herede de `Vehicle` e implemente el método `move`.

// 24. **Classes, Relationships (relaciones entre clases)**: Define una clase `Library` que contenga una colección de objetos `Book` y un método para añadir libros a la colección.