/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function mediaPoderada(nota1 = 0, nota2 = 0, nota3 = 0){
    let media = 0
    
    if(nota1 > nota2 && nota1 > nota3){
        media  = (nota1*4 + nota2*3 + nota3*3)/(4 + 3 + 3)
    }else if (nota2 > nota1 && nota2 > nota3){
        media  = (nota1*3 + nota2*4 + nota3*3)/(4 + 3 + 3)
    }else if (nota3 > nota1 && nota3 > nota2){
        media  = (nota1*3 + nota2*3 + nota3*4)/(4 + 3 + 3)
    }else{
        media  = (nota1*3 + nota2*3 + nota3*3)/(3 + 3 + 3)
    }

    if(media >= 5){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

mediaPoderada(10, 4, 6)
mediaPoderada(4, 4, 4)