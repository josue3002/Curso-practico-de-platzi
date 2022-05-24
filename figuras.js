// Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area);
}

//Codigo del triangulo

console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.log ("El area del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
   
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
   
    const base = document.getElementById("inputBase");
    const value3 = Number(base.value);
   
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    var input = document.getElementById("inputBase");
    const base = input.value;
   
    var input = document.getElementById("inputAltura");
    const altura = input.value;
   
    const area = areaTriangulo(base, altura);
    alert("El area del triangulo es: " + area);
}

// Código del círculo

console.group("Círculos");

//Diametro

function diametroCirculo(radio) {
    return radio * 2;
}

//PI

const PI = Math.PI;
console.log ("El PI del círculo es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo1");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo1");
    const value = input.value;

    const area = areaCirculo(value);
    alert ("El area del circulo es: " + area);
}