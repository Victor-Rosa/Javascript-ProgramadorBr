/*-------------------REDUCE()---------------------------------*/

let compras = [400, 600, 800, 300, 800]

function somarContas(array) {
    let total = 0

    for (let i = 0; i < array.length; i++){
         total = total + array[i]
    }

    return total
}

let totalCompras = somarContas(compras)


/*--------------------------MAP()-----------------------------*/
function criarAlunos (nome,idade) {
    return {nome,idade}
}
let jogadores = [
    criarAlunos("Victor",21),
    criarAlunos("Rodrigo",35),
    criarAlunos("Júlia",35)
]

function dobrarIdade(grupo){

    let novoGrupo = []

    for (let i = 0; i < grupo.length; i++){
        novoGrupo.push(grupo[i].idade * 2)
    }

    return novoGrupo
}

let grupoDobrado = dobrarIdade(jogadores)
console.log(grupoDobrado)

