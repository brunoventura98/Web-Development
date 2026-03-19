**Exemplo 1: Hello, World!**
- **Objetivo:** Familiarizar-se com a execução de um script básico em Node.js.
- **Código:**
  ```javascript
  console.log("Hello, World!");
  ```
- **Instruções:**
  1. Criar um arquivo `hello.js`.
  2. Escrever o código acima.
  3. Executar o script no terminal com o comando `node hello.js`.

############################################################

**Exemplo 2: Operações Matemáticas Simples**
- **Objetivo:** Aprender a executar operações matemáticas básicas em Node.js.
- **Código:**
  ```javascript
  const num1 = 5;
  const num2 = 3;

  console.log("A soma é:", num1 + num2);
  console.log("A subtração é:", num1 - num2);
  console.log("A multiplicação é:", num1 * num2);
  console.log("A divisão é:", num1 / num2);
  ```
- **Instruções:**
  1. Criar um arquivo `math.js`.
  2. Inserir o código acima.
  3. Executar o script com `node math.js` e observar os resultados no console.

############################################################

**Exemplo 3: Testando no REPL**
- **Objetivo:** Explorar o REPL para testar comandos JavaScript de forma interativa.
- **Instruções:**
  1. Digitar `node` no terminal para iniciar o REPL.
  2. Testar operações matemáticas e funções simples:
     ```javascript
     const num1 = 10;
     const num2 = 2;
     num1 * num2;
     ```
  3. Explorar comandos como `.help` e `.exit`.

############################################################

**Exemplo 4: Criando um Projeto com npm**
- **Objetivo:** Iniciar um projeto Node.js e instalar pacotes básicos.
- **Instruções:**
  1. No terminal, dentro de uma nova pasta de projeto, rodar `npm init -y` para gerar um `package.json` básico.
  2. Instalar o pacote `express` com `npm install express`.
  3. Criar um arquivo `index.js` e adicionar o seguinte código:
     ```javascript
     const express = require('express');
     const app = express();

     app.get('/', (req, res) => {
       res.send('Hello, Express!');
     });

     app.listen(3000, () => {
       console.log('Servidor rodando na porta 3000');
     });
     ```
  4. Executar o servidor com `node index.js` e acessar `http://localhost:3000` no navegador.

############################################################

**Exemplo 5: Criando Scripts no package.json**
- **Objetivo:** Automatizar a execução de comandos com scripts npm.
- **Instruções:**
  1. No `package.json`, adicionar um script de start:
     ```json
     "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
     }
     ```
  2. Instalar `nodemon` com `npm install --save-dev nodemon`.
  3. Executar o servidor em modo de desenvolvimento com `npm run dev`.

############################################################

**Exemplo 6: Criando e Importando Módulos Simples**
- **Objetivo:** Dividir o código em módulos para melhorar a organização.
- **Passos:**
  1. Criar um arquivo `math.js` com o seguinte código:
     ```javascript
     function add(a, b) {
       return a + b;
     }

     function subtract(a, b) {
       return a - b;
     }

     module.exports = { add, subtract };
     ```
  2. Criar um arquivo `index.js` que importa e usa o módulo `math.js`:
     ```javascript
     const math = require('./math');

     console.log("A soma é:", math.add(10, 5));
     console.log("A subtração é:", math.subtract(10, 5));
     ```
  3. Executar `node index.js` e verificar a saída no console.

############################################################

**Exemplo 7: Utilizando Módulos Nativos**
- **Objetivo:** Aprender a usar módulos nativos do Node.js, como `fs` para trabalhar com o sistema de arquivos.
- **Código:**
  ```javascript
  const fs = require('fs');

  fs.writeFile('message.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
  });
  ```
- **Instruções:**
  1. Criar um arquivo `fileOperations.js` e adicionar o código acima.
  2. Executar `node fileOperations.js` para criar o arquivo `message.txt`.
  3. Abrir `message.txt` para verificar o conteúdo gerado.