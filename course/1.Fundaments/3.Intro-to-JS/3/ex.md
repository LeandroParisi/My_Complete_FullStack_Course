Aqui estão os enunciados dos exercícios voltados para uma aplicação real, utilizando funções, arrow functions, e métodos de array (find, filter, map):

### Exercício 1: Filtrando Produtos por Preço
Implemente uma função que receba um array de objetos representando produtos de um e-commerce e filtre os produtos com preços acima de um valor fornecido como parâmetro.

**Exemplo:**
```js
const produtos = [
  { nome: 'Camiseta', preco: 25 },
  { nome: 'Calça', preco: 60 },
  { nome: 'Tênis', preco: 120 }
];

const filtrarPorPreco = (produtos, valorMinimo) => {
  // Sua lógica aqui
};

console.log(filtrarPorPreco(produtos, 50)); // [{ nome: 'Calça', preco: 60 }, { nome: 'Tênis', preco: 120 }]
```

### Exercício 2: Encontrar Cliente
Implemente uma função que receba um array de clientes e um nome de cliente. A função deve retornar o objeto do cliente correspondente.

**Exemplo:**
```js
const clientes = [
  { nome: 'Maria', idade: 28 },
  { nome: 'João', idade: 34 },
  { nome: 'Ana', idade: 22 }
];

const encontrarCliente = (clientes, nome) => {
  // Sua lógica aqui
};

console.log(encontrarCliente(clientes, 'Ana')); // { nome: 'Ana', idade: 22 }
```

### Exercício 3: Mapeando Títulos de Livros
Você tem um array de objetos representando livros. Implemente uma função que use `map` para retornar apenas os títulos dos livros.

**Exemplo:**
```js
const livros = [
  { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
  { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
  { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' }
];

const listarTitulos = (livros) => {
  // Sua lógica aqui
};

console.log(listarTitulos(livros)); // ['O Senhor dos Anéis', 'Harry Potter', 'Dom Quixote']
```

### Exercício 4: Filtrando Tarefas Completas
Dado um array de tarefas de uma lista de "to-do", crie uma função que filtre e retorne as tarefas que já foram completadas.

**Exemplo:**
```js
const tarefas = [
  { tarefa: 'Comprar pão', completa: true },
  { tarefa: 'Lavar a louça', completa: false },
  { tarefa: 'Estudar JS', completa: true }
];

const filtrarCompletas = (tarefas) => {
  // Sua lógica aqui
};

console.log(filtrarCompletas(tarefas)); // [{ tarefa: 'Comprar pão', completa: true }, { tarefa: 'Estudar JS', completa: true }]
```

### Exercício 5: Verificando Produtos em Estoque
Crie uma função que utilize `some` para verificar se há algum produto fora de estoque em um array de produtos.

**Exemplo:**
```js
const produtos = [
  { nome: 'Notebook', emEstoque: true },
  { nome: 'Mouse', emEstoque: false },
  { nome: 'Teclado', emEstoque: true }
];

const verificarEstoque = (produtos) => {
  // Sua lógica aqui
};

console.log(verificarEstoque(produtos)); // true
```

### Exercício 6: Listar Nomes de Alunos Aprovados
Crie uma função que utilize `filter` para retornar apenas os alunos que foram aprovados em um exame (nota maior ou igual a 60).

**Exemplo:**
```js
const alunos = [
  { nome: 'Carlos', nota: 85 },
  { nome: 'Fernanda', nota: 55 },
  { nome: 'Joana', nota: 78 }
];

const listarAprovados = (alunos) => {
  // Sua lógica aqui
};

console.log(listarAprovados(alunos)); // [{ nome: 'Carlos', nota: 85 }, { nome: 'Joana', nota: 78 }]
```

### Exercício 7: Reformatando Objetos
Dado um array de objetos que representam usuários, crie uma função que use `map` para reformatar os objetos, retornando apenas o nome e o sobrenome dos usuários em um novo array.

**Exemplo:**
```js
const usuarios = [
  { nome: 'Carlos', sobrenome: 'Silva', idade: 28 },
  { nome: 'Joana', sobrenome: 'Santos', idade: 34 }
];

const reformatarUsuarios = (usuarios) => {
  // Sua lógica aqui
};

console.log(reformatarUsuarios(usuarios)); // [{ nome: 'Carlos', sobrenome: 'Silva' }, { nome: 'Joana', sobrenome: 'Santos' }]
```

### Exercício 8: Produtos com Desconto
Implemente uma função que receba um array de produtos e um percentual de desconto. A função deve usar `map` para aplicar o desconto ao preço de cada produto e retornar os novos valores.

**Exemplo:**
```js
const produtos = [
  { nome: 'Geladeira', preco: 2000 },
  { nome: 'Fogão', preco: 1200 }
];

const aplicarDesconto = (produtos, desconto) => {
  // Sua lógica aqui
};

console.log(aplicarDesconto(produtos, 10)); // [{ nome: 'Geladeira', preco: 1800 }, { nome: 'Fogão', preco: 1080 }]
``` 

Esses exercícios combinam conceitos de funções, arrow functions e métodos de array com aplicações do mundo real!