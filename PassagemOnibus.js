let nome = prompt ("Insira seu nome: ");
let categoria = parseInt(prompt ("Insira sua categoria (1 - Adulto, 2 - Estudante, 3 - idoso, 4 - crianca menor de cinco anos): "));
let destino = parseInt(prompt ("Insira seu destino ( 1 - destino A R$45,00, 2 - destino B R$72,00, 3 - destino C R$110,00, 4 - destino D R$138,00: "));
let quantidadePa = parseInt(prompt ("Insira a quantidade de passagens: "));
let desconto = 0.0
let valido = true
let precoBase = 0.0
let nomeCategoria = ""
let nomeDestino = ""


switch (categoria) {
    case 1 :
        desconto = 0.0
        nomeCategoria === "Adulto"
        break;
    case 2 : 
        desconto = 50.00
        nomeCategoria = "Estudante"
        break;
    case 3 :
        desconto = 50.00
        nomeCategoria = "Idoso"
        break; 
    case 4 :
        desconto = 100.00
        nomeCategoria = "Crianca menor de cinco anos"
        break; 
    default : 
        console.log ("Categoria inválida.")
        valido = false
        break;
}

if (valido) { 
    
    switch (destino) {
        case 1 :
            nomeDestino = "Destino A";
            precoBase = 45.00;
            break;
        case 2 :
            nomeDestino = "Destino B";
            precoBase = 72.00
            break;
        case 3 : 
            nomeDestino = "Destino C"
            precoBase = 110.00
            break;
        case 4 : 
            nomeDestino = "Destino D"
            precoBase = 138.00
            break;
        default :
            console.log ("Destino inválido.");
            valido = false 
            break;
            
    }
    
    if (valido) { 
        
        let subTotal = precoBase * quantidadePa
        let valorDesconto = (subTotal * desconto) / 100
        let total = subTotal - valorDesconto
        
        total < 100 ? console.log ("Pagamento à vista.") : console.log ("Parcelável em até 3x sem juros.")
        
        switch (true) {
            case total === 0.0 :
             console.log ("Embarque gratuito liberado.");
                break;
            case total < 100.00 :
                console.log ("Dirija-se ao guiche para pagamento.");
                break;
            case total < 200.00 :
                console.log ("Pagamento via terminal disponível.");
                break;
            case total >= 200.00 :
                console.log ("Atendimento prioritário no guiche VIP.");
                break;
                
        }
        
        console.log ("Nome: " + nome);
        console.log ("Categoria: " + nomeCategoria);
        console.log ("Destino: " + nomeDestino);
        console.log ("Quantidade de passagens adquiridas: " + quantidadePa);
        console.log ("Valor da Passagem: " + precoBase.toFixed(2));
        console.log ("Desconto: " + desconto.toFixed(2) + "%");
        console.log ("Valor total: " + total.toFixed(2));
                
    }
}
