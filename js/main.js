const contenedorTortas = [
    new Torta("Lemon Pie", 1, 3000, "../img/img-torta1.jpg"),
    new Torta("Chocotorta", 2, 3000, "../img/img-torta2.jpg"),
    new Torta("Cheesecake clasico", 3, 3000, "../img/img-torta3.jpg"),
    new Torta("Chocopie", 4, 3000, "../img/img-torta4.jpg"),
    new Torta("Mousse Rosalba", 5, 3000, "../img/img-torta5.jpg"),
    new Torta("Key Lime Pie", 6, 3000, "../img/img-torta6.jpeg"),
    new Torta("Brownie Italiano", 7, 3000, "../img/img-torta7.jpeg"),
    new Torta("Torta Bruce", 8, 3000, "../img/img-torta8.jpeg"),
    new Torta("Cheescake Especial", 9, 3000, "../img/img-torta9.jpeg"),
    new Torta("Tarta Tofi", 10, 3000, "../img/img-torta10.jpeg"),
    new Torta("Carrot Cake", 11, 3000, "../img/img-torta11.jpeg"),
    new Torta("Banoffee", 12, 3000, "../img/img-torta12.jpeg")

];

const DOMcartas = document.querySelector('#items');
const DOMrecetas = document.querySelector('#div-recetas');


// muestro mis productos con DOM
function mostarTortas() {
    contenedorTortas.forEach((torta) => {
        const cartaTorta = document.createElement('div');
        cartaTorta.classList.add('card', 'cartas');
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
        cartaPrecio.textContent = `$${torta.precio}`;
        // Boton agregar carrito
        const cartaBoton = document.createElement('button');
        cartaBoton.classList.add('btn', 'btn-primary', 'boton-agregar-carrito');
        cartaBoton.textContent = 'Agregar al carrito';
        cartaBoton.setAttribute('marcador', torta.id);
        cartaBoton.addEventListener('click', cargarItemsAlCarrito);
        // boton recetas
        const botonRecetas = document.createElement('button')
        botonRecetas.classList.add('btn', 'btn-primary', 'boton-agregar-carrito', 'boton-receta');
        botonRecetas.textContent = 'Receta';
        botonRecetas.setAttribute('marcador', torta.id);
        botonRecetas.addEventListener('click', traerReceta);
        botonRecetas.addEventListener('click', desplegarRecetas);
        // aplico
        cartaDiv.appendChild(cartaImg);
        cartaDiv.appendChild(cartaTitulo);
        cartaDiv.appendChild(cartaPrecio);
        cartaDiv.appendChild(cartaBoton);
        cartaDiv.appendChild(botonRecetas);
        cartaTorta.appendChild(cartaDiv);
        DOMcartas.appendChild(cartaTorta);
    })

}

// cargo los items al carrito
function cargarItemsAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));
    avisoTorta();
    MostrarCarrito();

}

// aviso de producto argegado
function avisoTorta() {
    Toastify({
        text: "Has agregado un producto al carrito",
        duration: 1500,
        newWindow: true,
        gravity: "top",
        position: 'center',
        style: {
            background: "rgb(254, 182, 205)",
            color: "black",
        }
    }).showToast();

}

// trae todas las recetas y las filtra por el id
function traerReceta(evento) {
    let idTorta = evento.target.getAttribute('marcador');
    let contenedorRecetas = [];
    fetch("./../data_recetas/recetas.json")
        .then(response => response.json())
        .then(data => {
            contenedorRecetas = data;
            let recetaSeleccionada = recorrerArrayId(contenedorRecetas, idTorta)
            mostrarReceta(recetaSeleccionada);

        })
        .catch((error) => {
            alert("lo siento a ocurrido un error, vuelve a intentarlo mas tarde")
        });



}
// muestro las tortas en el DOM
function mostrarReceta(receta) {
    const divTitulo = document.createElement('div')
    divTitulo.classList.add('titulo-receta');
    const tituloReceta = document.createElement('h3');
      tituloReceta.textContent = receta.nombre;
    const botonBorrar = document.createElement('button');
      botonBorrar.classList.add('btn','boton-receta');
      botonBorrar.textContent = 'X';
      botonBorrar.addEventListener('click', redesplegarReceta);
    const tituloIngredientes = document.createElement('h4');
      tituloIngredientes.textContent = "Ingredientes"
    const listaIngredientes = crearLista(receta.ingredientes);
    const tituloPasos = document.createElement('h4');
      tituloPasos.textContent = "Pasos a seguir"
    const listaPasos = crearLista(receta.pasos);

    // aseguro que el dom este vacio
    while (DOMrecetas.firstChild) {
        DOMrecetas.removeChild(DOMrecetas.firstChild);
    }

    divTitulo.appendChild(tituloReceta);
    divTitulo.appendChild(botonBorrar);
    DOMrecetas.appendChild(divTitulo)
    DOMrecetas.appendChild(tituloIngredientes);
    DOMrecetas.appendChild(listaIngredientes);
    DOMrecetas.appendChild(tituloPasos)
    DOMrecetas.appendChild(listaPasos);
}
//   busca un objeto en un array por su id
function recorrerArrayId(array, id) {
    return array.find(objeto => objeto.id == id);
}
//   creo una lista con atributos de un objeto
function crearLista(objeto) {
    const listaObjeto = document.createElement('ul');

    for (const item in objeto) {
        const contenidoLista = document.createElement('li');
        contenidoLista.textContent = objeto[item];
        listaObjeto.appendChild(contenidoLista);
    }

    return listaObjeto;
}
// desplegamos el div recetas
function desplegarRecetas() {
    const divRecetas = document.getElementById("div-recetas");

    divRecetas.classList.toggle("show");

}
// redesplegamos las recetas
function redesplegarReceta() {
    const divRecetas = document.getElementById("div-recetas");
    divRecetas.classList.remove("show");
}

// estructura

mostarTortas();



