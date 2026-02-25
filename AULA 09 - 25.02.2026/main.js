// Stringify

const produto1 = { id: 2, produto: "Arroz"}; localStorage.setItem("produto1", produto1); 
const emJSON = JSON.stringify(produto1); // forma ideal de armazenar, código mais limpo

console.log(emJSON); // {"id":2,"produto":"Arroz"}
console.log(typeof produto1); // object
console.log(typeof emJSON); // string

localStorage.setItem("produto1", emJSON); // é armazenado {"id":2,"produto":"Arroz"}

// Armazenar Array de objetos

const produtos = [
	{ id: 1, produto: "Arroz", preco: 125 },
	{ id: 2, produto: "Macarrão", preco: 70 },
	{ id: 3, produto: "Pão", preco: 50 },
	{ id: 4, produto: "Pudim", preco: 100 }
];

const armazenarLocal = (chave, valor) => {localStorage.setItem(chave,valor)}; 

// armazenar produto por produto
for (const produto of produtos) {
	armazenarLocal(produto.id,JSON.stringify(produto));
}

// ou armazenar array completo
armazenarLocal("listaProdutos", JSON.stringify(produtos));

// Obter Array armazenado

class Produto { //A classe serve como um molde para criar objetos que representam produtoss.
	constructor(obj) {
		this.nome = obj.produto.toUpperCase(); // Transforma em maiúsculas
		this.preco = parseFloat(obj.preco); // Converte o preço para nº de ponto flutuante
}
somaICMS() {
	this.preco = this.preco * 1.21; // Calcula o preço com ICMS (21%)
	}
}

//Obtemos a lista de produtos armazenados
const armazenados = JSON.parse(localStorage.getItem("listaProdutos"));
const produtos1 = [];
// Iteramos os armazenados com for... of para transformar todos seus objetos no tipo produto.
for (const objeto of armazenados)
	produtos1.push(new Produto(objeto));
// Agora temos o objeto produtos e podemos usar seus métodos
for (const produto of produtos1)
	produto.somaICMS();
// Armazenamos os produtos atualizados no localStorage
localStorage.setItem("listaProdutos", JSON.stringify(produtos1));