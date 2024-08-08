// 1. **Classes, readonly (solo lectura)**: Crea una clase `Book` con una propiedad de solo lectura `title` que se inicializa en el constructor. Intenta cambiar el valor de `title` fuera del constructor y observa qué sucede.

// class Book {
//   readonly title: string;
//   constructor(title: string) {
//     this.title = title;
//   }
// }
// const nombre = new Book('FIAT');
// nombre.title = 'Porsche'


// 2. **Classes, Constructors (los constructores)**: Define una clase `Car` que tenga un constructor para inicializar las propiedades `make`, `model`, y `year`.

// class Car {
//   make: string;
//   model: string;
//   year: number;

//   constructor(make: string, model: string, year: number) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// }
// const auto = new Car('Ford', 'Mustang', 1970);


// 3. **Classes, super (uso de super en constructores)**: Crea una clase `Animal` con una propiedad `name` y un constructor que la inicialice. Luego, crea una clase `Dog` que herede de `Animal` y que inicialice `name` usando `super`.

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
// }
// const perro = new Dog('Pepito')


// 4. **Classes, Methods (métodos)**: Define una clase `Calculator` que tenga métodos `add`, `subtract`, `multiply`, y `divide`.

// class Calculator{
//   add(a: number, b: number): number {
//     return a + b;
//   }
//   subtract(a: number, b: number): number {
//     return a - b;
//   }
//   multiply(a: number, b: number): number {
//     return a * b;
//   }
//   divide(a: number, b: number): number {
//     if (b === 0) {
//       throw new Error('No divisible en 0');
//     }
//     return a / b;
//   }
//   calcular(): void {
//     const a = 10;
//     const b = 5;
//     console.log(`Add: ${this.add(a,b)}`);
//     console.log(`Subtract: ${this.subtract(a,b)}`);
//     console.log(`Multiply: ${this.multiply(a,b)}`);
//     console.log(`Divide: ${this.divide(a,b)}`);
//   }
// }
// const calc = new Calculator();
// calc.calcular();


// 5. **Classes, Setters y Getters**: Crea una clase `Person` con propiedades privadas `firstName` y `lastName`. Implementa métodos `getter` y `setter` para ambas propiedades.

// class Person {
//   private _firstName: string;
//   private _lastName: string;
//   constructor(firstName: string, lastName: string) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
//   get firstName(): string {
//     return this._firstName;
//   }
//   set firstName(value: string) {
//     this._firstName = value;
//   }
//   get lastName(): string {
//     return this._lastName;
//   }
//   set lastName(value: string) {
//     this._lastName = value;
//   }
// }
// const persona = new Person('Fulano', 'Mengueche')
// console.log(persona.firstName);
// console.log(persona.lastName);


// 6. **Classes, Herencia**: Define una interfaz `Shape` con un método `area`. Luego, crea una clase `Circle` que herede de `Shape` y sobreescriba el método `area` para calcular el área de un círculo.

// interface Shape {
//   area(): number
// }
// class Circle implements Shape {
//   private radius: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }
//   area(): number {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }
// const circle = new Circle(5);
// console.log(circle.area());


// 7. **Classes, extends (extender clases)**: Usa la palabra clave `extends` para crear una clase `Rectangle` que herede de una clase `Shape` base.

// class Shape {
//   base: number;
//   constructor(base: number) {
//     this.base = base;
//   }
//   area(): number {
//     throw new Error('Método no implementado.');
//   }
// }
// class Rectangle extends Shape {
//   private altura: number;
//   constructor(base: number, altura: number) {
//     super(base);
//     this.altura = altura;
//   }
//   area(): number {
//     return this.base * this.altura;
//   }
// }
// const rectangle = new Rectangle(4, 5);
// console.log(rectangle.area());


// 8. **Classes, Sobrecarga**: Implementa una clase `Printer` que tenga un método `print` que pueda aceptar diferentes tipos de parámetros (por ejemplo, `string`, `number`, y `array`).

// class Printer {
//   print(value: string): void;
//   print(value: number): void;
//   print(value: Array<string | number>): void;
//   print(value: string | number | Array<string | number>): void {
//     if (typeof value === 'string') {
//       console.log(`Printing string: ${value}`);
//     } else if (typeof value === 'number') {
//       console.log(`Printing number: ${value}`);
//     } else if (Array.isArray(value)) {
//       console.log('Printing array:');
//       value.forEach(item => console.log(item));
//     }
//   }
// }
// const printer = new Printer();
// printer.print('ola');
// printer.print(123);
// printer.print([1, 'two', 3]);


