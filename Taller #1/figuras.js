// Codigo del cuadrado

console.group("Cuadrado");

const ladoCuadraro = 6;
console.log("Los lados del cuadrado miden: " + ladoCuadraro + "cm");

function perimetroCuadrado(lado) {

  return lado * 4;

}

console.log("El perímetro del cuadrado es: " 
  + perimetroCuadrado(ladoCuadraro) 
  + "cm"
);

function areaCuadrado(lado) {
  return lado * lado;
}

console.log("El área del cuadrado es: "
  + areaCuadrado(ladoCuadraro)
  + "cm²"
);

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo son: "
  + ladoTriangulo1 
  + "cm, " 
  + ladoTriangulo2 
  + "cm, " 
  + baseTriangulo 
  + "cm."
);

console.log("La altura del triángulo es de: "
  + alturaTriangulo 
  + "cm."
);

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
};

console.log("El perímetro del triángulo es: "
  + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
  + "cm."
);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.log("El área del triángulo es: "
  + areaTriangulo(baseTriangulo, alturaTriangulo)
  + "cm²."
);

console.groupEnd();

// Código del círculo

console.group("Círculo");

const radioCirculo = 4;
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

console.log("El radio del círculo es: " + radioCirculo + "cm.");
console.log("El valor de PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return Math.round(diametro * PI);
}

console.log("El perímetro del círculo es: " + perimetroCirculo(radioCirculo) + "cm.");

function areaCirculo(radio) {
  return Math.round(PI * radio * radio);
}
console.log("El área del círculo es: " + areaCirculo(radioCirculo) + "cm².");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularCuadrado() {
  const ladosCuadrado = document.getElementById("ladosCuadrados").value;
  const Perimetro = document.getElementById("Cuadrado_perimetro");
  const Area = document.getElementById("Cuadrado_area");

  Perimetro.innerHTML = perimetroCuadrado(ladosCuadrado) + " cm";
  Area.innerHTML = areaCuadrado(ladosCuadrado) + " cm<sup>2</sup>";
}

function calcularAltura(lado, base) {
  return Math.sqrt(lado**2 + (base**2)/4);
}

function calcularTriangulo() {
  const ladoA = Number(document.getElementById("ladoA").value);
  const base = Number(document.getElementById("base").value);
  const altura = calcularAltura(ladoA, base); 
  const Perimetro = document.getElementById("Triangulo_perimetro");
  const Area = document.getElementById("Triangulo_area");

  Perimetro.innerHTML = perimetroTriangulo(ladoA, ladoA, base) + " cm";
  Area.innerHTML = (areaTriangulo(base, altura)).toFixed(2) + " cm<sup>2</sup>";
}

function calcularCirculo(){
  const radio = document.getElementById("radio").value;
  const Perimetro = document.getElementById("Circunsferencia");
  const Area = document.getElementById("Circulo_area");

  Perimetro.innerHTML = perimetroCirculo(radio) + " cm";
  Area.innerHTML = areaCirculo(radio) + " cm<sup>2</sup>";

}
