/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function intervaloDeImpar(início, fim){
    if(início > fim){
        console.log(`valores inválidos`)
    }else{
        console.log(0)
        for(let i = início; i < fim; i++){
            if(i % 2 == 1){
                console.log(i)
            }
        }
        console.log(100)
    }
}

intervaloDeImpar(50, 20)
intervaloDeImpar(10, 30)