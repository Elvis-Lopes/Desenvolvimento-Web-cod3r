/*setTimeout(function (){
    console.log('Executando callback...')

    setTimeout(function(){
        console.log('Executando segundo callback...')
        setTimeout(function(){
            console.log('Executando terceiro callback...')
        },2000)
    }, 2000)
}, 2000)
*/
function esperarPor(tempo){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Vissh')
        },tempo*1000)
    })
}


esperarPor(3).then(texto => console.log(texto))
