
console.log('Oi, gente'); // testando

function fazAlgo(coisa) {
    console.log('Faz Algo',coisa);
    return "oi"+coisa
}

// function fazOutraCoisa(coisa) {
//     console.log("faz outra coisa", coisa);
//     return ""
// }

let fazOutraCoisa = function(coisa) {
    console.log("faz outra coisa", coisa);
    return ""
} // toda função pode ser armazenada em uma variável

function misterio(func) {
    console.log("mistério...");
    fazAlgo()
    func()
}

misterio(fazOutraCoisa)

// let resp = fazAlgo(56) // se eu quero guardar o resultado de uma função apenas adicionar a uma variável
// console.log("resp",resp)
// fazAlgo('oi')
// fazAlgo(true) 

let f = fazAlgo // guarda literalmente o código da função, mas não faz nada
console.log(f)
f(55) // chama a função
fazOutraCoisa("ABC")

// let pera = function() { // função anonima
//     console.log("anonima");
// }

misterio(pera)
// ou
// misterio(let pera = function() {
//     console.log("anonima");
// })

let pera = () => { // arrow function
   console.log("pera");
}

misterio(() => { 
    console.log("pera");
})

let qtde = 0

function bomDia() {
    console.log("Bom dia")
    qtde++
}

setTimeout(bomDia,1000) // Depois de um tempo específico (em milisegundos) chama a função
setTimeout(bomDia,2000)
setTimeout(bomDia,5000)  

setTimeout(() => {
    qtde = qtde + 50
    console.log("Somei 50 a mais")
},5000)

setInterval(bomDia, 1000) // Chama a função bomDia em intervalos de 1 segundo para a eternidade

let elem = document.getElementById("contador")

setInterval(() => {
    qtde++
    elem.innerText = qtde
},1000)

console.log("Terminou")