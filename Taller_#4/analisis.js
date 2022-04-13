const salariosUy = uruguay.map(
  function(personita) {
    return personita.salario;
  }
);

const salariosUyOrdenados = salariosUy.sort(
  function(salarioA, salarioB) {
    return salarioA - salarioB
  }
);

// Funciones auxiliares

function esPar(numero) {
  return (numero % 2 === 0);
}

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

// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const mitad1 = lista[mitad - 1];
    const mitad2 = lista[mitad];
    
    const mediana = calcularPromedio([mitad1, mitad2]);
    return mediana;

  }
  else {
    const mediana = lista[mitad];
    return mediana;
  }
}

const medianaSalariosUy = medianaSalarios(salariosUyOrdenados);

// Mediana del Top 10%
const salariosStart = parseInt(salariosUyOrdenados.length * 0.10) * -1;
const salariosUyTop10 = salariosUyOrdenados.slice(salariosStart);

const medianaTop10Uy = medianaSalarios(salariosUyTop10);




console.group("Salarios");
console.log("Mediana salarios: " + medianaSalariosUy);
console.log("Mediana Top 10%: " + medianaTop10Uy);
console.groupEnd();


