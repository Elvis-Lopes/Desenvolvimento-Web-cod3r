for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for( let assunto in assuntosEcma){
    console.log(assuntosEcma[assunto])
}

const assuntoMap = new Map([
    ['Map', { abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){
    console.log(chave)
}

for (let valor of assuntoMap.values()){
    console.log(valor)
}