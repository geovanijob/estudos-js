//Função em JS é First-Class Object (Citizens)
//Higher- Order function

//criar de forma literal

function fun1() {
    return console.log("fun2!!")
}
//Armazenar em uma variável
const fun2 = function (){
    return console.log("fun2!!")
}
//Armazenar em um array 
const array = [function (a,b) {return a + b}, fun1,fun2];

console.log(array[0](2,3));
console.log(array[2]);

//armazenar em um atributo de objeto
const obj = {}

obj.falar = function () { return 'Opa'}

console.log(obj.falar())

//passar função com param
function run(fun){
    fun()
}

run(function(){ console.log('Executando.....')})

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}
soma(2,3)(4);

const cincoMais = soma(2,3);
cincoMais(4);