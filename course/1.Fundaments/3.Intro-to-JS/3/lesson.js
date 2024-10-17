// EX LEANDRO 1
console.log("EX LEANDRO 1")

const produtos = [
    { nome: 'Camiseta', preco: 25 },
    { nome: 'Calça', preco: 60 },
    { nome: 'Tênis', preco: 120 }
];

const myFunc = (produtos, valorMinimo) => {
    const produtosFiltrados = []
    for(const produtoDisponivel of produtos) {
        if (produtoDisponivel.preco > valorMinimo) {
            produtosFiltrados.push(produtoDisponivel)
            
        } 
    }
    return produtosFiltrados;
}

console.log(myFunc(produtos, 60))

// EX LEANDRO 2
console.log("EX LEANDRO 2")

const clientes = [
    { nome: 'Maria', idade: 28 },
    { nome: 'João', idade: 34 },
    { nome: 'Ana', idade: 22 }
  ];
  
  const encontrarCliente = (clientes, nome) => {
    for (let cliente of clientes){
        if (cliente.nome == nome){
            return cliente;
        }
    }
  };
  
  console.log(encontrarCliente(clientes, 'Ana'));

// EX LEANDRO 3
console.log("EX LEANDRO 3")

  const livros = [
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
    { titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' }
  ];
  
  const listarTitulos = (livros) => {
    let titulosLivros = [];
    for (let book of livros){
        titulosLivros.push(book.titulo);
    }
    return titulosLivros;
  };
  
  console.log(listarTitulos(livros)); 

// EX LEANDRO 4
console.log("EX LEANDRO 4")

const tarefas = [
    { tarefa: 'Comprar pão', completa: true },
    { tarefa: 'Lavar a louça', completa: false },
    { tarefa: 'Estudar JS', completa: true }
  ];
  
const filtrarCompletas = (tarefas) => {
let tasksCompleted = [];
for (let tasks of tarefas){
    if (tasks.completa == true){
        "Tarefa completa:"
        tasksCompleted.push(tasks.tarefa);
    }
}
return tasksCompleted;
};
  
console.log(filtrarCompletas(tarefas));

// EX LEANDRO 5
console.log("EX LEANDRO 5")

const produtosDisp = [
    { nome: 'Notebook', emEstoque: true },
    { nome: 'Mouse', emEstoque: false },
    { nome: 'Teclado', emEstoque: true }
  ];
  
  const verificarEstoque = (produtos) => {
    let soma = 0;
    for(let prod of produtos){
        if (prod.emEstoque == true){
            soma = soma+1
        }
    }
    return "Quantidade de produtos em estoque:" + soma;
  };
  
  console.log(verificarEstoque(produtosDisp));

// EX LEANDRO 6
console.log("EX LEANDRO 6")

const alunos = [
    { nome: 'Carlos', nota: 85 },
    { nome: 'Fernanda', nota: 55 },
    { nome: 'Joana', nota: 78 }
  ];
  
  const listarAprovados = alunos.filter(aprovado => aprovado.nota >= 60);
  
  console.log(listarAprovados);

// EX LEANDRO 7
console.log("EX LEANDRO 7")

  const usuarios = [
    { nome: 'Carlos', sobrenome: 'Silva', idade: 28 },
    { nome: 'Joana', sobrenome: 'Santos', idade: 34 }
  ];

  const reformatarUsuarios = usuarios.map(usuario => {
    let novoUsuario = {nome: usuario.nome, sobrenome: usuario.sobrenome}
    return novoUsuario;
  })
  
  console.log(reformatarUsuarios); 

  // EX LEANDRO 8
console.log("EX LEANDRO 8")

const produtosNormais = [
  { nome: 'Geladeira', preco: 2000 },
  { nome: 'Fogão', preco: 1200 }
];

const aplicarDesconto = produtosNormais.map(produtos => {
  return {
    produtos,
    preco: produtos.preco - (produtos.preco * 0.10)
  };
});

console.log(aplicarDesconto);


// CODEWARS

// EX trybe 1
console.log("EX 1")

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const interArr = [34, 15, 88, 2];
 
const findSmallest = (Arr) => {
    const novoArr = [];
    for (let i = 0; i < Arr.length; i++){
        if (Arr[i] < Arr[i+1]){
            novoArr.push(Arr[i])
        }
        else {
            novoArr.push(Arr[i-1])
        }
    }
    return novoArr;
}

console.log(findSmallest(interArr))

// EX trybe 2

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    let resultado = 0;
    if (operation == "+"){
        resultado = value1 + value2;
    }
    else if (operation == "-") {
        resultado = value1 - value2;
    }
    else if (operation == "*") {
        resultado = value1 * value2;
    }
    else if (operation == "/") {
        resultado = value1 / value2;
    }
    return resultado;
  }

  console.log(basicOp("*", 2, 2))
  console.log(basicOp("-", 2, 2))
  console.log(basicOp("+", 2, 2))
  console.log(basicOp("/", 2, 2))


// EX trybe 2

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

let arr = [1, -2, 3, -4, 5];

function invert(Arr){
    let novoArr = [];
    for (let i = 0; i < Arr.length; i++){
        if (Arr[i] < 0){
            novoArr.push(Arr[i]*-1)
        }
        else {
            novoArr.push(Arr[i]*-1)
        }
    }
    return novoArr;
  }

  console.log(invert(arr))

// EX trybe 3

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

  function removeChar(str) {
    let arrPalavra = [];
    for (let i = 0; i < str.length; i++){
        if (i > 0 && i < str.length-1){
            arrPalavra.push(str[i]);
        }
    }
    let palavra = arrPalavra.join("");
    return palavra;
  }

  console.log(removeChar("rafael"))

// EX trybe 4

//   Given an array of integers, return a new array with each value doubled.

function dobrar (ar){
    let novoR = [];
    for (let item of ar){
        novoR.push(item*2)
    }
    return novoR;
}

console.log(dobrar([2, 4, 6]))



