   
// PARTE 1 DE FUNÇÕES   

   
   function media(nota1,nota2){
        var n1 = nota1
        var n2 = nota2
        var med = (n1+n2) / 2
        //console.log(med)

        return med
    }

   var resultado1 = media(6, 7);
   var resultado2 = media(10, 5);


   console.log(resultado1);
   console.log(resultado2, resultado1);


//  PARTE 2 DE FUNÇÕES

// Uma função pode ser uma variável.


    function saudacao(){

        return "Olá Mundo"
    
    }

    var s = saudacao;

    console.log(s);
    console.log(s());



    var m = media;
    var resultado3 = m(10, 5);

    console.log(resultado3)

    // Função Anônima

    var med = function (a1, a2){

        return (a1 + a2) / 2

    }

    console.log(med(10, 5));