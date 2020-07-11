/*​ Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function multiplicarArray(array, numero){
    let resposta = []
    for(let i = 0; i < array.length;i++){
        resposta.push(array[i] * numero)
    }
    return resposta
}

function multiplicarArrayPor5(array, numero){
    let resposta = []
    if(numero > 5){
        for(let i = 0; i < array.length;i++){
            resposta.push(array[i] * numero)
        }
        return resposta
    }else{
        return array
    }
    
}

console.log(`Resultado: ${multiplicarArray([1,2,3,4,5], 2)}`)
console.log(`Resultado: ${multiplicarArrayPor5([1,2,3,4,5], 2)}`)
console.log(`Resultado: ${multiplicarArrayPor5([1,2,3,4,5], 7)}`)