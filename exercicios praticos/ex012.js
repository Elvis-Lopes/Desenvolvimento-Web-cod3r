/* Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(numero){
    let resultado = 1

    for(numero; numero >=1; numero--){
        resultado *= numero
    }

    console.log(`Resultado ${resultado}`)
}

fatorial(3)
fatorial(4)
fatorial(5)
fatorial(10)