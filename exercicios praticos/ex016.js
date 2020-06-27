/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos 
na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculadora(valor1 = 0, operador, valor2 = 0){
    switch(operador){
        case '+':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
            break
        case '-':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)
            break
        case '*':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`)
            break
        case '/':
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`)
            break
        default:
            console.log('Operação inválida')
            break
    }
}

calculadora(2, '+', 3)