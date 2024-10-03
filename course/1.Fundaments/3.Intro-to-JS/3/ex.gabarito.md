Aqui está o gabarito dos exercícios que envolvem funções, arrow functions, e métodos de array (find, filter, map):

### Gabarito Exercício 1: Filtrando Produtos por Preço
```js
const produtos = [
  { nome: 'Camiseta', preco: 25 },
  { nome: 'Calça', preco: 60 },
  { nome: 'Tênis', preco: 120 }
];

const filtrarPorPreco = (produtos, valorMinimo) => produtos.filter(produto => produto.preco >= valorMinimo);

console.log(filtrarPorPreco(produtos, 50));
// [{ nome: 'Calça', preco: 60 }, { nome: 'Tênis', preco: 120 }]
```

### Gabarito Exercício 2: Encontrar Cliente
```js
const clientes = [
  { nome: 'Maria', idade: 28 },
  { nome: 'João', idade: 34 },
  { nome: 'Ana', idade: 22 }
];

const encontrarCliente = (clientes, nome) => clientes.find(cliente => cliente.nome === nome);

console.log(encontrarCliente(clientes, 'Ana'));
// { nome: 'Ana', idade: 22 }
```

### Gabarito Exercício 3: Mapeando Títulos de Livros
```js
const livros = [
  { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
  { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
  { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' }
];

const listarTitulos = (livros) => livros.map(livro => livro.titulo);

console.log(listarTitulos(livros));
// ['O Senhor dos Anéis', 'Harry Potter', 'Dom Quixote']
```

### Gabarito Exercício 4: Filtrando Tarefas Completas
```js
const tarefas = [
  { tarefa: 'Comprar pão', completa: true },
  { tarefa: 'Lavar a louça', completa: false },
  { tarefa: 'Estudar JS', completa: true }
];

const filtrarCompletas = (tarefas) => tarefas.filter(tarefa => tarefa.completa);

console.log(filtrarCompletas(tarefas));
// [{ tarefa: 'Comprar pão', completa: true }, { tarefa: 'Estudar JS', completa: true }]
```

### Gabarito Exercício 5: Verificando Produtos em Estoque
```js
const produtos = [
  { nome: 'Notebook', emEstoque: true },
  { nome: 'Mouse', emEstoque: false },
  { nome: 'Teclado', emEstoque: true }
];

const verificarEstoque = (produtos) => produtos.some(produto => !produto.emEstoque);

console.log(verificarEstoque(produtos));
// true (pois há um produto fora de estoque)
```

### Gabarito Exercício 6: Listar Nomes de Alunos Aprovados
```js
const alunos = [
  { nome: 'Carlos', nota: 85 },
  { nome: 'Fernanda', nota: 55 },
  { nome: 'Joana', nota: 78 }
];

const listarAprovados = (alunos) => alunos.filter(aluno => aluno.nota >= 60);

console.log(listarAprovados(alunos));
// [{ nome: 'Carlos', nota: 85 }, { nome: 'Joana', nota: 78 }]
```

### Gabarito Exercício 7: Reformatando Objetos
```js
const usuarios = [
  { nome: 'Carlos', sobrenome: 'Silva', idade: 28 },
  { nome: 'Joana', sobrenome: 'Santos', idade: 34 }
];

const reformatarUsuarios = (usuarios) => usuarios.map(usuario => ({
  nome: usuario.nome,
  sobrenome: usuario.sobrenome
}));

console.log(reformatarUsuarios(usuarios));
// [{ nome: 'Carlos', sobrenome: 'Silva' }, { nome: 'Joana', sobrenome: 'Santos' }]
```

### Gabarito Exercício 8: Produtos com Desconto
```js
const produtos = [
  { nome: 'Geladeira', preco: 2000 },
  { nome: 'Fogão', preco: 1200 }
];

const aplicarDesconto = (produtos, desconto) => produtos.map(produto => ({
  nome: produto.nome,
  preco: produto.preco - (produto.preco * (desconto / 100))
}));

console.log(aplicarDesconto(produtos, 10));
// [{ nome: 'Geladeira', preco: 1800 }, { nome: 'Fogão', preco: 1080 }]
```

Essas soluções utilizam funções, arrow functions, e métodos de array para resolver problemas com aplicações reais.