// 9. **Classes, Orden de inicialización de las clases**: Crea una clase `Base` con una propiedad inicializada en el constructor. Luego, crea una clase `Derived` que herede de `Base` y tenga su propia propiedad inicializada en su constructor. Explica el orden de inicialización de las propiedades.

// class Base {
//   baseProperty: string;
//   constructor() {
//     this.baseProperty = 'Property from Base class';
//     console.log('Base constructor executed');
//   }
// }
// class Derived extends Base {
//   derivedProperty: string;
//   constructor() {
//     super();
//     this.derivedProperty = 'Property from Derived class';
//     console.log('Derived constructor executed');
//   }
// }
// const derivedInstance = new Derived();
// console.log(derivedInstance.baseProperty);
// console.log(derivedInstance.derivedProperty);


// 10. **Classes, Herencia en Built-in Types (tipos nativos)**: Crea una clase `CustomArray` que herede de `Array` y añade un método `last` que devuelve el último elemento del array.

// class CustomArray<T> extends Array<T> {
//   constructor(...args: T[]) {
//     super(...args);
//   }
//   last(): T | undefined {
//     return this[this.length - 1];
//   }
// }
// const myArray = new CustomArray(1, 2, 3, 4, 5);
// console.log(myArray.last());


// 11. **Classes, Visibility, Public (visibilidad pública)**: Define una clase `Employee` con propiedades públicas `name` y `age`, y un método público `getDetails`.

// class Employee {
//   public name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public getDetails(): string {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }
// const employee = new Employee('Pepe Ansioso', 30);
// console.log(employee.getDetails());


// 12. **Classes, Visibility, Protected (visibilidad protegida)**: Crea una clase `Account` con una propiedad protegida `balance` y un método protegido `calculateInterest`.

// class Account {
//   protected balance: number;
//   constructor(initialBalance: number) {
//     this.balance = initialBalance;
//   }
//   protected calculateInterest(rate: number): number {
//     return this.balance * rate;
//   }
// }
// class SavingsAccount extends Account {
//   private interestRate: number;
//   constructor(initialBalance: number, interestRate: number) {
//     super(initialBalance);
//     this.interestRate = interestRate;
//   }
//   public addInterest(): void {
//     const interest = this.calculateInterest(this.interestRate);
//     this.balance += interest;
//   }
//   public getBalance(): number {
//     return this.balance;
//   }
// }
// const mySavings = new SavingsAccount(1000, 0.05);
// mySavings.addInterest();
// console.log(mySavings.getBalance());


// 13. **Classes, Visibility, Private (visibilidad privada)**: Define una clase `BankAccount` con una propiedad privada `accountNumber` y un método privado `generateStatement`.

// class BankAccount {
//   private accountNumber: string;
//   private balance: number;
//   constructor(accountNumber: string, initialBalance: number) {
//     this.accountNumber = accountNumber;
//     this.balance = initialBalance;
//   }
//   private generateStatement(): string {
//     return `Estado de cuenta para número de cuenta: ${this.accountNumber}\nBalance: $${this.balance.toFixed(2)}`;
//   }
//   public getAccountStatement(): string {
//     return this.generateStatement();
//   }
//   public deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }
//   public withdraw(amount: number): void {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//     }
//   }
//   public getBalance(): number {
//     return this.balance;
//   }
// }
// const myBankAccount = new BankAccount('123456789', 5000);
// myBankAccount.deposit(1000);
// myBankAccount.withdraw(500);
// console.log(myBankAccount.getAccountStatement());


// 14. **Classes, Static Members (elementos estáticos)**: Implementa una clase `MathUtils` con un método estático `add` y una propiedad estática `PI`.

// class MathUtils {
//   static PI: number = 3.14159;
//   static add(a: number, b: number): number {
//     return a + b;
//   }
// }
// console.log(MathUtils.PI); // 3.14159
// console.log(MathUtils.add(5, 10)); // 15


// 15. **Classes, Generics (generics dentro de clases)**: Crea una clase `Box<T>` que pueda contener un elemento de cualquier tipo y tenga métodos `getItem` y `setItem`.

// class Box<T> {
//   private item: T;
//   constructor(initialItem: T) {
//     this.item = initialItem;
//   }
//   public getItem(): T {
//     return this.item;
//   }
//   public setItem(newItem: T): void {
//     this.item = newItem;
//   }
// }
// const stringBox = new Box<string>('Hello');
// console.log(stringBox.getItem()); // Hello
// stringBox.setItem('World');
// console.log(stringBox.getItem()); // World
// const numberBox = new Box<number>(123);
// console.log(numberBox.getItem()); // 123
// numberBox.setItem(456);
// console.log(numberBox.getItem()); // 456


