


let inputAdultos = document.getElementById("adultos")

let inputCrianças = document.getElementById("crianças")

let inputDuracao = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function calcularComida(){

    let adultos = inputAdultos.value
    let criancas = inputCrianças.value
    let duracao = inputDuracao.value

    let  quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let quantTotalCerveja = cervejaPP(duracao) * adultos
    let quantTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${quantTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${quantTotalCerveja/1000} L de Cervaja</p>`
    resultado.innerHTML += `<p>${quantTotalBebidas/1000} L de Bebida</p>`

}

function carnePP(duração){

    if(duração >= 6){
        return 650
    }
    else {
        return 400
    }

}

function cervejaPP(duração){

    if(duração >= 6){
        return 2000
    }
    else {
        return 1200
    }

}

function bebidasPP(duração){

    if(duração >= 6){
        return 2000
    }
    else {
        return 1000
    }

}