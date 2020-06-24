/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function bhaskara (a, b, c){
    delta = Math.pow(b, 2) - 4 * (a * c)
    deltaNegativo = 'Delta Negativo'

    if (delta < 0){
        return console.log(deltaNegativo)
    }else{
        let res = []
        x1 = (-1*b)+Math.sqrt(delta)/2*a
        x2 = (-1*b)-Math.sqrt(delta)/2*a
        res.push(x1)
        res.push(x2)
        
        return console.log(res)
    }
}

bhaskara(1, 12, -13)
bhaskara(3, -5, 12)