/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial=0, taxaDeJuros=0, tempoDeAplicacao=0){
    valorDoJuros = (capitalInicial*taxaDeJuros)/100
    valorDoJuros *= tempoDeAplicacao
    total = capitalInicial + valorDoJuros
    console.log(`total a pagar ${total}`)
}


function jurosComposta(capitalInicial=0, taxaDeJuros=0, tempoDeAplicacao=0){
    
    for(let i = 0; i < tempoDeAplicacao; i++){
        valorDoJuros = (capitalInicial*taxaDeJuros)/100
        total = capitalInicial + valorDoJuros
        capitalInicial = total
        console.log(`total a pagar ${total}`)
    }
}
jurosSimples(100, 10, 3)
jurosComposta(10000, 10, 3)