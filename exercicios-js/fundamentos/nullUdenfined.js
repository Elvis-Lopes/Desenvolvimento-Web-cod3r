let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toStrin())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)