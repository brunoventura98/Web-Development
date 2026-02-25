// Parse

const emJSON = {id:2, produto: Arroz};
const produto1 = JSON.parse(emJSON);

console.log(typeof emJSON); // string
console.log(typeof produto1); // object
console.log(produto1.produto); // Arroz

const produto2 = JSON.parse(localStorage.getItem("produto1"));
console.log(produto2); // 2