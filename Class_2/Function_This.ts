//Funciones Uso de 'This'

//TypeScript infiere cual será el elemento al cual this hace referencia, por ejemplo:

const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
};
console.log(usuario.admin); //false;
usuario.volverseAdmin();
console.log(usuario.admin); //true;

//Cuando ejecutamos la función volverseAdmin() el valor de admin cambia de false a true.
// Ahora supongamos que en lugar de utilizar una función utilizamos una función tipo flecha.

const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    },
};
console.log(usuario2.admin); //false;
usuario2.volverseAdmin();
console.log(usuario2.admin); //false;

//En este caso this no permite hacer cambios a admin por lo cual el valor false se preserva.

// **Consigna**: Define un objeto `carrito` con propiedades `productos` (un arreglo de strings) y `agregarProducto` (una función que agregue un producto al arreglo). Luego, crea otro objeto `carrito2` con una función flecha en lugar de un método, y observa la diferencia en el comportamiento de `this`.

const carrito = {
  productos: ['gaseosas', 'harinas', 'caramelos'],
  agregarProducto(producto: string){
    this.productos.push(producto);
  }
};
console.log(carrito.productos);
carrito.agregarProducto ('carnes');
console.log(carrito.productos);
const carrito2 = {
  productos: ['gaseosas', 'harinas', 'caramelos'],
  agregarProducto: (producto: string) => {
    this.productos.push(producto);
  }
};
console.log(carrito2.productos);
carrito2.agregarProducto('pollo');
console.log(carrito2.productos);