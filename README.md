# Crud de usuários

<div align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">  <img src="	https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
</div>

## 🔖 Sobre

Este projeto foi um desafio proposto por uma vaga de emprego como desenvolvedor web. O desafio proposto foi de criar um CRUD, contendo campos obrigatórios para o preenchimento dos dados exigidos e não aceitando valores nulos.

#

### O que é CRUD? 🤔

CRUD é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados:

✅ C: Create (criar) - criar um novo registro.

👁 R: Read (ler) - ler (exibir) as informações de um registro.

♻️ U: Update (atualizar) - atualiza os dados do registro.

❌ D: Delete (apagar) - apaga um registro.

Por exemplo, se você precisa desenvolver desde uma simples agenda telefônica até um sistema complexo de gestão de faturamento de pedidos, você precisará realizar essas 4 ações para manipular as tabelas do banco de dados de seu sistema.

Do ponto de vista do desenvolvedor, ele precisará criar as tabelas (modelos) do banco de dados, funções (controles) que atualizarão o banco de dados e as interfaces (visões), como página web ou aplicativo mobile, em que os usuários irão interagir com os dados.

Em sistemas mais sofisticados, os dados do CRUD podem ser manipulados por outros sistemas via API - Application Programming Interface (em tradução livre, “Interface de Programação de Aplicativos”).

#

[Saiba mais](https://angelopublio.com.br/blog/crud).

## Imagens da aplicação em tela:

Tela inicial:

![home](https://user-images.githubusercontent.com/71888055/168917198-9c90d56a-955f-4155-b6e8-d2d3b950bf5c.PNG)

Tela de cadastro:

![cadastrar](https://user-images.githubusercontent.com/71888055/168917240-be811d61-27b0-4c26-b938-7540c0c92e51.PNG)

Tela de listagem:

![listagem](https://user-images.githubusercontent.com/71888055/168917283-f111e376-1414-45ab-9154-2e4e47f90a46.PNG)

Editando:

![modal](https://user-images.githubusercontent.com/71888055/168917326-95c8be97-bd55-4932-815b-51c91cfb5252.PNG)

## Ferramentas utilizadas 🖥️🛠️👨‍💻📚

- [Vs Code](https://code.visualstudio.com/)
- HTML
- CSS
- JavaScript
- [NodeJs](https://nodejs.org/en/)
    - [Express](https://expressjs.com/pt-br/)
    - [Nodemon](https://www.npmjs.com/package/nodemon)
    - [BodyParser](https://www.npmjs.com/package/body-parser)
    - [Cors](https://www.npmjs.com/package/cors)
    - [Morgan](https://www.npmjs.com/package/morgan)
    - [Mysql](https://www.npmjs.com/package/mysql)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)


## Modo de usar 🧐

1. Ao baixar o repositório, extraia os arquivos no local desejado e abra o projeto no Visual Studio Code.

2.	Abra o terminal do VS Code e digite o seguinte comando para instalar as dependências: npm install

3.	Abra o arquivo do banco de dados no MySQL ou se preferir crie o banco de dados com o nome de “empregos_aqui” e a tabela com o nome de “usuários”, depois crie as colunas com os campos:

    - Id
    - nome_completo
    - cpf
    - email
    - telefone_cel
    - created_at
    - updated_at

Todos os campos não aceitando valores nulos.

![banco](https://user-images.githubusercontent.com/71888055/168919794-b6efaeb3-ae07-48ea-b6be-285ccd52853f.PNG)


## Link do projeto

- [CRUD](https://athilas-silva.github.io/crud-register/index.html)
