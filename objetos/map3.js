// criando o proprio map
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length ;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retonar um array apens com os preços

// Converte o JSON para Objeto
const paraObjeto = json => JSON.parse(json)
// Recebe apenas o atributo preço
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)