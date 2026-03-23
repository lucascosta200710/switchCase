console.log ("Bem-vindo à calculadora de consumo de combustível.")

let nome = prompt("Insira seu nome, motorista: ")
let combustivel = Number(prompt ("Insira seu combustível (1 - Gasolina, 2 - Etanol, 3 - Diesel): "))
let distancia = prompt ("Insira a distância percorrida em km: ")
let lAbastecidos = prompt ("Insira os litros abastecidos: ")
let consumoEsperado = 0.0
let consumoReal = (distancia/lAbastecidos)
switch (combustivel) {

    case 1 :
        consumoEsperado = 12.0
        break;
    case 2 :
        consumoEsperado = 8.5
        break; 
    case 3 : 
        consumoEsperado = 15.0
        break;
    default:
        console.log ("Combustível inválido.")
        break;

}
