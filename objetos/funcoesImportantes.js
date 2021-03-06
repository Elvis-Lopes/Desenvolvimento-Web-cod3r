const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach((element) => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)

/**
 * Object.assign()
 * concatena os objetos no primeiro instaciado.
 * em caso de atribudos iguais vai valer o valor do ultimo atributo instanciado
 */

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
