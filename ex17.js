//Faça um programa que gere um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.

let number = 5

let aleatorio = Math.floor(Math.random()*(10 -1)+1)


if(number === aleatorio){
    console.log("Número premiado!!!")
}
else{
    console.log("Tente novamente")
}

console.log(aleatorio)