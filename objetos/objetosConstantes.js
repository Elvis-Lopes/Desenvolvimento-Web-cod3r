// pessoa -> 123 -> {...} ( a mundação de objetos constantes ocorre atráves de ponteiros)
const pessoa =  {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstantes = Object.freeze({nome: 'Maria'})
pessoa.nome  = 'João'
console.log(pessoaConstantes)