function calcularMediaAritmetica(lista) {

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);
    
const promedioLista = sumaLista / lista.length
    
return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana (listaNumeros) {
    var numerosOdernados = listaNumeros.sort(function(a,b) {
        return a - b;
    });

    const mitadLista1 = parseInt(numerosOdernados.length / 2);

    let mediana;

    if (esPar(numerosOdernados.length)) {
        const elemento1 = numerosOdernados[mitadLista1 - 1];
        const elemento2 = numerosOdernados[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
    ])
    
    mediana = promedioElemento1y2;
    } else {
        mediana = numerosOdernados[mitadLista1];
    }

    return mediana;
}