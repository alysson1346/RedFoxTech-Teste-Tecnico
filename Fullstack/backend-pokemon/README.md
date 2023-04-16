# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)
  - [Server](#24-server)
- [Endpoints](#3-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 2.4. Server

Execute o comando para rodar o servidor na máquina local na porta 3001:

```
yarn dev
```

---

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /user](#11-criação-de-usuário)
  - [GET - /user](#12-listando-usuários)
  - [GET - /user/login](#13-login-usuário)
- [Pokemon](#2-pokemon)
  - [POST - /pokemon](#21-criação-de-pokemon)
  - [GET - /pokemon/:id](#22-listando-pokemon-por-id)
  - [PATCH - /pokemon/:id](#23-atualizando-pokemon)
  - [DELETE - /pokemon/:id](#24-pokemon-contato)
  - [GET - /pokemon/filter/:name](#25-filtrando-pokemon-por-nome)

---

## 1. **Users**

[ Voltar para os Endpoints ](#3-endpoints)

O objeto User é definido como:

| Campo      | Tipo    | Descrição                               |
| ---------- | ------- | --------------------------------------- |
| id         | string  | Identificador único do usuário          |
| name       | string  | O nome do usuário.                      |
| email      | string  | O e-mail do usuário.                    |
| password   | string  | A senha de acesso do usuário            |
| is_admin   | boolean | User é admon?                           |
| created_at | date    | Nos mostra quando foi criado o usuário. |

### Endpoints

| Método | Rota        | Descrição                                   |
| ------ | ----------- | ------------------------------------------- |
| POST   | /user       | Criação de um usuário.                      |
| GET    | /users      | Lista todos os usuários.                    |
| POST   | /user/login | Loga o usuário de acordo com as credenciais |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/user`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3001/user
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "alysson",
  "email": "email@email.com",
  "password": "1234",
  "is_admin": true
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "982905dc-4fc9-4d95-ba1a-257e9790c68f",
  "name": "alysson",
  "email": "email@email.com",
  "password": "$2b$10$kAHIdzAvXYgUTbSvqyG.t.kNwWkDd5XpFN2T5c.EIeoyik.5kv5le",
  "is_admin": true,
  "created_at": "2023-04-15T19:21:25.482Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                 |
| --------------- | ------------------------- |
| 400 Bad Request | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#3-endpoints)

### `/user`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3001/user
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "982905dc-4fc9-4d95-ba1a-257e9790c68f",
    "name": "alysson",
    "email": "email@email.com",
    "password": "$2b$10$kAHIdzAvXYgUTbSvqyG.t.kNwWkDd5XpFN2T5c.EIeoyik.5kv5le",
    "is_admin": true,
    "created_at": "2023-04-15T19:21:25.482Z"
  },
  {
    "id": "5bca57bf-41f1-4b1b-91e3-624ea37115a7",
    "name": "João",
    "email": "João@email.com",
    "password": "$2b$10$NZpfK1jEWVtO4oVLx9k8YOkzCAXJnoQ6mvt0RmD1ABRQEQIZKgYwa",
    "is_admin": true,
    "created_at": "2023-04-16T22:56:56.633Z"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **login usuário**

[ Voltar aos Endpoints ](#3-endpoints)

### `/user/login`

### Exemplo de Request:

```
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3001/users/login
Authorization: None
Content-type: application/json

```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| email     | string | Identificador único do usuário (User)    |
| password  | string | Identificador da conta do usuário (User) |

### Corpo da Requisição:

```json
{
  "email": "rodrigo@kenzie.com.br",
  "password": "1234"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29Aa2VuemllLmNvbS5iciIsImlhdCI6MTY2NDI1MjA3NSwiZXhwIjoxNjY0MzM4NDc1fQ.7Rnbm9ZThvWK0PZLyCzvsi1DL2kViOW0vjqJUJupkcw"
}
```

### Possíveis Erros:

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 401 Not Found  | Account not found. |

---

### 2.1. **Criação de pokemon**

[ Voltar para os Endpoints ](#3-endpoints)

### `/pokemon`

### Exemplo de Request:

```
POST /contact
Host: http://localhost:3001/pokemon
Authorization: None
Content-type: None
```

### Exemplo de Response:

```
200 Created
```

```json
{
  "id": "1203ff12-b1b1-464b-95cd-b81e6cd8da55",
  "name": "Bulbassauro",
  "pokedex_number": 1,
  "img_name": "https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png",
  "generation": 1,
  "evolved": true,
  "family_id": 1,
  "cross_gen": true,
  "type_1": "string",
  "type_2": "string",
  "weather_1": "string",
  "Weather_2": "string",
  "stat_total": 10,
  "atk": 10,
  "def": 10,
  "sta": 10,
  "legendary": true,
  "aquireable": true,
  "spawns": true,
  "regional": true,
  "raidable": true,
  "hatchable": true,
  "shiny": true,
  "nest": true,
  "new": true,
  "not_gettable": true,
  "future_evolve": true,
  "cp40": 40,
  "cp39": 50
}
```

### 2.2. **listando pokemon por id**

[ Voltar para os Endpoints ](#3-endpoints)

### `/pokemon/{id}`

### Exemplo de Request:

```
POST /contact
Host: http://localhost:3001/contact/{id}
Authorization: None
Content-type: None
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "id": "1203ff12-b1b1-464b-95cd-b81e6cd8da55",
  "name": "Bulbassauro",
  "pokedex_number": 1,
  "img_name": "https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png",
  "generation": 1,
  "evolved": true,
  "family_id": 1,
  "cross_gen": true,
  "type_1": "string",
  "type_2": "string",
  "weather_1": "string",
  "Weather_2": "string",
  "stat_total": 10,
  "atk": 10,
  "def": 10,
  "sta": 10,
  "legendary": true,
  "aquireable": true,
  "spawns": true,
  "regional": true,
  "raidable": true,
  "hatchable": true,
  "shiny": true,
  "nest": true,
  "new": true,
  "not_gettable": true,
  "future_evolve": true,
  "cp40": 40,
  "cp39": 50
}
```

### 2.3. **atualizando pokemon**

[ Voltar para os Endpoints ](#3-endpoints)

### `/pokemon/{id}`

### Exemplo de Request:

```
PATCH /contact
Host: http://localhost:3001/pokemon/{id}
Authorization: None
Content-type: application/json
```

### 2.4. **deletando pokemon**

[ Voltar para os Endpoints ](#3-endpoints)

### `/pokemon/{id}`

### Exemplo de Request:

```
DELETE /contact
Host: http://localhost:3001/pokemon/{id}
Authorization: None
Content-type: None
```

### Exemplo de Response:

```
200 Ok
```

```json
No body retorned for response
```

### Possíveis Erros:

| Código do Erro  | Descrição          |
| --------------- | ------------------ |
| 401 Bad Request | Pokemon not found. |

---

### 2.5. **filtrando pokemon por nome**

[ Voltar para os Endpoints ](#3-endpoints)

### `/pokemon/filter/{name}`

### Exemplo de Request:

```
DELETE /contact
Host: http://localhost:3001/pokemon/filter/{name}
Authorization: None
Content-type: None
```
