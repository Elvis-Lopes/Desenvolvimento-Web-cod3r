/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentarSalario(opcaoDeAumento, salarioAtual){
    opcaoDeAumento = opcaoDeAumento.toUpperCase()
    let aumento = 0
    switch(opcaoDeAumento){
        case 'A':
            aumento = (salarioAtual*10)/100
            salarioAtual += aumento
            console.log(`Novo salario R$ ${salarioAtual}`)
            break
        case 'B':
            aumento = (salarioAtual*15)/100
            salarioAtual += aumento
            console.log(`Novo salario R$ ${salarioAtual}`)
            break
        case 'C':
            aumento = (salarioAtual*20)/100
            salarioAtual += aumento
            console.log(`Novo salario R$ ${salarioAtual}`)
            break
        default:
            console.log('Plano inválido')
            break
    }
}

aumentarSalario('a', 100)
aumentarSalario('b', 100)
aumentarSalario('c', 100)
aumentarSalario('d', 100)
