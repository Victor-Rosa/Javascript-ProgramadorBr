/*---------------------------Bind-------------------------------*/
function speakPlay(){
    console.log(this.sound)
}

let dog = {
    sound: "AU AU",
    speak: speakPlay
}

let cat = {
    sound: "MIAU MIAU",
    speak: speakPlay
}

let cock = {
    sound: "COCORICÓ",
    speak: speakPlay
}


cat.speak()
dog.speak()

let binedFunction = speakPlay.bind(cock)
binedFunction()


/*------------------Arrow Functions--------------------------*/

let double = () => 2 * this.value

/*------------------------------------------------------------*/

let dobro = function () {
    return this.value * 2
}

let numero = {
    value: 8,
    quad: dobro
}

console.log(numero.quad())

/*----------------------CallBack------------------------------*/

 function ola (){
    console.log("Olá");
}

function saudacoes (inicio, nome){
    inicio();
    console.log(nome)
}

/*saudacoes(ola, "Victor")*/

let usuarios = ["Pedro", "Matheus", "Ana Beatriz"]

function addUsuario(nome){

    let promise = new Promise(function(resolve,reject){
            setTimeout(() => {
                usuarios.push(nome);
    
                let error = false;
    
                if(!error){
                    resolve();
    
                    } else {
                        reject({msg: "Deu erro!"});
                    }
            }, 1000);
    })

    return promise;

}


function listarUsuarios(){
    console.log(usuarios)
}

addUsuario("Victor").then(listarUsuarios).catch((error) => console.log(error.msg))

async function executar(){

    await addUsuario("Rodrigo")
    listarUsuarios()
}

executar()

let idade = 21;
let isAdult = (age) => age > 18  

let numberRandom = () => Math.random()
console.log(numberRandom())

function novoAluno (name, ida){
    return {name, ida}
}

let alunos = [
    novoAluno("Maria", 18),
    novoAluno("Victor", 21),
    novoAluno("Lucas", 20),
    novoAluno("Pedro", 25),
    novoAluno("Roberto", 28)
]

function menos25 (aluno){
    return aluno.ida < 25
}


function mais25 (aluno){
    return aluno.ida >= 25
}

let alunosMenos25 = alunos.filter(menos25)

let alunosMais25 = alunos.filter(mais25)

console.log(alunosMenos25)

console.log(alunosMais25)

let turmaA = ["Victor", "Luana", "Rodrigo", "Ricardo"]
let turmaB = turmaA

turmaB.push("Rebecca")

let turmaC = turmaB.slice()
turmaC.push("Roger")

let alunoA = {nome: "Rosa",
              idade: 21  
            }

let alunoB = alunoA
alunoB.idade = 25

let alunoC = Object.assign({}, alunoB)
alunoC.idade = 30

let pessoa = {nome:"Rodrigo",
              id: 34,
              matricula: 98785616         
            }

let contato = {telefone: 991665735,
                email: "victorsouzarosa100@gmail.com"
            }

let pessoa2 = {...pessoa, cidade: "Rio de Janeiro"}
let pessoa3 = {...pessoa,nome:"júlio", ...contato}

var {nome, id, ...resto } = pessoa3
console.log(resto)
/*------------------------------------------------------------*/