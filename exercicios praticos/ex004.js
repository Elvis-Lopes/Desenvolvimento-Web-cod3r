/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao(dividendo = 0, divisor){
    let resultado = dividendo / divisor
    let rest = dividendo % divisor
    console.log(`
    resultado: ${resultado}
    resto da divisão: ${rest}`)
}

divisao(3, 2)
divisao(2, 2)