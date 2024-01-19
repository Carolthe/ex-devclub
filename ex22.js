//Faça um programa onde leia um número e siga se ele é:
// -Impar
// -Par
// -É um número primo e impar
// -É par e divisivel por 5

let number = 11

if(number % 2 === 0 && number % 5 === 0){
    console.log("É par e divivivel por 5")
}
else if(number % 2 === 0){
    console.log("O número é par")
}
else{
    for(let i = 2; i < number; i++)
    if(number % i === 0){
        console.log("É ímpar, mas não é primo")
        break
    }
else {
    if (i === number -1)
    console.log("Ele é um número primo")
}
}

