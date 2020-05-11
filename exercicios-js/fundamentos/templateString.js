const NOME = 'Rebeca'
const CONCATENACAO = 'Olá ' + NOME + '!'

// instanciado template de String
const TEMPLATE = `
    Olá
    ${NOME}!`
console.log(CONCATENACAO, TEMPLATE)

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
