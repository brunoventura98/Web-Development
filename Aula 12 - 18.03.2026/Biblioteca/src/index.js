const fs = require('fs'); // módulo fs é o modulo que lê texto
const caminhoArquivo = process.argv; // lê o diretório de um arquivo;
const link = caminhoArquivo[2]; // indico a posição do que você quer que seja lido, por exemplo testar: node src/index.js teste

fs.readFile(link, 'utf-8', (erro, texto) => {
    verificaPalavrasDuplicadas(texto);
}) // precisa de 3 argumentos: 

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {}; 
    listaPalavras.forEach(palavra => { // para cada palavra, ser adicionada em resultado, se a palavra já estiver lá, somar + 1
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });
    console.log(resultado);
} 