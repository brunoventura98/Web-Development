const BD = [
	{ id: 1, nome: 'Produto 1', preco: 1500},
	{ id: 2, nome: 'Produto 2', preco: 2500},
	{ id: 3, nome: 'Produto 3', preco: 3500}
]

const pedirProdutos = () => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			resolve(BD)
		}, 4000)
	})
}

let produtos = [] // inicializamos com um array vazio

// função que gera a visualização dos produtos
const renderProdutos = (arr) => {
	console.log(produtos)
}

// Pedimos os dados e geramos a visualização de forma assíncrona
pedirProdutos()
	.then((res) => {
		produtos = res
    })