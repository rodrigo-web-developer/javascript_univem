# Atividade Complementar - Desenvolvimento com Javascript (UNIVEM)

Curso de Javascript ministrado para os alunos do primeiro ano de Sistemas de Informação da Universidade Eurípedes de Marília (UNIVEM).

Com o intuito de ensinar aos alunos a programação e o desenvolvimento web utilizando a linguagem de programação Javascript, o curso passa por vários conceitos e pontos importantes que devemos ter em mente ao entrar no mundo de desenvolvimento web.

Visto que o Javascript tem ganhado força com frameworks como ReactJS, VueJS e AngularJS, além da linguagem server-side NodeJS, é importante que antes de sermos ansiosos para entrar de cabeça em um framework que possui suas próprias peculiaridades, aprendamos a utilizar o Javascript na sua forma pura e entender os conceitos que regem a linguagem.

## Conteúdo

### Aula 1:
  - Introdução ao HTML
  - Introdução ao DOM
  - Introdução ao CSS
  - Introdução ao Javascript:
    - Variáveis e seus tipos
    - Fluxo de código (estruturas de seleção e repetição)
    - Funções
    - Manipulação de elementos do DOM
    - Eventos

### Aula 2:
  - Entendendo objetos
  - Entendendo contexto e a keyword this
  - Manipulando elementos do DOM com eventos
  - Entendendo ECMAScript
  - Hoisting 
  - Navegando entre páginas via HTML Anchor 
  - Entendendo a diferença de var, let e const
  
### Aula 3:
  - Criando um router
  - Entendendo estrutura de pilha "history"
  - Entendendo estrutura de uma URL
  - Manipulando "location"
  - Criado web server para rodar aplicação com endereço válido: localhost
  - Introdução ao fetch API:
    - Entendendo fluxo assíncrono
    - Entendendo promise fetch()
    - Entendendo requisições HTTP
    - Solicitando arquivos HTML
  - Atualização parcial do HTML baseado em rota
  
### Aula 4:
  - Indo a fundo com objetos:
    - Entendendo classes (syxtax sugar) e prototypes
    - Entendendo bind de contexto (this)
    - Criando prototypes
  - Entendo contexto dinamico 
  - Gerência de memória com reutilização de referência
  - Indo a fundo com funções:
    - Entendendo arrow function e sua diferença para functions
    - Entendendo e manipulando arguments
    - Entendendo o conceito de função
  - Entendendo fluxos assíncronos e setTimeout
  
### Aula 5:
  - Expressões regulares:
    - Entendendo parâmetros de captura
    - Entendendo flags: global, insensitive
    - Criando expressões para validação de username
    - Entendendo blocos de captura
    - Utilizando funções String: replace, match
    - Exemplos de aplicação de expressões regulares
    
 ### Aula 6:
  - Utilizando fetch API para consultar dados de API externa lendo formato JSON
  - Criando evento custom que dispara toda vez que o conteúdo da página é trocado
    - Entendendo addEventListener e dispatchEvent
  - Manipulando dinamicamente tabelas para mostrar os dados retornados pela API
    - Criando elementos com document.createElement()
  - Introdução ao bootstrap:
    - rows, columns e navbar
  - Explicando qual a necessidade de um loader e pra que ele realmente é usado
  - Introdução à Programação defensiva
  
### Aula 7:
  - Criado formulário de registro de usuário para acesso a API
  - Utilizando viacep para consulta de CEP em formato JSON
    - Preenchendo dados de CEP digitado após evento onfocusout
  - Submetendo formulário de cadastro de usuário 
  - Fazendo POST com fetch e entendendo segundo parâmetro com { method, headers, body }
  - Serializando um formulário em JSON
    - Entendendo JSON.stringify e JSON.parse
  - Utilizando evento "popstate" para recarregar conteúdo após o usuário clicar para voltar à página anterior
  
### Aula 8:
  - Entendendo formas de autenticação e autorização
  - Introdução a autenticação baseada em Token
  - Entendendo JWT
  - Criando formulário de login para solicitar JWT
  - Entendendo armazenamento do browser: cache, session e local storages
  - Guardando token e username em localStorage
  - Criado classes para indicar quais elementos devem aparecer caso usuário esteja autenticado ou não
    - classes is-not-logged e is-logged, manipulando o DOM para verificar se o usuário está logado e mostrar ou não alguns elementos
  - Criado formulário de cadastro de categoria (que requer autorização)
  - Enviando formulário em formato JSON com header Authorization: Bearer {token}
  - Entendendo diferença entre HTTP Status Code 401 e 403
  - Entendendo RESTful API

### Aula 9:
- Finalizado integração com API:
  - Utilizando metodos: GET, POST, PUT, DELETE
  - Recebendo ID por parâmetro
- Aprendendo a criar rotas com templates: 
  - Exemplo: /produto/edit/{id}
  - Lendo ID por parâmetro no path
- Criando select para drop-down de objeto relacionado (selecionando uma categoria para o produto)
- Adicionado coluna de imagem
- Aprendendo a usar o confirm dialog ao solicitar exclusão de um item
- Criado processo de logout
  
## Tecnologias utilizadas:
- Javascript
- HTML
- CSS
- Bootstrap
- ViaCep API
- REST Api para cadastro de produtos: https://javascriptunivem.azurewebsites.net/
  - Documentação: https://www.getpostman.com/collections/82739bd39811ea15c049

## Como executar?
- Requisitos:
  - Python 3.7+: necessário para executar o web-server
- Clone o repositório na sua máquina
- Execute o arquivo server.py
  - Utilize `py server.py` ou `python server.py` dependendo da configuração da sua máquina
- Pronto! A aplicação estará executando em http://localhost:8000
