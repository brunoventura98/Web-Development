// fetch(url, config) - Config é opcional

fetch('https://jsonplaceholder.typicode.com/post') // indico que quero todos os posts
    .then(response => response.json()) // vou guardar ela em json
	.then(response => console.log(response)) // imprimir ela em tela


//

const solicitarPosts = async () => {

    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await resp.json();

    let posts = document.getElementById('posts')

    data.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = 
            "<h2> Usando await </h2>" +
            "<h4>" + post.title + "</h4>" +
            "<p>" + post.body + "</p>";
        posts.append(li);
    })

}

solicitarPosts();