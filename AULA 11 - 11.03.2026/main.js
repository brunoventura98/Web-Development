for (let letra of "olá") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 2000)
}

setInterval(() => {
    console.log("Tic")
}, 1000)

let counter = 0
const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("O intervalo foi removido")
    }
},1000)

const eventoFuturo = (res) => {
	return new Promise((resolve, reject) => {
		if (res === true) {
			resolve('Promessa resolvida')
		} else {
			reject('Promessa rejeitada')
		}
	})
}

console.log(eventoFuturo(true))
console.log(eventoFuturo(false))

