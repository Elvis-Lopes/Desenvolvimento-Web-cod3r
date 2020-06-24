/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivel(valor){
    if(valor % 3 == 0){
        console.log('True')
    }else{
        console.log('False')
    }
}

divisivel(3)
divisivel(10)
divisivel(9)
divisivel(14)