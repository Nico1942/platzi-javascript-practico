function calcularPromedio(lista) {

  /* Calculando la suma con el método reduce() */

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function calcularMediana(lista) {

  let mediana

  listaOrdenada = lista.sort( function (a, b) {
    return a - b;
  }
);

  const mitadLista = parseInt(lista.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}


if (esPar(lista.length)) {
  const elemento1 = listaOrdenada[mitadLista];
  const elemento2 = listaOrdenada[mitadLista - 1];

  const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);

  mediana = promedioElemento1y2;

}
else {
  mediana = listaOrdenada[mitadLista];
}

return mediana;

} // fin calcularMediana
