// Strings só trabalham com adição, fazendo concanetação, conseguirar fazer outra operação, apenas se a STRING for um número, mesmo se esse número estiver na forma de caractere 


var str = 'variavel "texto entre aspas" qualquer';


console.log(str);

str += " outro texto "

console.log(str)

var num = 8;

str += num

console.log(str)
console.log(num)