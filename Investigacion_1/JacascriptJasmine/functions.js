

function fibonacci(n){

    if(n === 1){
        return [0, 1];
    }
    else{
        var solucion = fibonacci(n - 1);
        solucion.push(solucion[solucion.length - 1] + solucion[solucion.length - 2]);
        return solucion;
    }
}
function esPrimo(numero){
    for (let i = 2; i < numero; i++)
        if (numero % 1 == 0) return false;
    return numero !== 1 && numero !== 0; 
}
function esPar(numero){
    return numero % 2 == 0;
}
function esImpar(numero){
    return Math.abs(numero % 2 ) == 1;
}

module.exports = {
    fibonacci: fibonacci,
    esPrimo: esPrimo,
    esPar: esPar,
    esImpar: esImpar
}