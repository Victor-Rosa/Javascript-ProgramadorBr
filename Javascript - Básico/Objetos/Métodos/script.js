// Quando um objeto tem uma variável nos chamamos de propiedade;  quando um Objeto tem uma função nos chamamos de método.


function calcmed (){
    var m = (this.notas[0] + this.notas[1])/ 2;
    return m}  


var aluno = {
    nome: "Victor",
    notas: [10.0, 8.5], 
    
    media: calcmed
}            




console.log(aluno.nome)
console.log(aluno.media())



var aluno2 = {
    nome: "Matheus",
    notas: [6.5, 7.0],         

    media: calcmed
    
} 




console.log(aluno2.nome)
console.log(aluno2.media())