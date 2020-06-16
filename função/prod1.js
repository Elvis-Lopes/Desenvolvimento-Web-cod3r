const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1245
}

// Factory simples
function criarPessoa(nome, sobrenome)
{
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}