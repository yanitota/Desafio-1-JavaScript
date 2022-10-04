class Productos {
    constructor(codigo, producto, precio) {
        this.codigo = codigo;
        this.producto = producto;
        this.precio = parseFloat(precio);
    }
}


let Producto = prompt("Ingresa el codigo del producto");
this.mostrarProducto = function () {
    console.log("El codigo del producto es: " + this.codigo + " " + this.producto + "el precio es " + this.precio);
}

const prod1 = new Productos(01, "Platos Tosti", "700");
const prod2 = new Productos(02, "Mates", "550");
const prod3 = new Productos(03, "Set taza con bandeja", "1400");
const prod4 = new Productos(04, "Tazas", "800");
const prod5 = new Productos(05, "Tazones", "800");
const prod6 = new Productos(06, "Cerealeras", "650");