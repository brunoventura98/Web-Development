# 👨‍💻 Requisições HTTP em React: Fetch API e Async/Await

## Introdução

Nesta aula, vamos mergulhar no mundo das **requisições HTTP** em aplicações React. O objetivo é entender como buscar dados de uma **API REST** de forma assíncrona, utilizando as ferramentas nativas do JavaScript: a **Fetch API** e a sintaxe **`async/await`**. Vamos cobrir o gerenciamento de estado com `useState` e a execução de efeitos colaterais com `useEffect`.

## 🚀 Passo 1: Configurando o Projeto com Vite

O Vite é uma ferramenta de build rápida para projetos web modernos. Vamos começar criando nosso ambiente de desenvolvimento.

1. **Abra seu terminal** ou linha de comando.

2. **Crie um novo projeto React com Vite:**

   ```bash
   npm create vite@latest aula-fetch
   ```

   * `aula-fetch`: É o nome da pasta do seu projeto.

3. **Navegue até a pasta do projeto:**

   ```bash
   cd aula-fetch
   ```

4. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   Seu navegador deve abrir automaticamente (ou você pode acessar manualmente) `http://localhost:5173` (ou outra porta disponível) para ver a aplicação React inicial.

---

## 💅 Passo 2: Instalando e Configurando o Tailwind CSS

Para deixar a interface mais apresentável e moderna, vamos adicionar o Tailwind CSS ao nosso projeto Vite.

1. **Instale o Tailwind CSS e suas dependências:**
   Ainda no terminal, dentro da pasta `aula-fetch`, execute:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Configure o Vite plugin:**
   Adicione o `@tailwindcss/viteplugin` à sua configuração do Vite.

   ```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(),
         tailwindcss(),
    ],
   })
   ```

3. **Adicione as diretivas do Tailwind ao seu CSS:**
   Abra o arquivo `src/index.css` (ou `src/App.css` se preferir) e adicione as diretivas `@tailwind` no topo:

   ```css
   /* src/index.css (ou src/App.css) */
   @import "tailwindcss";
   ```

   Certifique-se de que este arquivo CSS está sendo importado em seu `main.jsx` (ou `main.tsx`) ou `App.jsx`. O projeto já vem com `import './App.css'`, então podemos usar ele.

---

## 💾 Passo 3: Criando o Componente `DataFetcher`

Este será o coração da nossa aula, onde a mágica das requisições HTTP acontece.

1. **Crie uma nova pasta `components`** dentro de `src`:
   `src/components/`

2. **Crie um novo arquivo `DataFetcher.jsx`** dentro de `src/components`:
   `src/components/DataFetcher.jsx`

