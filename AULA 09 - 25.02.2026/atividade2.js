/* Exercício: Simule o armazenamento e recuperação de produtos de um carrinho de compras de uma loja online no localStorage

- Use um array para armazenar os produtos;
- Para cada produto informe: id, nome, valor, quantidade;
- Ao inicializar sua aplicação verifique se há produtos no carrinho;
- Caso já existam produtos no carrinho, exiba esses produtos
- Caso não existam, exiba a mensagem "O carrinho está vazio!"
*/

function adicionarProduto(id, nome, valor, qtd) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push({id, nome, valor, qtd});

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')); 

    if (carrinho && carrinho.length > 0 ) { // verificação se o carrinho está vazio
        const listaProdutos = document.getElementById('lista-produtos');

        listaProdutos.innerHTML = '';

        carrinho.forEach(produto => {
            const li = document.createElement('li'); 
            li.textContent = `${produto.nome} - Qtd: ${produto.qtd} 
            - Valor: ${produto.valor.toFixed(2)}`;

            listaProdutos.appendChild(li);
        });
    }

    else {
        const listaProdutos = document.getElementById('lista-produtos');

        listaProdutos.innerHTML = "O carrinho está vazio!"; 
    }
}

exibirCarrinho();