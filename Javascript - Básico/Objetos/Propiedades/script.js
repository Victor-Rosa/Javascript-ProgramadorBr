 // Para abrir e fechar um objeto voc~e abre e fecha colchetes "{}"

 // Dentro de um objeto existem propiedades(propiedades = variáveis do objeto), podem ser de qualquer tipo, inclusive pode ter um Array dentro de um Objeto, e até um Objeto dentro de um Obejto.


     var aluno = {nome:"Victor", 
                  nota: [7.5, 5.0]
                
    }

    console.log(aluno.nome)
    console.log(aluno.nota)
    console.log(aluno["nome"])
    console.log(aluno)
    console.log(aluno["nota"][1])


    aluno.matricula = 15721964758
        console.log(aluno)

    aluno["sobrenome"] = "Rosa" 
        console.log(aluno)

    var id = "idade"
        aluno[id] = "21"
            console.log(aluno)

    var empregado = new Object()

        empregado.nome = "Luiz"
        empregado.idade = 57
        empregado.salario = "4.500k"
        empregado.nota = [7.0, 5.0, 8.0, 9.5]
            console.log(empregado)

        var lastN = "Sobrenome"
            empregado[lastN] = "Alves"
                console.log(empregado)

                