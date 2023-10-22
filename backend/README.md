<h1 align="center" font-family="pattaya">My Person</h1><br>

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
<img align="center" alt="Alexandra-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="Alexandra-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Alexandra-postgreSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">  
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
A API é referente a uma aplicação onde um usuário poderá realizar um cadastro e fazer login para ter acesso à uma aplicação de front-end, contendo o seu perfil pessoal. 
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">bcryptjs: "^2.4.3",</li>
<li font-family="robotto" font-size="16px">cors: "^2.8.5",</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.3.1"</li>
<li font-family="robotto" font-size="16px">express: "^4.18.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">jsonwebtoken: "^9.0.2"</li>
<li font-family="robotto" font-size="16px">pg: "^8.11.3"</li>
<li font-family="robotto" font-size="16px">reflect-metadata: "^0.1.13">
<li font-family="robotto" font-size="16px">typeorm: "0.3.15"</li>
<li font-family="robotto" font-size="16px">zod: "^3.22.4"</li>
</ul><br>

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://yarnpkg.com/package/zod)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama de Entidade de Relacionamentos (DER)

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama DER da API definindo tabelas utilizadas e seus relacionamentos no banco de dados.

![DER](myPerson.png)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:generate src/migrations/create<nome-da-class> -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts
```

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Na aplicação foi usada a biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para criação de token e autenticação do cliente.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

## **users**

A tabela users é definida como:

| Campo     | Tipo   | Descrição                                                                |
| --------- | ------ | ------------------------------------------------------------------------ |
| id        | number | Identificador único do usuário                                           |
| name      | string | O nome do usuário.                                                       |
| email     | string | O e-mail do usuário.                                                     |
| password  | string | A senha de acesso do usuário                                             |
| phone     | string | O telefone do usuário                                                    |
| birthday  | string | A data de nascimento do usuário                                          |
| bio       | text   | Uma descrição do usuário                                                 |
| image     | text   | A imagem do usuário                                                      |
| linkedin  | text   | link do Linkedin do usuário                                              |
| portfolio | text   | link do Portfólio do usuário                                             |
| facebook  | text   | link do Facebook do usuário                                              |
| gender    | string | enum com as opções: "male", "female", "no binary", "I prefer not to say" |

### Endpoints

| Método | Rota       | Descrição                                                     |
| ------ | ---------- | ------------------------------------------------------------- |
| POST   | /users     | Criação de um usuário.                                        |
| GET    | /users     | Lista todos os usuários.                                      |
| GET    | /users/:userId | Lista um usuário, usando seu ID como parâmetro                |
| PATCH  | /users/::userId| Atualiza os dados de um usuário, usando seu ID como parâmetro |
| DELETE | /users/::userId | Deleta um usuário, usando seu ID como parâmetro               |

---

### 1.1. **Criar Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Lucas Ferreira",
  "email": "lucasfer@mail.com",
  "password": "Ale12345678",
  "phone": "21985632224",
  "birthday": "10/11/1997",
  "gender": "male"
}
```

### Resposta da Requisição:

```json
{
	"name": "Lucas Ferreira",
	"email": "lucasfer@mail.com",
	"phone": "21985632224",
	"birthday": "10/11/1997",
	"bio": null,
	"image": null,
	"linkedin": null,
	"portfolio": null,
	"facebook": null,
	"gender": "male",
	"id": 4
}

OBS: Não há retorno da senha na resposta da requisição.
```

### 1.2. **Listar todos Usuários**

```
GET /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "name": "Alexander Miranda",
    "email": "alexander@mail.com",
    "phone": "2198516422325",
    "birthday": "1997-02-05",
    "bio": null,
    "image": null,
    "linkedin": null,
    "portfolio": null,
    "facebook": null,
    "gender": "male",
    "id": 1
  },
  {
    "name": "Alexandra Miranda",
    "email": "alexandra@mail.com",
    "phone": "(21) 98996-5244",
    "birthday": "1986-11-07",
    "bio": "I am Full Stack Developer",
    "image": "https://s.aficionados.com.br/imagens/tempestade-heroina.jpg",
    "linkedin": "https://www.linkedin.com/in/alexandra-miranda86/",
    "portfolio": "https://portfolio-alexandra86-2qv0gm2cj-alexandra86.vercel.app/",
    "facebook": "",
    "gender": "female",
    "id": 2
  },
  {
    "name": "Lucas Ferreira",
    "email": "lucasfer@mail.com",
    "phone": "21985632224",
    "birthday": "1997-11-10",
    "bio": null,
    "image": null,
    "linkedin": null,
    "portfolio": null,
    "facebook": null,
    "gender": "male",
    "id": 4
  }
]
```

