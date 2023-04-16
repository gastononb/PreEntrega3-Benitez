// clases
class Tortas{
    constructor(nombre, ingrediente1, ingrediente2, ingrediente3){
        this.nombre = nombre;
        this.ingrediente1 = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingrediente3 = ingrediente3;
        this.precio = 1000;
    }
    calcularDescuento(){
     return this.precio*0.9;
    }
    descripcionTortas() {
        console.log("Genial! has hecho una torta " + this.nombre + " de " + this.ingrediente1 + ", " + this.ingrediente2 + " y " + this.ingrediente3 + " valor " + this.precio);
    }
    }

// funciones
function validarNombre() {
    let nombre = prompt("cual es el nombre de esta torta?");
 while (nombre == "" || nombre == null) {
    alert("lo siento debes ingresar un nombre");
    nombre = prompt("Porfavor ingrese un nombre valido");
}
return nombre;
}

function validarIngrediente() {
        let ingrediente = prompt("Porfavor ingrese un ingrediente");
     while (ingrediente == "" || ingrediente == null) {
        alert("lo siento debes ingresar un ingrediente");
        ingrediente = prompt("Porfavor ingrese un ingrediente valido");
    }
    return ingrediente;
}
function cargarTortas(){
        let nombreTorta = validarNombre();
        let ingrediente1 = validarIngrediente();
        let ingrediente2 = validarIngrediente();
        let ingrediente3 = validarIngrediente();
        objetoTorta = new Tortas(nombreTorta, ingrediente1, ingrediente2, ingrediente3);
        contenedorTortas.push(objetoTorta);

      
}
function validarCantidad() {
    let cantidadTorta = parseInt(prompt("Cuantas tortas deseas preparar?"));
    while (cantidadTorta <= 0) {
        alert("porfavor ingrese una cantidad valida")
        cantidadTorta = parseInt(prompt("Cuantas tortas deseas preparar?"));
    }
    return cantidadTorta;
}


// titulo
console.log("Bienvenido a nuestra pagina de tortas!");
alert("Bienvenido a nuestra pagina de tortas!");
alert("Pongamos manos a la obra y preparemos tortas con 3 ingredientes!");
// estructura
let contenedorTortas = [];
let cantidadTortas = validarCantidad();
for (let i = 0; i < cantidadTortas; i++) {
    cargarTortas();
    }
contenedorTortas.forEach(torta => {
    torta.descripcionTortas();
});
alert("Perfecto! has hecho " + cantidadTortas + " torta/s con un valor individual de $1000")
let descuento = prompt("Para acceder a un 10% de descuento ingrese el cupon 'DESCUENTO'")
if(descuento.toUpperCase() == "DESCUENTO") {
    let totalDescuento = contenedorTortas.reduce((acumulador, actual)=> acumulador + actual.calcularDescuento(), 0)
    alert("el total es de: $" + totalDescuento);
}else{
    let totalSinDescuento = contenedorTortas.reduce((acumulador, actual)=> acumulador + actual.precio, 0)
    alert("el total es de: $" + totalSinDescuento);
}





