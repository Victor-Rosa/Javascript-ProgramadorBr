//Tudo no Js praticamente é um objeto



function criaraluno(name, n1, n2){
    return  {
             nome: name,
             nota1: n1,
             nota2: n2,
             media: function(){
                return (this.nota1 + this.nota2) / 2
            }
    }    
}

var turma = [
            criaraluno("Victor", 7, 8),
            criaraluno("Matheus", 8, 5),
            criaraluno("Ricardo", 7, 6)
]

var aluno = turma[1]
    console.log(aluno)
    console.log(aluno.media())


turma.forEach(function (elemento){

    console.log(elemento)

}
)

for (var aluno of turma){
    console.log(aluno.nome, " - " + " média: ", aluno.media()         
    )
}

//------------------------------------------------------------
//------------------------------------------------------------

 
function modaluno(name, n1, n2){

    this.nome = name
    this.nota1 = n1
    this.nota2 = n2

    this.med = function (){
        return (this.nota1 + this.nota2) / 2  
    }
}

var a = new modaluno("victor", 9, 10)
    console.log(a)
    console.log(a.nome, a.med())