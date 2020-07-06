/*​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function lerVetor(vetorDeNumeros){
    let contPar = 0
    let contImpar = 0

    for(let i = 0; i <= vetorDeNumeros.length; i++){
        if(vetorDeNumeros[i] % 2 == 0){
            contPar++
        }else{
            contImpar++
        }
    }

    console.log(`Numeros Impar ${contImpar}, numeros pr ${contPar}`)
}

lerVetor([1,2,3,4,5,6,7,8,9,10])