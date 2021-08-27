//------------------------------------------------------------
var a = {
        nome: "Victor",
         nota: 7.5
}

    console.log(a.nome)
//------------------------------------------------------------
function form (name, n1, n2) {

          return {nome: name,
                  nota1: n1,
                  nota2: n2} 

}

var b = form("Rafael", 7.0, 5.0)
    console.log(b.nome, b.nota1, b.nota2)
//-----------------------------------------------------------
function form1(name, subname){
    this.nome = name
    this.sobrenome = subname 
}

var c = new form1("Luiz", "Rosa")
    console.log(c.nome)
    console.log(c)
//------------------------------------------------------------