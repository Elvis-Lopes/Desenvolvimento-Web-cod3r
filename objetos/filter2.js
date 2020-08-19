Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length;i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12, fragil: true},
    {nome: 'Copo de Plastico', preco: 15, fragil: false},
]

let apenasPreco = produtos => produtos.preco >= 500
let apenasFrageis = produtos => produtos.fragil
console.log(produtos.filter2(apenasPreco).filter2(apenasFrageis))