const sequencia = {
    _valor:1, // convenção
    get valor(){return this._valor++},
    set valor(valor){
        if(valor >this._valor){

        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia._valor = 1000
console.log(sequencia.valor, sequencia.valor)