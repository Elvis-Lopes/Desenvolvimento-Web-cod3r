/*​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function calcularConvenio(idade){
    let valor = 100

    if(idade > 1 && idade <= 10){
        valor += 80
        console.log(`Valor do convenio R$ ${valor.toFixed(2)}`)
    }else if (idade > 10 && idade <= 30){
        valor += 50
        console.log(`Valor do convenio R$ ${valor.toFixed(2)}`) 
    }else if (idade > 30 && idade < 60){
        valor += 95
        console.log(`Valor do convenio R$ ${valor.toFixed(2)}`)
    }else if(idade >= 60){
        valor += 130
        console.log(`Valor do convenio R$ ${valor.toFixed(2)}`)
    }else{
        console.log(`Idade inválida`)
    }
}

calcularConvenio(8)
calcularConvenio(25)
calcularConvenio(54)
calcularConvenio(70)
calcularConvenio(-1)