
// variables para mostrar el carrito

let carrito = [];

const DOMcarrito = document.querySelector('#carrito-items');
const DOMtotal = document.querySelector('#carrito-total');
const DOMbotonPagar = document.querySelector('#pagar-boton')
const miLocalStorage = window.localStorage;
// mouestro lo cargado en el carrito
function MostrarCarrito() {
  DOMcarrito.textContent = '';
  // aseguro que el carrito no tenga elementos que se repitan
  const carritoSinRepetidos = [...new Set(carrito)];


  carritoSinRepetidos.forEach((item) => {

    const miItem = contenedorTortas.filter((torta) => {
      return torta.id === parseInt(item);
    });

    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? total += 1 : total;
    }, 0);

    const carritoTorta = document.createElement('li');
    carritoTorta.classList.add('list-group-item', 'text-right', 'mx-2');
    carritoTorta.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;

    const botonBorrar = document.createElement('button');
    botonBorrar.classList.add('btn', 'pagar-boton',);
    botonBorrar.textContent = 'X';
    botonBorrar.style.marginLeft = '1rem';
    botonBorrar.dataset.item = item;
    botonBorrar.addEventListener('click', borrarItemCarrito);

    carritoTorta.appendChild(botonBorrar);
    DOMcarrito.appendChild(carritoTorta);
  });

  DOMtotal.textContent = calcularTotal();
  guardarCarritoEnLocalStorage();
}
// borro elemento item del carrito
function borrarItemCarrito(evento) {

  const id = evento.target.dataset.item;

  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });

  MostrarCarrito();

  guardarCarritoEnLocalStorage();

}
// calcula total
function calcularTotal() {

  return carrito.reduce((total, item) => {

    const miItem = contenedorTortas.filter((torta) => {
      return torta.id === parseInt(item);
    });

    return total + miItem[0].precio;
  }, 0).toFixed(2);
}

// guarda carrito en el localStorage
function guardarCarritoEnLocalStorage() {
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}
// carga carrito del localStorage
function cargarCarritoDeLocalStorage() {
  if (miLocalStorage.getItem('carrito') !== null) {
    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}
// vacia el carrito
function vaciarCarrito() {
  carrito = [];
  MostrarCarrito();
  localStorage.clear();
}
// simula compra
function pagar() {
  vaciarCarrito();
  const mensaje = document.createElement('h4')
  mensaje.textContent = "Muchas gracias por su compra!"
  DOMcarrito.appendChild(mensaje)
}
// variables para desplegar el carrito
const botonDesplegar = document.getElementById("boton-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const botonSalirCarrito = document.getElementById("salir-carrito")
// despliega el carrito
botonDesplegar.addEventListener("click", () => {
  contenedorCarrito.classList.toggle("show");
});
botonSalirCarrito.addEventListener("click", () => {
  contenedorCarrito.classList.remove("show");
})
// estructura
DOMbotonPagar.addEventListener('click', pagar);
cargarCarritoDeLocalStorage();
MostrarCarrito();
