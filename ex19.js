//Crie objeto com dados de uma pessoa e imprima se essa pessoa foi aprovada ou não, caracteristicas(a pessoa deve ser maior de idade e brasileira para ser aprovado(a))


let person ={
    name: "Ravier",
    age: 25,
    nacionalit: "Brasileiro"
}

if( person.age >=18 && person.nacionalit === "Brasileiro" || person.nacionalit === "Brasileira"){
    console.log("Você foi aprovado!!")
}
else{
    console.log("Voce não foi aprovado.")
}

