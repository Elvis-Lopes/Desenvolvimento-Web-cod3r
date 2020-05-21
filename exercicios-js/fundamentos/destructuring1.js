// novo recurso do ES2015

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {logradouro : 'Rua abc', Numero: 1000}
}

// vai retirar os valores do objeto pessoa e passar para as variaveis
const { nome , idade } = pessoa

console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa
console.log(n, i)


/*
    // retirando valores que não existe no objeto (Sem valor default)
    const { sobrenome, bemHumorada} = pessoa
    console.log(sobrenome, bemHumorada)
*/

// retirando valores que não existe no objeto (Com valor default)
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, Numero, cep } } = pessoa
console.log(logradouro, Numero, cep)