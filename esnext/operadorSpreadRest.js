// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1500.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria', ...grupoA]
console.log(grupoB)