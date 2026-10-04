document.addEventListener("DOMContentLoaded", function () {

    // MAPS
    const mapa = document.getElementById("linkMapa");

    if (mapa) {

        mapa.addEventListener("click", function (e) {

            let confirmar = confirm("Vas a salir de la página para abrir Google Maps. ¿Deseas continuar?");

            if (!confirmar) {
                e.preventDefault();
            }

        });

    }

    const formulario = document.getElementById("formCompra");

if (formulario) {

    formulario.addEventListener("submit", function () {

        alert("Tu pedido ha sido enviado");

    });

}

    const params = new URLSearchParams(window.location.search);

    const nombre = params.get("nombre");
    const precio = params.get("precio");
    const img = params.get("img");
    const colores = params.get("colores");
    const talla = params.get("Talla");
    const desc = params.get("desc");

    const nombreEl = document.getElementById("nombre");
    const precioEl = document.getElementById("precio");
    const imagenEl = document.getElementById("imagen");
    const tallaEl = document.getElementById("Talla");
    const descEl = document.getElementById("descripcion");

    if (nombreEl && nombre) {
        nombreEl.textContent = nombre;
    }

    if (precioEl && precio) {
        precioEl.textContent = "$" + precio + " MXN";
    }

    if (imagenEl && img) {
        imagenEl.src = img;
    }

    if (descEl && desc) {
        descEl.textContent = desc;
    }

    if (tallaEl && talla) {
        tallaEl.textContent = "Tallas disponibles: " + talla;
    }

    const contenedor = document.getElementById("coloresContainer");

    if (contenedor && colores) {

        const listaColores = colores.split(",");

        contenedor.innerHTML = "<h4>Colores disponibles:</h4>";

        listaColores.forEach(color => {

            const span = document.createElement("span");

            span.textContent = color;

            span.style.margin = "5px";
            span.style.padding = "5px 10px";
            span.style.border = "1px solid #ccc";
            span.style.borderRadius = "8px";
            span.style.display = "inline-block";

            contenedor.appendChild(span);

        });

    }

    const botonCarrito = document.getElementById("agregarCarrito");

    if (botonCarrito) {

        botonCarrito.addEventListener("click", function () {

            const producto = {
                nombre: nombre,
                precio: precio,
                img: img
            };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.push(producto);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Producto agregado a Favoritos");

        });

    }

});