# Primeiros passos:

## 1. Vamos começar instalando o que nosso projeto precisa:

Você precisará instalar o node para esse tutorial, siga [esse link](https://nodejs.org/en/download/).

Faça download desse projeto [nesse link](https://github.com/joaomarcuslf/node-tutorial/archive/refs/heads/main.zip), descompacte ele em algum lugar.

Abra esse projeto em um editor de texto, de preferência o [VS Code](https://code.visualstudio.com/).

Vá ao seu editor, e abra a pasta onde esse projeto está.

Agora precisamos abrir um terminal no seu editor, se você estiver usando o VS Code, vá em `Terminal > Novo terminal`, digite no seu terminal esse comando e dê `enter`.

```sh
$ npm install
```

Todo projeto tem dependência, essa dependência são o que fazem nosso código funcionar.

## 2. Vamos começar com o front-end da nossa aplicação?

Crie um arquivo chamado `index.html` no seu projeto, esse será o arquivo de entrada do seu site, por padrão o navegador acessa primeiro esse tipo de arquivo. Dentro desse arquivo, cole esse estrutura inicial do HTML.

* HTML é um tipo de arquivo muito utilizado na web, ele é responsável por exibir elementos em uma tela, e ele nele é onde vamos trabalhar mais.

```html
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">

    <title>Nome da página</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
  </head>

  <body>
  </body>

  <style>
  </style>

  <script>
  </script>

</html>
```

Toda página HTML contém alguns blocos, o primeiro que vamos fala é o HEAD, HEAD é onde ficam informações transmitidas para o navegador, como nome da página no `<title>`, importação de CSS e Fonts, qual tipo de caracteres utilizamos, entre outros, mas por hora, vamos ver como aparece sua página.

Rode no mesmo terminal que você usou antes esse comando:

```sh
$ npm install
```

Seu navegador deve abrir um link, nesse link a página provavelmente está em branco, o que precisamos fazer agora, é adicionar um pouco de conteúdo.

Dentro de onde está `<body>` até `</body>`, você pode adicionar o que vai ser exibido na tela, vamos adicionar um título e uma lista de pokemons? Nós estamos utilizando o [Bulma](https://bulma.io/) para facilitar construir uma tela mais bonita, depois vamos trabalhar nela.

Adicione dentro do `<body>`:

```html
<div class="container">
    <div class="content">
        <h1 class="title"> Meus pokemons: </h1>
        <ol>
            <li>Pikachu</li>
        </ol>
    </div>
</div>
```

Vamos conhecer cada elemento. Primeiro o `<div class="container">`, esse é um elemento que adicionar uma margin lateral e ele agrupa um bloco na tela. Depois nós temos `<div class="content">`, que envolve o nosso conteúdo, seguindo pelo `<h1 class="title">` e `<ol>` + `<li>`, responsáveis pelo título e listagem respectivamente.
