/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function crescimento(alturaDaCrianca1, txDeCresc1, alturaDaCrianca2, txDeCresc2){
    if(alturaDaCrianca1 < alturaDaCrianca2){

        let contAnos = 0

        while (alturaDaCrianca1 < alturaDaCrianca2) {
            alturaDaCrianca1 += txDeCresc1
            contAnos++
        }
        console.log(`A primeira criança ficara será a maior em ${contAnos} anos`)

    }else if(alturaDaCrianca1 > alturaDaCrianca2){

        let contAnos = 0

        while (alturaDaCrianca1 > alturaDaCrianca2) {
            alturaDaCrianca2 += txDeCresc2
            contAnos++
        }
        console.log(`A segunda criança ficara será a maior em ${contAnos} anos`)
    
    }else{
        console.log(`as crianças tem a mesma altura`)
    }
}

crescimento(130, 2, 150, 3)
crescimento(160, 2, 140, 3)
crescimento(160, 2, 160, 3)