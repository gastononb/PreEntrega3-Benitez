// funciones
function cargarIngredientes(ingrediente1, ingrediente2, ingrediente3) {
    console.log("Genial! has elegido " + ingrediente1 + " como primer ingrediente");
    console.log("Genial! has elegido " + ingrediente2 + " como segundo ingrediente");
    console.log("Genial! has elegido " + ingrediente3 + " como tercer ingrediente");
    alert("Perfecto! tu torta tiene los siguientes ingredientes: " + ingrediente1 + ", " + ingrediente2+ " y " + ingrediente3)
}
function validarIngrediente(){
   let ingrediente =prompt("Porfavor ingrese un ingrediente");
while(ingrediente == "" || ingrediente== null){
    alert("lo siento debes ingresar un ingrediente"); 
   ingrediente = prompt("Porfavor ingrese un ingrediente valido");
}
return ingrediente;
}
function descripcionTortas(){
  console.log("torta de " + ingrediente1 + ", " + ingrediente2+ " y " + ingrediente3+ " valor $1000");
}
function valorTorta(cantidadTortas) {
    return cantidadTortas * 1000;
}
function calcularDescuento(){
   return valorTorta(cantidadTortas) * 0.9;
}
// titulo
console.log("Bienvenido a nuestra pagina de tortas!");
alert("Bienvenido a nuestra pagina de tortas!");
alert("Pongamos manos a la obra y preparemos una torta!");
// estructura
let ingrediente1 =validarIngrediente();
let ingrediente2 =validarIngrediente();
let ingrediente3 =validarIngrediente();


cargarIngredientes(ingrediente1,ingrediente2, ingrediente3);
// valor de las tortas
let cantidadTortas= parseInt(prompt("El valor de cada torta es de $1000, cuantas quiere?"));

for (let i = 0; i < cantidadTortas; i++) {
    descripcionTortas();
    }


let descuento = prompt("Para acceder a un 10% de descuento ingrese el cupon 'DESCUENTO'") 
if (descuento.toUpperCase() == "DESCUENTO") {
    alert("El valor total de las tortas son $".concat( calcularDescuento()));
}else{
    alert("El valor total de las tortas son $".concat( valorTorta(cantidadTortas)));
}
