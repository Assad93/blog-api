
# Blog Api - Backend Challenge
Criei uma Api com Node.js, Mongoose e MongoDB, baseado em um desafio que achei neste link: [desafio](https://github.com/yellow-tech/jr-backend-challenge) 

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você possui o `Node Js` instalado em sua máquina?
* Você possui o `MongoDB` instalado em sua máquina?

## 🚀 Instalando

Para instalar, siga estas etapas:

Abra outro prompt e navegue até a pasta do projeto, depois:
```
npm install
```

## ☕ Usando

Para usar, siga estas etapas:

Na raiz do projeto, execute no terminal:
```
npm run dev
```

Fique à vontade para contribuir!

## Documentação da API

### Rotas de Autor

#### Retorna todos os autores

```http
  GET /authors
```

#### Retorna um autor

```http
  GET /authors/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você quer |

#### Cria um autor

```http
  POST /authors
```

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do autor |
| `email`      | `string` | O email do autor |
| `age`      | `number` | A idade do autor |
| `gender`      | `string` | O sexo do autor |
| `bio`      | `string` | **Obrigatório**. Uma breve descrição do autor |

#### Atualiza autor

```http
  PUT /authors/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você quer atualizar |

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | O nome do autor |
| `email`      | `string` | O email do autor |
| `age`      | `number` | A idade do autor |
| `gender`      | `string` | O sexo do autor |
| `bio`      | `string` |  Uma breve descrição do autor |

#### Deleta autor

```http
  DELETE /authors/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você quer deletar|


### Rotas de Categoria

#### Retorna todas as categorias

```http
  GET /categories
```

#### Retorna uma categoria

```http
  GET /categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer |

#### Cria uma categoria

```http
  POST /categories
```

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome da categoria |
| `subcategories`      | `Array de strings` | ids de outras categorias cadastradas no banco de dados |


#### Atualiza categoria

```http
  PUT /categories/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer atualizar |

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | O nome da categoria |
| `subcategories`      | `Array de strings` | ids de outra categorias cadastradas no banco de dados |

#### Deleta categoria

```http
  DELETE /categories/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer deletar|


### Rotas de Post

#### Retorna todos os posts

```http
  GET /posts
```

| Query Params   | Exemplo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `page`      | `/posts?page=2` | O número da pagina que você deseja mostrar. |
| `limit`      | `/posts?limit=2` | O limite de posts por página. |

#### Retorna um post

```http
  GET /posts/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do post que você quer |

#### Cria um post

```http
  POST /posts
```

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título do post |
| `content`      | `string` | **Obrigatório**. Conteúdo do post |
| `date`      | `date` | data do post |
| `categories`      | `Array de string` |  **Obrigatório**. Categorias do post |
| `author`      | `string` | **Obrigatório**. Autor do post |
| `views`      | `string` | **Obrigatório**. Visualizações do post |


#### Atualiza post

```http
  PUT /posts/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do post que você quer atualizar |

| Corpo Requisição  | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título do post |
| `content`      | `string` | **Obrigatório**. Conteúdo do post |
| `date`      | `date` | Data do post |
| `categories`      | `Array de string` |  **Obrigatório**. Categorias do post |
| `author`      | `string` | **Obrigatório**. Autor do post |
| `views`      | `string` | **Obrigatório**. Visualizações do post |

#### Deleta post

```http
  DELETE /posts/{$id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do post que você quer deletar|


### Listar Posts por categoria

```http
  GET /posts/categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer listar os posts|

### Listar Posts por autor

```http
  GET /posts/authors/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você quer listar os posts|


