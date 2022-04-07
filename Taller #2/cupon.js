function calcularPrecioConDescuento(precio, descuento) {
  return precio * (1 - (descuento / 100))
}

function Calcular() {
  const precio = document.getElementById("inputPrecio").value;
  const inputCupon = document.getElementById("inputCupon").value;
  const resultP = document.getElementById("resultadoPrecio");

  const cupones = [
    { nombre: 'PLATZI10',
      descuento: 10, },
    { nombre: 'PLATZI20',
      descuento: 20, },
    { nombre: 'PLATZI30',
      descuento: 30, },
  ];

  /* Verifico si el cupón es válido */
  const esCuponValido = function(valorCupon) {
    return valorCupon.nombre === inputCupon;
  };

const cuponUsuario = cupones.find(esCuponValido);

  if(!cuponUsuario) {
    resultP.innerHTML = "El cupón no es válido";
  }
  else {
    const descuento = cuponUsuario.descuento;
    const precioFinal = calcularPrecioConDescuento(precio, descuento);

    resultP.innerHTML = "El precio con el descuento es $" + precioFinal;
  }
}
