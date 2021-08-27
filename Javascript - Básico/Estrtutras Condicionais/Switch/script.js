var nota1 = 8.0;
var nota2 = 1.0;

var med = (nota1 + nota2) / 2

var conceito = ""; 

if (med >= 8.0 ) {

    conceito = "ótimo";

}
else if (med >= 6.5) {
    conceito = "bom";

} else {
    conceito = "regular";
}

//conceito = "Mais ou menos"

console.log(med)
console.log(conceito)

switch(conceito){

    case "otimo":
        console.log("Parabéns você é um ótimo aluno.")
        break
    case "bom":
        console.log("você foi quase perfeito.")
        break
    case "regular":
        console.log("você precisa estudar mais.")
        break
    default:
        console.log("Houve algum erro.")

}
    

