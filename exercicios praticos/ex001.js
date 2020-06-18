/*  01)​ Crie uma função que dado dois valores 
    (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
*/

function operacao(valor1 = 0, valor2 = 0){
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let mult = valor1 * valor2
    let div = valor1 / valor2

    console.log(`
    ${valor1} + ${valor2} = ${soma}
    ${valor1} - ${valor2} = ${sub}
    ${valor1} * ${valor2} = ${mult}
    ${valor1} / ${valor2} = ${div}
    `)
}

operacao()
operacao(3, 3)