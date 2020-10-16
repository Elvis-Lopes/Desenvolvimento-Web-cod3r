// let e const
{
    let a = 2
    var b = 3
    console.log(a)
}

console.log(b)

// Template String
let produto = 'ipda'
console.log(`${produto} é caro`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
const [x, y] = [1, 2]
console.log(x, y)

const {nome, idade: i} = {nome: 'ana', idade:23}
console.log(i, nome)