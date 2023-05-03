let contenedorTortas = [
    new Torta("Lemon Pie", 1 , 3000, "../img/img-torta1.jpg"),
    new Torta("Chocotorta", 2 , 3000,"../img/img-torta2.jpg" ),
    new Torta("Cheesecake clasico", 3 , 3000, "../img/img-torta3.jpg" ),
    new Torta("Chocopie", 4 , 3000, "../img/img-torta4.jpg" ),
    new Torta("Mousse Rosalba", 5 , 3000, "../img/img-torta5.jpg" ),
    new Torta("Key Lime Pie", 6 , 3000, "../img/img-torta6.jpeg" ),
    new Torta("Brownie Italiano", 7 , 3000, "../img/img-torta7.jpeg" ) ,
    new Torta("Torta Bruce", 8 , 3000, "../img/img-torta8.jpeg" ),
    new Torta("Cheescake especial", 9, 3000, "../img/img-torta9.jpeg" ),
    new Torta("Bruna", 10 , 3000, "../img/img-torta10.jpeg" ),
    new Torta("Carrot Cake", 11 , 3000, "../img/img-torta11.jpeg" ),
    new Torta("Banoffee", 12, 3000, "../img/img-torta12.jpeg" )

];
// variables
let carrito = [];
const DOMCartas = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carritoItems');
const DOMtotal = document.querySelector('#carritoTotal');
const DOMbotonPagar = document.querySelector('#pagar-boton')
let signoPeso = "$"
const miLocalStorage = window.localStorage;

// muestro mis productos con DOM
function mostarTortas() {
    contenedorTortas.forEach((torta)=>{
        const cartaTorta = document.createElement('div');
                    cartaTorta.classList.add('card','cartas' );
                    // div
                    const cartaDiv = document.createElement('div');
                    cartaDiv.classList.add('card-body');
                    // Titulo
                    const cartaTitulo = document.createElement('h5');
                    cartaTitulo.classList.add('card-title');
                    cartaTitulo.textContent = torta.nombre;
                    // Imagen
                    const cartaImg = document.createElement('img');
                    cartaImg.classList.add('img-fluid');
                    cartaImg.setAttribute('src', torta.img);
                    // Precio
                    const cartaPrecio = document.createElement('p');
                    cartaPrecio.classList.add('card-text');
                    cartaPrecio.textContent = `${signoPeso}${torta.precio}`;
                    // Boton 
                    const cartaBoton = document.createElement('button');
                    cartaBoton.classList.add('btn', 'btn-primary','boton-agregar-carrito');
                    cartaBoton.textContent = 'Agregar al carrito';
                    cartaBoton.setAttribute('marcador', torta.id);
                    cartaBoton.addEventListener('click', cargarItemsAlCarrito);
                    // aplicar
                    cartaDiv.appendChild(cartaImg);
                    cartaDiv.appendChild(cartaTitulo);
                    cartaDiv.appendChild(cartaPrecio);
                    cartaDiv.appendChild(cartaBoton);
                    cartaTorta.appendChild(cartaDiv);
                    DOMCartas.appendChild(cartaTorta)
    })
    
}
function cargarItemsAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));
    MostrarCarrito();
    
}
// mostramos lo cargado en el carrito
function MostrarCarrito(){
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    

    carritoSinDuplicados.forEach((item) => {
        
        const miItem = contenedorTortas.filter((torta) => {
            return torta.id === parseInt(item);
        });
        
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const carritoTorta = document.createElement('li');
        carritoTorta.classList.add('list-group-item', 'text-right', 'mx-2');
        carritoTorta.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${signoPeso}`;
        
        const botonBorrar = document.createElement('button');
        botonBorrar.classList.add('btn', 'mx-5','boton-agregar-carrito');
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
// calcular total
function calcularTotal() {
     
    return carrito.reduce((total, item) => {
        
        const miItem = contenedorTortas.filter((torta) => {
            return torta.id === parseInt(item);
        });
    
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}
// borrar elemento item del carrito
function borrarItemCarrito(evento) {
    
    const id = evento.target.dataset.item;
   
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    MostrarCarrito();
    
    guardarCarritoEnLocalStorage();

}
// guardar carrito en el localStorage
function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}
// cargar carrito del localStorage
function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}
function vaciarCarrito() {
    carrito = [];
    MostrarCarrito();
    localStorage.clear();
}

function pagar(){
vaciarCarrito();
const mensaje = document.createElement('h4')
mensaje.textContent= "Muchas gracias por su compra!" 
DOMcarrito.appendChild(mensaje)
}
DOMbotonPagar.addEventListener('click', pagar);
// estructura
cargarCarritoDeLocalStorage();
MostrarCarrito()
mostarTortas();



