const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12, fragil: true},
    {nome: 'Copo de Plastico', preco: 15, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil == true
}))

console.log('segunda tentativa')

let apenasPreco = produtos => produtos.preco >= 500
let apenasFrageis = produtos => produtos.fragil
console.log(produtos.filter(apenasPreco).filter(apenasFrageis))


