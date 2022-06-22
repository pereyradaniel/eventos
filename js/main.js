const carritoDeCompras = [];

const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");

const selectCategoria = document.getElementById("selectCategoria");

//Filtro de búsqueda
selectCategoria.addEventListener("change", () => {
  if (selectCategoria.value == "Todos") {
    mostrarProductos(stockProductos);
  } else {
    let arrayNuevo = stockProductos.filter(
      (item) => item.categoria == selectCategoria.value
    );
    mostrarProductos(arrayNuevo);
  }
});

// Mostrar Productos

mostrarProductos(stockProductos);

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";
  array.forEach((el) => {
    let div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${el.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${el.producto}</h5>
            <h6>Precio $${el.precio}</h6>
            <p class="card-text">${el.marca}</p>
            <a href="#" class="btn btn-light btn-estilo"><i class="fa-solid fa-cart-arrow-down"></i> Agregar al Carrito</a>
        </div>
    </div> `;

    contenedorProductos.appendChild(div);
  });
}
