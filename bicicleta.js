let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado < bicicletaB.rodado ? bicicletaB : bicicletaA;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
