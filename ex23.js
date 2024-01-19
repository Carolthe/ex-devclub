//Faça um programa onde leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
//-Todos os números são impares 
//- Todos od números são pares

let numberOne = 10
let numberTwo = 23
let numberThree = 32
let numberFor = 15


if( numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFor % 2 === 0){
    console.log("Todos são pares")
}
else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFor % 2 !== 0){
    console.log("Todos são impares")
}
else{
    console.log("Os números estão misturados")
}