const url = 'http://files.cod3r.com.br/curso-js/funcionario.json'
const axios = require('axios')
/*
const chineses = f => f.pais === 'china'
const mulheres = f => f.genero === 'F'
const menorSalario(func, funcAtual) =>{
   // return func.salario < funcAtual ? func : funcAtual
}
*/

const func = funcioanrios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

axios.get(url).then(response =>{
    const funcioanrios = response.data
    console.log(funcioanrios)
})