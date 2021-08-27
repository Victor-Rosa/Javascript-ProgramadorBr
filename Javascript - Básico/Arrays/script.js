
//  Array é uma estrutura de dados que pode armazenar vários dados em sequência.
//  Arrays está para Javascript assim como os vetores está para Portugol.
//  Todos os Arrays começam em zero.
//  Index ou Índice é a posição do elemento dentro de um Array.


var alunos = new Array("Igor", "Matheus", "Victor", "Daniel")

console.log(alunos)
console.log("Números de alunos: ", alunos.length)

for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
}

for (var i in alunos){
    console.log(alunos[i])
}

for (var a of alunos){
    console.log(a)
}

for (var aluno of alunos){
    console.log(aluno)
}