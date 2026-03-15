let produtos = [];
let categoriaAtiva = 'todos';
 
function carregarProdutos() {
  return new Promise((resolve, reject) => {
    fetch('produtos.json')
      .then(res => res.json())
      .then(data => { produtos = data; resolve(data); })
      .catch(err => reject(err));
  });
}
 
function renderizarProdutos(lista) {
  const grid = document.getElementById('grid-produtos');
  grid.innerHTML = '';
 
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.nome}</h3>
      <p>Categoria: ${p.categoria}</p>
      <p>Estoque: ${p.quantidade} unidades</p>
      <p class="preco">R$ ${p.valor.toFixed(2).replace('.', ',')}</p>
      <button onclick="adicionarProduto(${p.id})">Adicionar ao Carrinho</button>
    `;
    grid.appendChild(card);
  });
}
 
function aplicarFiltro() {
  const filtrados = categoriaAtiva === 'todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaAtiva);
  renderizarProdutos(filtrados);
}
 
document.querySelectorAll('.btn-filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    categoriaAtiva = btn.dataset.cat;
    aplicarFiltro();
  });
});
 
function adicionarProduto(id) {
  const produto = produtos.find(p => p.id === id);
  let carrinho = obterCarrinho();
  const existente = carrinho.find(p => p.id === id);
 
  if (existente) {
    existente.qtd += 1;
  } else {
    carrinho.push({ id: produto.id, nome: produto.nome, valor: produto.valor, qtd: 1 });
  }
 
  salvarCarrinho(carrinho);
  atualizarCarrinho();
}
 
function atualizarCarrinho() {
  const carrinho = obterCarrinho();
  const lista  = document.getElementById('lista-carrinho');
  const vazio  = document.getElementById('carrinho-vazio');
  const footer = document.getElementById('sidebar-footer');
 
  lista.innerHTML = '';
 
  if (carrinho.length === 0) {
    vazio.style.display = 'block';
    footer.style.display = 'none';
  } else {
    vazio.style.display = 'none';
    footer.style.display = 'flex';
 
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.className = 'item-carrinho';
      li.textContent = `${item.nome} x${item.qtd} — R$ ${(item.valor * item.qtd).toFixed(2).replace('.', ',')}`;
      lista.appendChild(li);
    });
 
    const total = carrinho.reduce((acc, p) => acc + p.valor * p.qtd, 0);
    document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}
 
function limparCarrinho() {
  salvarCarrinho([]);
  atualizarCarrinho();
}
 
function finalizarCompra() {
  salvarCarrinho([]);
  atualizarCarrinho();
  alert('Compra finalizada! Obrigado. 🌿');
}
 
function obterCarrinho() {
  return JSON.parse(localStorage.getItem('ecotrend_carrinho')) || [];
}
 
function salvarCarrinho(carrinho) {
  localStorage.setItem('ecotrend_carrinho', JSON.stringify(carrinho));
}
 
carregarProdutos()
  .then(() => {
    aplicarFiltro();
    atualizarCarrinho();
  })
  .catch(err => {
    document.getElementById('grid-produtos').innerHTML = `<p>${err.message}</p>`;
  });