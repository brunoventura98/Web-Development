Projeto desenvolvido para a disciplina de Web Development — Checkpoint 4.

🌿 EcoTrend — E-commerce de Produtos Sustentáveis
EcoTrend é um e-commerce front-end de produtos sustentáveis e ecológicos, desenvolvido como projeto acadêmico com foco em manipulação de DOM, armazenamento local e carregamento de dados via JSON.

📋 Descrição
A plataforma reúne produtos de quatro categorias:

Roupas e Acessórios Sustentáveis
Beleza e Cuidados Pessoais Naturais
Itens para Casa Sustentáveis
Tecnologia Verde

✨ Funcionalidades

Carrinho de compras dinâmico — produtos adicionados aparecem na sidebar em tempo real, com cálculo automático do total
Filtro por categoria — botões filtram os produtos sem recarregar a página
Persistência com localStorage — o carrinho é mantido mesmo após fechar o navegador
Carregamento via JSON — os produtos são carregados do arquivo produtos.json usando fetch e renderizados dinamicamente com JavaScript


🗂️ Estrutura de Arquivos
EcoTrend/
├── index.html       # Estrutura da página
├── style.css        # Estilização
├── main.js          # Lógica JavaScript
├── produtos.json    # Dados dos produtos
└── README.md        # Este arquivo

🚀 Como Executar

⚠️ O projeto usa fetch() para carregar o JSON, por isso precisa rodar em um servidor local — não funciona abrindo o index.html diretamente no navegador.

📚 Conceitos JavaScript Aplicados

Manipulação de DOM, localStorage, Promises, Array methods

👤 Autor
Bruno Cesar Capella Ventura - RM568316