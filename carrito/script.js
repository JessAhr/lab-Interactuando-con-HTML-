let totalItems = 0;
let totalPrecio = 0;
let productosAgregados = [];

function agregarAlCarrito(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosAgregados.push(nombre);

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  console.log("Productos en el carrito:", productosAgregados);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosAgregados = [];

  document.getElementById("total-items").textContent = "0";
  document.getElementById("total-precio").textContent = "0";

  alert("Carrito vaciado");
}
