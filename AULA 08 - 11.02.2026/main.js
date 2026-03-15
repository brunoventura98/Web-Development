/* [planejamento-aulas.vercel.app](http://planejamento-aulas.vercel.app) →  site do prof novo (Lucas) 

[github.com/ProfLucasSousa](http://github.com/ProfLucasSousa) 

Storage e Json

Storage

API de armazenamento web permite armazenar dados de forma local no navegador sem a necessidade de realizar uma conexão com um servidor.

- É vantajoso para preservar informações

Podemos ver abrindo o console na web e olhar na aba “aplication” */

localStorage.setItem('boas-vindas','Olá, Dev!');
localStorage.setItem('valido', true);
localStorage.setItem('numero', 20);

let mensagem = localStorage.getItem('boas-vindas'); // Nessa segunda, eu consigo manipular a chave, salvando em uma variável, para encontrar o valor pré-definido
let tipo = localStorage.getItem('valido');
let numero = localStorage.getItem('numero');

console.log(mensagem); // 'Olá, Dev!'
console.log(tipo); // 'true'
console.log(numero); // '20' 

// sessionStorage - Só existe dentro da aba atual do navegador. Outra aba com a mesma página terá outro sessionStorage, ou seja, abas não se conversam

// para utilizar sessionStorage é a mesma coisa que acima

sessionStorage.setItem('selecionados', [1,2,3]);
sessionStorage.setItem('valido', false);
sessionStorage.setItem('email','info@email.com');

let lista = sessionStorage.getItem('selecionados').split(",");
let tipo2 = sessionStorage.getItem('valido') == 'true';
let email = sessionStorage.getItem('email');

console.log(lista);
console.log(tipo2);
console.log(email); 

/* Percorrendo o Storage

- É possível obter todos os valores armazenados

O loop a ser usado é o for com o método key:*/

for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    console.log("Chave: " + chave + " valor:" + localStorage.getItem(chave));
}

// Eliminar dados do Storage

localStorage.setItem('boas-vindas','Olá, Dev!');
sessionStorage.setItem('valido',true);

localStorage.removeItem('boas-vindas');
sessionStorage.removeItem('valido');

localStorage.clear()
sessionStorage.clear()

