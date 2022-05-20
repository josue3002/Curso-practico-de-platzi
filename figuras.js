// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log ("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triangulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log (
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo = 5.5;
console.log ("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El area del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo

console.group("Círculos");

//Radio

const radioCirculo = 4;
console.log ("El radio del círculo es: " + radioCirculo + "cm");

//Diametro

const diametroCirculo = radioCirculo * 2;
console.log ("El diametro del círculo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log ("El PI del círculo es: " + PI);

//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log ("El perimetro del círculo es: " + perimetroCirculo + "cm");

//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log ("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();