3. **Cole o seguinte código** dentro de `src/components/DataFetcher.jsx`:

   ```jsx
   // src/components/DataFetcher.jsx
   import React, { useState, useEffect } from 'react';

   // Componente funcional DataFetcher para demonstrar requisições HTTP
   function DataFetcher() {
     // Estado para armazenar os dados recebidos da API
     const [data, setData] = useState(null);
     // Estado para indicar se a requisição está em andamento
     const [loading, setLoading] = useState(true);
     // Estado para armazenar mensagens de erro, se houver
     const [error, setError] = useState(null);

     // useEffect é usado para executar efeitos colaterais (como requisições HTTP)
     // após a renderização do componente. O array vazio de dependências []
     // garante que a função `fetchData` seja executada apenas uma vez.
     useEffect(() => {
       // Função assíncrona para buscar dados da API.
       // O uso de `async` permite usar `await` dentro dela.
       async function fetchData() {
         try {
           // Define o estado de carregamento como true no início da requisição.
           setLoading(true);
           // Limpa erros anteriores.
           setError(null);

           // Faz a requisição HTTP usando a Fetch API.
           // A API `JSONPlaceholder` é uma excelente opção para testes.
           const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

           // Verifica se a resposta da rede foi bem-sucedida (status 200-299).
           // Se `response.ok` for falso, significa que houve um erro HTTP.
           if (!response.ok) {
             // Lança um erro customizado para ser capturado pelo bloco `catch`.
             throw new Error(`Erro de rede: ${response.status} ${response.statusText}`);
           }

           // Converte o corpo da resposta para JSON.
           // Isso também é uma operação assíncrona.
           const jsonData = await response.json();

           // Atualiza o estado `data` com os dados recebidos.
           setData(jsonData);

         } catch (err) {
           // Captura e armazena qualquer erro que ocorra durante o fetch ou processamento.
           console.error("Falha ao buscar dados:", err);
           setError(err.message); // Define a mensagem de erro para exibição.
         } finally {
           // O bloco `finally` é executado sempre, independentemente de haver erro ou sucesso.
           // Aqui, garantimos que o estado de carregamento seja definido como false.
           setLoading(false);
         }
       }

       // Chama a função de busca de dados.
       fetchData();
     }, []); // Array de dependências vazio significa que este efeito roda apenas uma vez.

     // --- Lógica de Renderização Condicional ---

     // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados.
     if (loading) {
       return (
         <div className="flex justify-center items-center h-screen bg-gray-100">
           <div className="text-xl font-semibold text-gray-700 p-4 rounded-lg shadow-md bg-white">
             Carregando dados...
           </div>
         </div>
       );
     }

     // Exibe uma mensagem de erro se algo der errado durante a requisição.
     if (error) {
       return (
         <div className="flex justify-center items-center h-screen bg-red-100">
           <div className="text-xl font-bold text-red-700 p-4 rounded-lg shadow-md bg-white border border-red-400">
             Erro: {error}
           </div>
         </div>
       );
     }

     // Se os dados foram carregados com sucesso, exibe-os.
     return (
       <div className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
         <h2 className="text-3xl font-bold text-blue-800 mb-6">Dados da API</h2>
         <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
           {data ? (
             <>
               <h3 className="text-2xl font-semibold text-gray-800 mb-2">{data.title}</h3>
               <p className="text-gray-600 mb-4">{data.body}</p>
               <p className="text-sm text-gray-500">ID do Post: {data.id}</p>
               <p className="text-sm text-gray-500">ID do Usuário: {data.userId}</p>
             </>
           ) : (
             <p className="text-gray-600">Nenhum dado encontrado.</p>
           )}
         </div>
       </div>
     );
   }

   export default DataFetcher;
   ```

### **Explicação do `DataFetcher.jsx`:**

* **Estados (`useState`):**

  * `data`: Armazena o objeto de dados retornado pela API. Começa como `null`.

  * `loading`: Um booleano que indica se a requisição está em andamento. Inicia como `true` porque a requisição começa assim que o componente é montado.

  * `error`: Armazena qualquer mensagem de erro que possa ocorrer. Começa como `null`.

* **`useEffect`:**

  * É o local ideal para fazer requisições de dados em componentes funcionais. Ele executa a função que passamos como argumento após cada renderização do componente.

  * O **array de dependências vazio `[]`** é crucial. Ele garante que a função `fetchData` seja executada **apenas uma vez** após a montagem inicial do componente, prevenindo requisições infinitas.

* **Função `fetchData` (`async`):**

  * Declarada como `async` para permitir o uso da palavra-chave `await` dentro dela, tornando o código assíncrono mais fácil de ler e escrever.

  * **`try...catch...finally`:**

    * **`try`**: Contém o código que pode gerar exceções (erros). Aqui, fazemos a chamada `fetch`.

    * **`const response = await fetch(...)`**: Usa a **Fetch API** para fazer uma requisição HTTP `GET` para a URL fornecida (aqui, estamos usando a JSONPlaceholder para um post de exemplo). O `await` garante que esperamos pela resposta antes de prosseguir.

    * **`if (!response.ok)`**: É vital verificar a propriedade `ok` da resposta. Se for `false`, significa que a requisição HTTP resultou em um erro (ex: 404 Not Found, 500 Internal Server Error). Neste caso, lançamos um `Error` para que ele seja capturado pelo `catch`.

    * **`const jsonData = await response.json()`**: Converte o corpo da resposta HTTP para um objeto JavaScript JSON. Isso também é uma operação assíncrona, por isso o `await`.

    * **`setData(jsonData)`**: Atualiza o estado `data` com os dados recebidos.

    * **`catch (err)`**: Se qualquer erro ocorrer no bloco `try` (problemas de rede, erros HTTP que lançamos, etc.), ele é capturado aqui. Logamos o erro no console e atualizamos o estado `error`.

    * **`finally`**: Este bloco é **sempre** executado, independentemente de a requisição ter sido bem-sucedida ou ter falhado. É o lugar perfeito para definir `setLoading(false)`, garantindo que o indicador de carregamento seja desativado.

