# Projeto React com Vite e Tailwind CSS

Este projeto é uma configuração básica de React com Vite, TypeScript e Tailwind CSS para o desenvolvimento de interfaces de usuário rápidas e eficientes.

## Vantagens do Vite

- **Desenvolvimento mais rápido**: Tempo de inicialização e HMR mais rápidos.
- **Configuração flexível**: Facilmente customizável através do `vite.config.js`.
- **Suporte moderno**: Funciona com ECMAScript Modules (ESM) e oferece build otimizado com Rollup.

## Quando Usar Vite?

Para novos projetos ou quando a performance e a facilidade de configuração são essenciais, o Vite é uma ótima escolha. O CRA ainda é útil para quem prefere a familiaridade do Webpack e um setup básico sem configuração inicial.

## Passo a Passo de Configuração

### 1. Criar o Projeto com Vite e TypeScript

Inicie um novo projeto com Vite e a template de TypeScript:

```bash
npm create vite@latest meu-projeto
```

### 2. Entrar no Diretório do Projeto

```bash
cd meu-projeto
```

### 3. Instalar Tailwind CSS

Siga os passos abaixo para adicionar Tailwind CSS ao projeto:

1. **Instale o Tailwind CSS e suas dependências:**
   Ainda no terminal, dentro da pasta `aula-tailwind`, execute:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

2. **Configure o Vite plugin:**
   Adicione o `@tailwindcss/viteplugin` à sua configuração do Vite.

   ```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
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

### 4. Iniciar o Servidor de Desenvolvimento

Agora, você pode iniciar o servidor de desenvolvimento com:

```bash
npm run dev
```

## Personalizando o Projeto

Para customizar o tema do Tailwind CSS, edite o arquivo `tailwind.config.js`. Aqui você pode adicionar cores, fontes, espaçamentos, etc.

## Recursos Adicionais

* [Documentação do Vite](https://vitejs.dev/)  
* [Documentação do Tailwind CSS](https://tailwindcss.com/) 

## Fazer o Deploy:

Fazer o deploy pela interface da web, vá até a dashboard da Vercel, clique em "New Project" e selecione seu repositório. O Vercel fará o setup automático.

O Vercel irá detectar automaticamente que você está usando Vite e configurará o deploy.

## Configurar as Rotas:

Se você estiver utilizando o React Router ou qualquer outro sistema de rotas, você pode precisar configurar a página 404 na Vercel para evitar erros 404 ao recarregar. Para isso, você pode criar um arquivo `vercel.json` na raiz do seu projeto e adicionar as seguintes configurações:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Principais Conceitos do Tailwind CSS
### 1. Classes Utilitárias:

* Em vez de escrever um arquivo CSS separado e definir seletores de classes e propriedades CSS, você aplica classes específicas diretamente no HTML.
* Cada classe faz uma tarefa única e pequena. Por exemplo:
    * `text-blue-500`: Define a cor do texto como azul.
    * `bg-gray-100`: Define a cor de fundo como cinza claro.
    * `p-4`: Define um padding de 1rem em todos os lados.
    * `m-2`: Define uma margem de 0.5rem.

### 2. Responsividade e Breakpoints:

* O Tailwind facilita o design responsivo com prefixos de breakpoints. Cada utilitário pode ser usado em diferentes tamanhos de tela com prefixos como `sm:`, `md:`, `lg:`, etc.
* Por exemplo:
    * `text-lg md:text-xl lg:text-2xl`: Define o tamanho do texto de forma responsiva, sendo maior em telas médias e grandes.
    * `p-2 md:p-4 lg:p-8`: Ajusta o padding conforme o tamanho da tela.

## Exemplo de Uso do Tailwind CSS

Aqui está um exemplo de um componente simples estilizado com Tailwind:

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
  <img class="w-full" src="imagem.jpg" alt="Imagem">
  <div class="px-6 py-4">
    <h2 class="font-bold text-xl mb-2 text-gray-800">Título</h2>
    <p class="text-gray-700 text-base">
      Descrição do conteúdo vai aqui. Com o Tailwind, você estiliza de maneira rápida e eficiente.
    </p>
  </div>
</div>
```

Neste exemplo:

* `max-w-sm` define a largura máxima do contêiner.
* `rounded` adiciona bordas arredondadas.
* `overflow-hidden` controla o overflow para elementos filhos.
* `shadow-lg` adiciona uma sombra grande ao contêiner.
* `p-4` adiciona padding ao redor do contêiner.
* `bg-white`, `text-gray-800`, `font-bold`, etc., definem cores e fontes.

## Vantagens do Tailwind CSS
* **Produtividade**: Acelera a construção de interfaces sem escrever CSS manualmente.
* **Consistência**: Facilita o design consistente com classes reutilizáveis.
* **Personalização**: Totalmente customizável com tema próprio.