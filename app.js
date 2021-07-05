
//Mostrar catalogo de productos por el Alert

let bienvenida = alert ("¡Bienvenido a mi tienda, la tienda mateoshop! puede ver el listado de productos a través de la consola o uno por uno por el alert");


class Producto{
    constructor(titulo,precio){
        this.titulo = titulo;
        this.precio = precio;
    }
    catalogo(){
    alert("Este es el catalogo "+ this.titulo + " $"+ this.precio); 
    };
}

const Producto1 = new Producto ("Buzo Nike", 4000);
const Producto2 = new Producto ("Pantalon Sport", 2500);
const Producto3 = new Producto ("Pantalon Sport", 2500);
const Producto4 = new Producto ("Zapatillas Nike", 15000);
const Producto5 = new Producto ("Medias Nike", 3230);
const Producto6 = new Producto ("Campera Sport", 1000);
const Producto7 = new Producto ("Ojotas Sport", 700);

const Productos = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6, Producto7];


//Por consola
for (i=0 ; i<Productos.length; i++) {
console.log(Productos[i]);
}


//Por alert
Producto1.catalogo();
Producto2.catalogo();
Producto3.catalogo();
Producto4.catalogo();
Producto5.catalogo();
Producto6.catalogo();
Producto7.catalogo();




