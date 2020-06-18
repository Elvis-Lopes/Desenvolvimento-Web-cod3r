/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function tipoDeTriangulo(lado1 = 0, lado2 = 0, lado3 = 0){
    if(lado1 === lado2 && lado1==lado3 && lado2 === lado3){
        console.log('Triângulo equilátero')
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log('Triângulo Isósceles')
    }else{
        console.log('Triângulo Escaleno')
    }
}

tipoDeTriangulo()
tipoDeTriangulo(2, 2, 3)
tipoDeTriangulo(2, 3, 2)
tipoDeTriangulo(3, 2, 3)
tipoDeTriangulo(2, 3, 3)
tipoDeTriangulo(1, 2, 3)