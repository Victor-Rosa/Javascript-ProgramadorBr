var n1 = 8
let n2 = 10
const n3 = [25]
const n4 = {}

console.log(n1)
console.log(n2)
console.log(n3)

// Const = Constantes; constantes só podem receber valor apenas uma única vez, ela não poder ser reatribuída, mas o valor poder ser modificado.

n3.push(15)
    console.log(n3)

n4.nome = "Victor"
    console.log(n4)

// Escopo é onde a variável existi.
// Let e Const tem escopo local e não global, eles só existem naquele determinado bloco onde estão declarados. 
// Variáveis Let podem ser reatribuídas, desde de que a reatribuição seja feita dentro do bloco que foi criada 
// Var é acessível em qualquer lugar, toda VAR tem escopo global.