const escola = "cod3r"

// comando charAt retorna o caracter que corresponde ao valor indicado
console.log(escola.charAt(4))

// comando charCodeAt retornar o valor do caracter na tabela ASCII
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

// comando console substring retornar parte da string com os valores indicados
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// comando concat irá concatenar os valores passado
console.log('Escola '.concat(escola).concat("!"))

// comando replace substitui o valor antigo por um novo
console.log(escola.replace(3, 'e'))

// convertendo string para array: Obs indicar o que vai ser usado como separador
console.log('Ana, Maria, Pedro'.split(','))