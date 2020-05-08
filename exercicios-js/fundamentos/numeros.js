const PESO1 = 1.0
// a função number() converte o valor para o tipo number
const PESO2 = Number('2.0')

console.log(PESO1, PESO2)
// a função isInteger da biblioteca Number retorna se o número é inteiro ou não
console.log(Number.isInteger(PESO1))

const AVALIACAO1 = 9.871
const AVALIACAO2 = 6.871

const TOTAL = AVALIACAO1 * PESO1 +  AVALIACAO2 * PESO2
const MEDIA = TOTAL / (PESO1 + PESO2)
// função toFixed permite controlar quantas casa decimais serão mostradas
console.log(MEDIA.toFixed(2))
console.log(MEDIA.toString())