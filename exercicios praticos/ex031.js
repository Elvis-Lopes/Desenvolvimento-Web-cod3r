/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function contadorDeNegativos(vetor){
    cont = 0

    for(let i  = 0; i <= vetor.length; i++){
        if(vetor[i] < 0){
            cont++
        }
    }
    return `dos valores informados ${cont} deles são negativos`
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contadorDeNegativos(vetor))