function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))


async function executar(){
    await esperarPor(2000)
    console.log('Async/Await 1...')

    await esperarPor(2000)
    console.log('Async/Await 2...')

    await esperarPor(2000)
    console.log('Async/Await 3...')
}

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}

function gerarMegaSena(qtdNumeros){
        try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
    }catch(e){
        throw "Que chato!!!"
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)