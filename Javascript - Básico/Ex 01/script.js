// Nome do aluno - nota 1 - nota 2 - média - Aprovado / Reprovado

var nomes = ["Victor", "Matheus", "Daniel"]
var nota1 = [7.0, 8.0, 6.5];
var nota2 = [9.5, 6.5, 3.5];


function resultado(x){

    if (x >= 6){

        return " Aprovado! "
    }
    else {
        
        return " Reprovado "
    }
}




var med = function(a, b){

    return (a + b) / 2

}

for (var index in nomes) {

    var notaA = nota1[index]
    var notaB = nota2[index]
    var m = med(notaA, notaB)

    console.log(nomes[index] +
        " - " +
        notaA + 
        " - " + 
        notaB + 
        " - " + 
        m + 
        " - " + 
        resultado(m))

}