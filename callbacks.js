function doble(numero){
    return numero * 2;
}

function triple(numero){
    return numero * 3;
}

function aplicarCallback(numero, doble){
    return doble(numero); 
}

function aplicarCallback (numero, triple){
    return triple(numero);
}

console.log(aplicarCallback(4,doble));
console.log(aplicarCallback(4,triple));