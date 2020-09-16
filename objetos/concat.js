const filhas = ['Valeska', 'Cibalena']
const filhos = ['Godofredo', 'Tenisclilton']
const todos = filhas.concat(filhos)
console.log(todos)
console.log([].concat([ [ 8.1, 9.3 ], [ 8.1, 7.3 ] ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)