### 1.3. **Listar Usuário por id**

### Exemplo de Request:

```
GET /users/:userId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
  "name": "Alexandra Miranda",
  "email": "alexandra@mail.com",
  "phone": "(21) 98996-5244",
  "birthday": "1986-11-07",
  "bio": "I am Full Stack Developer",
  "image": "https://s.aficionados.com.br/imagens/tempestade-heroina.jpg",
  "linkedin": "https://www.linkedin.com/in/alexandra-miranda86/",
  "portfolio": "https://portfolio-alexandra86-2qv0gm2cj-alexandra86.vercel.app/",
  "facebook": "",
  "gender": "female",
  "id": 2
}
```

### 1.4. **Atualizar Usuário por id**

### Exemplo de Request:

```
PATCH /users/:userId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Alexya Miranda"
}
```

### Resposta da Requisição:

```json
{
  "name": "Alexya Miranda",
  "email": "alexandra@mail.com",
  "phone": "(21) 98996-5244",
  "birthday": "1986-11-07",
  "bio": "I am Full Stack Developer",
  "image": "https://s.aficionados.com.br/imagens/tempestade-heroina.jpg",
  "linkedin": "https://www.linkedin.com/in/alexandra-miranda86/",
  "portfolio": "https://portfolio-alexandra86-2qv0gm2cj-alexandra86.vercel.app/",
  "facebook": "",
  "gender": "female",
  "id": 2
}
```

### 1.5. **Deletar Usuário por id**

### Exemplo de Request:

```
DELETE /users/:userId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body
```

### Resposta da Requisição:

```
Retorna apenas o status 204.
```

### 2.1. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "alexandra@mail.com",
  "password": "Ale12345678"
}
```

### Resposta da Requisição:

```json
{
  "token": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhhbmRyYUBtYWlsLmNvbSIsImlhdCI6MTY5ODAwNzE0MSwiZXhwIjoxNjk4MDkzNTQxLCJzdWIiOiIyIn0.4bGB61wtbJpvNZXbrH6YNGlEZ8YUztr3pKAjwPusv04",
    "user": {
      "id": 2,
      "name": "Alexandra Miranda",
      "email": "alexandra@mail.com",
      "phone": "(21) 98996-5244",
      "birthday": "1986-11-07",
      "bio": "I am Full Stack Developer",
      "image": "https://s.aficionados.com.br/imagens/tempestade-heroina.jpg",
      "linkedin": "https://www.linkedin.com/in/alexandra-miranda86/",
      "portfolio": "https://portfolio-alexandra86-2qv0gm2cj-alexandra86.vercel.app/",
      "facebook": "",
      "gender": "female"
    }
  }
}
```

### Exemplo de possíveis erros de request.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | number | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Lucas Ferreira",
  "email": "lucasfer@mail.com",
  "phone": "21985632224",
  "birthday": "10/11/1997",
  "bio": null,
  "image": null,
  "linkedin": null,
  "portfolio": null,
  "facebook": null,
  "gender": "male",
  "id": 4
}
```

### Possíveis Erros:

| Código do Erro | Descrição                    |
| -------------- | ---------------------------- |
| 404 Not Found  | "message": "User not found!" |

### Criação de um usuário:

### Corpo da Requisição:

```json
{
  "name": "Alexander Miranda",
  "email": "alexander@mail.com",
  "cpf": "12325748758",
  "phone": "2198516422325",
  "birthday": "05/02/1997",
  "image": null,
  "gender": "male"
}
```

### Exemplo de Response:

```
201 CREATE
```

```json
{
  "name": "Lucas Ferreira",
  "email": "lucasfer@mail.com",
  "phone": "21985632224",
  "birthday": "10/11/1997",
  "bio": null,
  "image": null,
  "linkedin": null,
  "portfolio": null,
  "facebook": null,
  "gender": "male",
  "id": 4
}
```

### Possíveis Erros:

| Código do Erro | Descrição                         |
| -------------- | --------------------------------- |
| 409 Conflict   | "message": "Email already exists" |
