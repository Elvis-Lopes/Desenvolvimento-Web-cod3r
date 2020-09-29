const url = 'http://files.cod3r.com.br/curso-js/funcionario.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcioanrios = response.data
    console.log(funcioanrios)
})