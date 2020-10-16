// Arrow Function
const soma =  (a, b) => a + b
console.log(soma(2, 3))

// Arrow function this
const texto1 = () => console.log(this === exports)
const texto2 = texto1.bind()
texto1()
texto2()

// parametro default
function log(texto = 'Nome'){
    console.log(texto)
}

log()
log('Teste')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4))