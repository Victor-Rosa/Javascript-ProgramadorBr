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