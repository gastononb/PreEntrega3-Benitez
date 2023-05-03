const botonDesplegar = document.getElementById("boton-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonSalirCarrito = document.getElementById("salir-carrito")

botonDesplegar.addEventListener("click", () => {
  contenedorCarrito.classList.toggle("show");
});
botonSalirCarrito.addEventListener("click", ()=>{
    contenedorCarrito.classList.remove("show");
} )