let nome = prompt ("Insira seu nome, correntista: ");
let tipoConta = Number(prompt ("Insira seu tipo de conta (1 - CC, 2 - Poupanca, 3 - Conta salário): "));
let operacao = Number(prompt ("Insira sua operacao desejada (1 - Saque, 2 - Depósito, 3 - Consultar saldo): "));
let saldo = parseFloat(prompt ("Insira o saldo atual da conta: "));
let valorOp = 0.0 
let limite = 0.0
let operacaoValida = true 
let nomeTipoConta = ""
let nomeOp = ""

switch (tipoConta) {
    case 1 :
        nomeTipoConta = "Conta Corrente"
       limite = 3000.00
        break;
    case 2 :
        nomeTipoConta = "Poupanca"
        limite = 1500.00
        break;
    case 3 :
        nomeTipoConta = "Conta Salário"
        limite = 2000.00
        break;
    default:
        console.log ("Tipo de conta inválida.")
        operacaoValida = false
        break;
} 

if (operacaoValida) {

    switch (operacao) {
        case 1 : 
            nomeOp = "Saque"
            valorOp = parseFloat(prompt ("Insira o valor da operacao: "));
            break;
        case 2 : 
            nomeOp = "Depósito"
            valorOp = parseFloat(prompt ("Insira o valor da operacao: "));
            break;
        case 3 : 
            nomeOp = "Consultar saldo"
            break;
        default:
            console.log ("Operacao inválida.")
            operacaoValida = false 
            break;
        
    }
    
    if (operacaoValida) {
    
        switch (true) {
            case operacao === 1 && valorOp > limite :
                console.log ("Valor acima do limite diário");
                break;
            case operacao === 1 && valorOp > saldo :
                console.log ("Saque negado. Saldo insuficiente.");
                break;
            case operacao === 1 && valorOp <= saldo : 
                saldo = saldo - valorOp
                console.log ("Saque realizado com sucesso.");
                break;
            case operacao === 2 :
                saldo = saldo + valorOp
                console.log ("Depósito realizado com sucesso.")
                break;
            case operacao === 3 :
                console.log ("Saldo atual: " + saldo)
                break;
                
        }
        
        saldo > 0 ? console.log ("Saldo positivo.") : console.log ("Saldo zerado/negativo.");
        
        console.log ("Nome: " + nome)
        console.log ("Tipo de conta: " + nomeTipoConta);
        console.log ("Operacao desejada: " + nomeOp);
        console.log ("Saldo atual: " + saldo.toFixed(2));
        console.log ("Valor da operacao: " + valorOp.toFixed(2));
        
    }            

}
