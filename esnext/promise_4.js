function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
        console.log
    }

    return new Promise(resolve => {
        setTimeout(function(){
        const fator = (max - min + 1) 
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
        },tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60,1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))