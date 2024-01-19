//Faça um programa que gere tres números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let numberOne = 100
let numberTwo = 20
let numberThree = 30

if (numberOne > numberTwo && numberOne > numberThree){
    console.log("O primeiro é o maior")
}
else if(numberTwo > numberThree){
    console.log("O segundo é o maior")
}
else{
    console.log("O Terceiro é o maior")
}

if(numberOne < numberTwo && numberOne < numberThree){
    console.log("O primeiro é o menor")
}
else if(numberTwo < numberThree){
    console.log("O segundo é o menor")
}
else{
    console.log("O terceiro é o menor")
}

