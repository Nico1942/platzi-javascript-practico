
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
//  precioOriginal,
//  descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento,
//});

function calcularPrecioConDescuento(precio, descuento) {
  return precio * (1 - (descuento / 100))
}

function Calcular() {
  const precio = document.getElementById("inputPrecio").value;
  const descuento = document.getElementById("inputDescuento").value;
  const resultP = document.getElementById("resultadoPrecio");

  const resultado = calcularPrecioConDescuento(precio, descuento);

 resultP.innerHTML = "Precio final: $" + resultado;
}
