/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function contarNotas(valor){
    let cont100 = 0
    let cont50 = 0
    let cont20 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0

    while (valor >= 100) {
        valor -= 100
        cont100++
    }

    while (valor >= 50) {
        valor -= 50
        cont50++   
    }

    while (valor >= 20) {
        valor -= 20
        cont20++
    }

    while (valor >= 10) {
        valor -= 10
        cont10++
    }

    while (valor >= 5) {
        valor -= 5
        cont5++
    }

    while (valor >= 1) {
        valor -= 1
        cont1++
    }

    console.log(`
    ${cont100} nota(s) de 100
    ${cont50} nota(s) de 50
    ${cont20} nota(s) de 20
    ${cont10} nota(s) de 10
    ${cont5} nota(s) de 5
    ${cont1} moeda(s) de 1`)
}

contarNotas(588)