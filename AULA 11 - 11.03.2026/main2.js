const eventoFuturo = (res) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			res ? resolve('Promessa resolvida') : reject('Promessa rejeitada')
			}, 2000)
	})
}

eventoFuturo(true)
	.then((response) => {
		console.log(response) // Promessa resolvida
		})
eventoFuturo(false)
	.catch((error) => {
		console.log(error) // Promessa rejeitada
		})

