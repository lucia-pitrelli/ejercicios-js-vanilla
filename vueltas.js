let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(numero,acumulador){
    return acumulador + numero
});

console.log(totalVueltas);