// 16. **Classes, this runtime behavior (comportamiento de this en tiempo de ejecución)**: Crea una clase `User` con un método `sayHello` que use `this` para acceder a la propiedad `name`. Luego, llama a `sayHello` en diferentes contextos y observa el comportamiento de `this`.

// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const user = new User('Alice');
// user.sayHello(); // Hello, my name is Alice
// const greet = user.sayHello;
// greet(); // Hello, my name is undefined (en modo estricto) o puede ser el objeto global
// greet.call(user); // Hello, my name is Alice
// const boundGreet = greet.bind(user);
// boundGreet(); // Hello, my name is Alice


// 17. **Classes, Arrow Functions (funciones tipo flecha)**: Define una clase `Timer` que tenga un método que use una función flecha para mantener el contexto de `this` dentro de un `setTimeout`.

// class Timer {
//   public start(): void {
//     console.log('Timer started...');
//     setTimeout(() => {
//       console.log('Timer finished. `this` refers to:', this);
//     }, 1000);
//   }
// }
// const timer = new Timer();
// timer.start(); // después de 1 segundo: Timer finished. `this` refers to: Timer { }


// 18. **Classes, this parameter (el parámetro this)**: Crea una clase `Greeter` con un método `greet` que acepte el parámetro `this` y use `this.name`.

// class Greeter {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet(this: Greeter): void {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const greeter = new Greeter('Alice');
// greeter.greet(); // Hello, my name is Alice


// 19. **Classes, this types (tipos "this")**: Implementa una clase `Fluent` con métodos que devuelvan `this` para permitir el encadenamiento de métodos.

// class Fluent {
//   step1(): this {
//     console.log('Step 1');
//     return this;
//   }
//   step2(): this {
//     console.log('Step 2');
//     return this;
//   }
//   step3(): this {
//     console.log('Step 3');
//     return this;
//   }
// }
// const fluent = new Fluent();
// fluent.step1().step2().step3();
// Step 1
// Step 2
// Step 3


// 20. **Classes, this type guard**: Crea una clase `Shape` con una guardia de tipo (`type guard`) que verifique si una instancia es de un tipo específico usando `this`.

// class Shape {
//   isCircle(this: Shape): this is Circle {
//     return this instanceof Circle;
//   }
// }
// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }
// }
// const shape = new Shape();
// const circle = new Circle(10);
// console.log(shape.isCircle()); // false
// console.log(circle.isCircle()); // true


// 21. **Classes, parameter properties (parámetros como propiedades)**: Define una clase `Movie` que use parámetros como propiedades en su constructor para inicializar `title`, `director`, y `releaseYear`.

// class Movie {
//   constructor(
//     public title: string,
//     public director: string,
//     public releaseYear: number
//   ) {}
// }
// const movie = new Movie('Inception', 'Christopher Nolan', 2010);
// console.log(movie.title); // Inception


// 22. **Classes, Class Expressions (clases como expresiones)**: Define una clase `Animal` usando una expresión de clase y crea una instancia de ella.

// const Animal = class {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   speak(): void {
//     console.log(`${this.name} makes a sound.`);
//   }
// };
// const dog = new Animal('Dog');
// dog.speak(); // Dog makes a sound.


// 23. **Classes, Abstract Classes (clases abstractas)**: Crea una clase abstracta `Vehicle` con un método abstracto `move`. Luego, crea una clase `Car` que herede de `Vehicle` e implemente el método `move`.

// abstract class Vehicle {
//   abstract move(): void;
// }
// class Car extends Vehicle {
//   move(): void {
//     console.log('The car is moving.');
//   }
// }
// const car = new Car();
// car.move(); // The car is moving.


// 24. **Classes, Relationships (relaciones entre clases)**: Define una clase `Library` que contenga una colección de objetos `Book` y un método para añadir libros a la colección.

// class Book {
//   constructor(public title: string, public author: string) {}
// }
// class Library {
//   private books: Book[] = [];
//   addBook(book: Book): void {
//     this.books.push(book);
//   }
//   listBooks(): void {
//     this.books.forEach((book) => {
//       console.log(`Title: ${book.title}, Author: ${book.author}`);
//     });
//   }
// }
// const library = new Library();
// library.addBook(new Book('1984', 'George Orwell'));
// library.addBook(new Book('Brave New World', 'Aldous Huxley'));
// library.listBooks();
// // Title: 1984, Author: George Orwell
// // Title: Brave New World, Author: Aldous Huxley