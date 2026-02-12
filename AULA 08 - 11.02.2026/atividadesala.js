/* Para praticar 

Construa uma lista de compras:

- Adicione um campo para o usuário inserir um item e um botão para "Salvar".
- Quando o usuário clicar no botão "Salvar", armazene o item no localStorage;
- Insira um botão "Visualizar" para exibir na tela todos os itens da lista de compras que estão armazenados no localStorage;
- Insira também um botão "Limpar" para apagar todos os itens armazenados no localStorage.
*/

function salvaritem() {
    let inserir = document.getElementById(inserir)
    localStorage.setItem(inserir)
}


let visualizar = document.getElementById(visualizar)

console.log(salvaritem())