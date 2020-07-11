/*​ Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

vetorInteiro = [1, 2, 3, 4]
vetorDouble = [1.2, 4.5, 9.2, 0.2]
vetorString = ['a', 'b', 'c', 'd']

console.log(vetorString.concat(vetorInteiro, vetorDouble))
console.log(`vetor de string ${vetorString.concat(', vetor de inteiro:' + vetorInteiro) + ', vetor de Double:' + vetorDouble}`)