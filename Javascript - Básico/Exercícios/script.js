
// 1.Escreva uma função que receba dois números e retorne o maior deles

function maior(n1, n2){
    let x = 0

    if (n1 > n2) {
        x = n1
    }
    else{
     x = n2   
    }

    return x
}

let a = 2
let b = 4

    console.log(a)
    console.log(b)
    console.log("O maior número entre ", a, "e", b, "é:", maior(a, b))
//---------------------------------------

// 2.Escreva uma função que receba um Array com 3 números e imprima eles em ordem

let array = [3, 2, 1]
console.log(array)


function ordem(array){

    if (array[0] > array[1] > array[2]){
      return console.log(array[0], array[1], array[2])
    }
    else if (array[0] > array[2] > array[1]){
      return console.log(array[1], array[2], array[1])
    }
    else if (array[1] > array[2] > array[0]){
      return console.log(array[1], array[2], array[0])
    }
    else if (array[1] > array[0] > array[2]){
      return console.log(array[1], array[0], array[2])
    }
    else if (array[2] > array[0] > array[1]){
      return console.log(array[2], array[0], array[1])
    }
    else if(array[2] > array[1] > array[0]){
      return console.log(array[2], array[1], array[0])
    }

}

console.log(ordem(array))
//---------------------------------------

// 3.Escreva uma função que receba um Array com 5 números e retorne o maior deles
let array3 = [2, 4, 16, 8, 39]

function maiorEntre(array){
    let maior = 5
        for (let i = 0; i <= 5; i++){
            if(array[i] > maior){
                maior = array[i]
            }
        }
        return maior
}

console.log(maiorEntre(array3))



//---------------------------------------
// 4. Escreva uma função que receba um Array com 5 números e retorne a média deles
let array2 = [5, 10, 6, 7, 8] 

function media(array){
     
  let x = (array[0] + array[1] + array[2] + array[3] + array[4]) / 5

  return x 
}

console.log(media(array2))
//---------------------------------------
// 5.Escreva uma função que receba um número e imprima se ele é par ou ímpar
let x = 6

function parouimpar(num){
    if(num % 2 == 0){
        return "par"
    }
    else{
      return "impar"  
    } 
    
}

console.log(parouimpar(x))
//---------------------------------------

//6.Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

function multiplode4(){
    for(let num = 0; num <= 100; num++){
        if(num % 4 ==0){
            console.log("pi")
        }
        else{
            console.log(num)
        }
    }
}

multiplode4()
//---------------------------------------

// 7. Escreva uma função que receba um objeto e imprima suas propriedades

function mostrar(object){
    for(let assuntos in object){
        console.log(assuntos)
    }
}

let ficha = {
        nome: "Victor",
        idade: 21,
        altura: 1.75
}        
mostrar(ficha)
//---------------------------------------

// 8.Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function propi(d){
    let mes1 = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
        return {
            dias: d.getDate(),
            mes: mes1[d.getMonth()],
            ano: d.getFullyear()
        }
    

}

console.log(propi(new Date(Date.now())))

function propi(d){
    var meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
   return {
        dia:d.getDate(),
        mes: meses[d.getMonth()],
        ano: d.getFullYear()
    }
}

console.log(propi(new Date(Date.now())))



//---------------------------------------

// 9. Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

let pessoa = [{altura: 1.75, idade: 21},
              {altura: 1.85, idade: 22},  
              {altura: 1.88, idade: 36}, 
              {altura: 1.65, idade: 34},  
              {altura: 1.98, idade: 50},  
]

function planilha(array){
let maiorAltura = 0
let menorAltura = 999
let idade = 0

for (let i = 0; i <= 5; i++){
     if (array.altura[i] > maiorAltura){
         maiorAltura = array.altura[i]
     }
    
     if (array.altura[i] < menorAltura){
         menorAltura = array.altura[i]
     }
}
    idade = (array.idade[0] + array.idade[1] + array.idade[2] + array.idade[3] + array.idade[4]) / 5

    console.log(maiorAltura) 
    console.log(menorAltura)
    console.log(idade)
} 

console.log(planilha(pessoa))

//---------------------------------------

// 10.Escreva um programa que imprima o seguinte padrão

let number = 6
let estrela = "*"
for (let i = 0; i < number; i++){
    console.log(estrela)
    estrela = estrela += "*"
}

//---------------------------------------