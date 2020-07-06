/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function verificadorDeValores(vetor){
    let maiorValor = vetor[0]
    let menorValor = vetor[0]

    for(let i = 0; i <= vetor.length; i++){
        if(vetor[i] < menorValor){
            menorValor = vetor[i]
        }
        if(vetor[i] > maiorValor){
            maiorValor = vetor[i]
        }
    }
    return `O maior valor do vetor é ${maiorValor}, já o menor valor ${menorValor}`
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(verificadorDeValores(vetor))