* **Renderização Condicional:**

  * O componente renderiza diferentes UIs dependendo do estado:

    * Se `loading` for `true`, exibe uma mensagem de "Carregando...".

    * Se `error` não for `null`, exibe a mensagem de erro.

    * Se tudo correr bem e `data` tiver conteúdo, exibe o título, corpo e IDs do post.

    * As classes CSS do Tailwind (`flex`, `justify-center`, `bg-gray-100`, etc.) são usadas para estilizar o feedback visual.

---

## 💻 Passo 4: Integrando no `App.jsx`

Agora que nosso componente `DataFetcher` está pronto, precisamos incorporá-lo à nossa aplicação principal.

1. **Abra o arquivo `src/App.jsx`**.

2. **Substitua o conteúdo existente** pelo seguinte código:

   ```jsx
   // src/App.jsx
   import './index.css'; // Importe o CSS global (ou App.css) para que o Tailwind funcione
   import DataFetcher from './components/DataFetcher'; // Importe o novo componente

   function App() {
     return (
       <div className="App">
         <h1 className="text-4xl font-extrabold text-center py-8 bg-blue-600 text-white shadow-lg">
           Aula: Requisições HTTP em React
         </h1>
         {/* Renderiza o componente que faz a requisição */}
         <DataFetcher />
       </div>
     );
   }

   export default App;
   ```

### **Explicação do `App.jsx`:**

* **`import './index.css';`**: Garante que o CSS do Tailwind (onde configuramos as diretivas `@tailwind`) seja carregado e aplicado globalmente.

* **`import DataFetcher from './components/DataFetcher';`**: Importa o componente que acabamos de criar.

* **`<DataFetcher />`**: Renderiza o componente `DataFetcher` dentro do componente `App`, fazendo com que ele execute sua lógica de requisição e exiba os dados na tela.

---

## ✅ Verificando o Resultado

1. Certifique-se de que o servidor de desenvolvimento do Vite (`npm run dev`) ainda está rodando.

2. Abra seu navegador em `http://localhost:5173`.

Você deverá ver um título "Minha Aula: Requisições HTTP em React", seguido de uma mensagem de "Carregando dados..." (por um breve momento) e, finalmente, os dados do post de exemplo da API JSONPlaceholder formatados.

---

## 💡 Pontos Essenciais da Aula

* **`useState`**: O padrão ouro para gerenciar o **estado** dos componentes funcionais (dados, carregamento, erros).

* **`useEffect`**: A forma **correta** de realizar **efeitos colaterais** (como requisições HTTP) e de controlar o ciclo de vida do componente em React. O array de dependências (`[]`) é crucial para evitar loops indesejados.

* **`Fetch API`**: A API nativa do navegador para fazer requisições HTTP. Leve e não exige bibliotecas externas.

* **`async/await`**: Uma sintaxe elegante e legível para trabalhar com **Promises**, tornando o código assíncrono mais parecido com o síncrono.

* **Tratamento de Erros (`try...catch...finally`):** Indispensável para criar aplicações robustas. Garante que você lide com falhas de rede e erros da API de forma controlada.

* **Renderização Condicional:** Permite que você mostre diferentes partes da UI (`Carregando...`, `Erro: ...`, `Dados`) com base no estado da aplicação, oferecendo um bom feedback ao usuário.

---

## 📚 Próximos Passos e Desafios

Com este fundamento, você pode expandir a aula para explorar:

1. **Listando Múltiplos Itens:** Modificar o `DataFetcher` para buscar uma lista de posts (`/posts`) e renderizá-los em uma lista (ex: `<ul>`).

2. **Requisições Interativas:** Adicionar um botão "Recarregar Dados" que dispare a requisição novamente, ou um campo de entrada para buscar dados específicos por ID.

3. **Envio de Dados (`POST`/`PUT`/`DELETE`):** Demonstrar como enviar dados para a API (criar, atualizar, deletar recursos) usando diferentes métodos HTTP com a Fetch API.

4. **Autenticação:** Como incluir cabeçalhos (`headers`) para enviar tokens de autenticação (`Authorization: Bearer <token>`).
