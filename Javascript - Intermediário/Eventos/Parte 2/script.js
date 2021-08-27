function h1click(){
    console.log("executando a função")
}

function changeh1(input){
    
    let h1 =  document.getElementsByTagName("h1")[0]
    h1.innerText = input.value


}

function hideh1(){
    let h1 = document.getElementsByTagName("h1")[0]
    h1.style.display = "none"
}

function onOver(elemento){
    elemento.style.backgroundColor = "blue"
}

function onOut(elemento){
    elemento.style.backgroundColor = "red"
}

function click(elemento){
    let text = elemento
    text = document.getElementsByClassName(".p1")
    text.style.backgroundColor = "black"
}