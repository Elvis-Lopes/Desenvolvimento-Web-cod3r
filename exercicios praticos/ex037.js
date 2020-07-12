/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​ a1 ​ (o primeiro termo) e ​ r ​ (a razão) e escreva os ​ n ​ termos ,
bem como a soma dos elementos.
 */

 function progressãoAritmetica(termos, primeiroTermo, razao){
     let resposta = [primeiroTermo]

     if(razao != 0){
         for(let i = 0; i < termos-1;i++){
             primeiroTermo += razao
             resposta.push(primeiroTermo)
         }
     }else{
         for(let i = 0; i < termos-1;i++){
            resposta.push(primeiroTermo)
         }
     }
     return resposta
 }

 function progressãoGeometrica(termos, primeiroTermo, razao){
    let resposta = [primeiroTermo]

    if(razao != 0){
        for(let i = 0; i < termos-1;i++){
            primeiroTermo *= razao
            resposta.push(primeiroTermo)
        }
    }else{
        for(let i = 0; i < termos-1;i++){
           resposta.push(primeiroTermo)
        }
    }
    return resposta
}

console.log(progressãoAritmetica(5, 1, 3))
console.log(progressãoAritmetica(3, -1, -2))
console.log(progressãoAritmetica(3 ,6,0))

console.log(progressãoGeometrica(5, 1, 3))
console.log(progressãoGeometrica(3, -1, -2))
console.log(progressãoGeometrica(3 ,6,0))
