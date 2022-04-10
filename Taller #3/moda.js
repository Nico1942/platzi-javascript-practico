function calcularModa(lista) {

  const listaCount = {};
  
  lista.map(
    function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] +=1;
      }
      else {
        listaCount[elemento] = 1;
      }
    }
  );
  
  // Me devuelve un objeto, listaCount con las cantidades
  // de veces que se repite el número en el array
  // Ej.: { "1": 2, "2": 4, "3": 1,}
  //
  // Ahora hay que elegir el que se repite más veces y ese será la moda.
  // Pero debemos transformar el objeto en una nueva lista (array)
  
  const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );

  // La moda será el último elemento del array ordenado
  // (y lo saco de la lista ordenada)

  let moda = [];
  moda.unshift(listaArray.pop());
  // Utilizo este truco con unshift ya que si no lo coloco el array moda 
  // queda como un array de dos elementos
  //
  // ej. moda = ["2", 2]
  //
  // En cambio con el unshift queda: 
  // 
  // moda = [["2", 2],]
  //
  // y así puedo agregarle más elementos como array

  // Recorro el nuevo array para saber si hay más de 1 elemento que sea moda

  const elementoMasRepeticiones = moda[0][1];

  while (listaArray.length > 0) {
    let ultimoListaOrdenada = listaArray[listaArray.length -1];

    // Si las repeticiones del último es igual al que ya tengo como moda, lo agrego
    // a moda y lo saco del array ordenado
    // sino, dejo de recorrer el array ya que las demás repeticiones serán menores.

    if (elementoMasRepeticiones === ultimoListaOrdenada[1]) {
      moda.unshift(ultimoListaOrdenada);
      listaArray.pop();
    }
    else {
      break;
    }
  }

  // Si listaArray se quedó sin elementos, significa que todos los elementos
  // se repiten en igual cantidad, por lo tanto no hay moda
  if (listaArray.length === 0) {
    console.log("No hay moda");
  }
  else {
    return moda
  }
}
