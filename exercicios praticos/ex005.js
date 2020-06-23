function correcaoDeValor(valor = 0.00){
    valorCorrigido = valor.toFixed(2).toString()
    console.log(`R$ ${valorCorrigido.replace('.', ',')}`)
}

correcaoDeValor(2.10)