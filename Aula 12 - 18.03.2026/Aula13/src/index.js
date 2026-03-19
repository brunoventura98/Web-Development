// Importa o módulo 'fs' (File System) do Node.js, que permite trabalhar com o sistema de arquivos.
const fs = require('fs');

// Acessa os argumentos passados na linha de comando através da propriedade 'argv' do objeto 'process'.
// 'process.argv' é um array que contém os argumentos da linha de comando.
// O primeiro elemento é o caminho para o node.js, o segundo é o caminho do arquivo JavaScript em execução,
// e o terceiro (índice 2) é o caminho do arquivo que queremos ler.
const caminhoArquivo = process.argv;

// Armazena o caminho do arquivo (passado como terceiro argumento na linha de comando) na variável 'link'.
const link = caminhoArquivo[2]; 

// Usa o método 'readFile' do módulo 'fs' para ler o conteúdo do arquivo especificado por 'link'.
// O primeiro argumento é o caminho do arquivo, o segundo é o encoding (aqui 'utf-8', para garantir que o texto seja lido corretamente),
// e o terceiro é uma função de callback que será executada após a leitura do arquivo.
fs.readFile(link, 'utf-8', (erro, texto) => {
  // A função de callback recebe dois parâmetros: 'erro' e 'texto'.
  // Se ocorrer um erro durante a leitura, 'erro' conterá detalhes sobre o problema.
  // Se a leitura for bem-sucedida, 'texto' conterá o conteúdo do arquivo.

  // Exibe o conteúdo do arquivo no console.
  // console.log(texto);
  verificaPalavrasDuplicadas(texto)
});

// Este código lê um arquivo cujo caminho é passado como argumento na linha de comando e imprime o conteúdo desse arquivo no console.
//node src/index.js arquivos/texto-web.txt

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  console.log(resultado);
}

//1. Recebe o texto: A função verificaPalavrasDuplicadas recebe um parâmetro texto, que é a string onde queremos buscar as palavras duplicadas.

//2. Cria uma lista de palavras:
// const listaPalavras = texto.split(' ');: Essa linha divide o texto em uma lista de palavras, utilizando o espaço como separador. Cada palavra se torna um elemento dessa lista.

//3. Cria um objeto para armazenar os resultados:
// const resultado = {};: Um objeto vazio é criado para armazenar as palavras e suas respectivas contagens. As propriedades desse objeto serão as palavras únicas e os valores serão os números de ocorrências.

//4. Itera sobre a lista de palavras:
// listaPalavras.forEach(palavra => { ... }): Essa linha percorre cada palavra na lista listaPalavras. Para cada palavra:
// resultado[palavra] = (resultado[palavra] || 0) + 1:
// resultado[palavra]: Acessa ou cria uma propriedade no objeto resultado com o nome da palavra atual.
// (resultado[palavra] || 0): Verifica se a propriedade já existe. Se existir, pega o valor atual (que é um número). Se não existir, utiliza 0 como valor inicial.
// + 1: Adiciona 1 ao valor existente ou inicializado (0), incrementando a contagem da palavra.

//5. Imprime o resultado:
// console.log(resultado);: Ao final, o objeto resultado é impresso no console, mostrando a contagem de cada palavra.