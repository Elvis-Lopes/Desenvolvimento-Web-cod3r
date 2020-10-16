// ES8: Objectvalues / Object.entries
const obj = {a:1, b:2, b:3, c:4}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação litoral
const nome = 'Carta'
const pessoa ={
    nome,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())