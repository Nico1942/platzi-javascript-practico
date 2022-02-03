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

