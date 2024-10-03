const produtos = [
    { nome: 'Camiseta', preco: 25 },
    { nome: 'Calça', preco: 60 },
    { nome: 'Tênis', preco: 120 }
];

// 1. filtrar produto por preco
// 2. criar uma funcao que recebe o preco minimo
// 3. e retorna todos os items que forem acima de valor

const myFunc = (valorMinimo) => {
    const produtosFiltrados = []

    for(const produtoDisponivel of produtos) {
        // { nome: 'Camiseta', preco: 25 }
        if (produtoDisponivel.preco > valorMinimo) {
            produtosFiltrados.push(produtoDisponivel)
        }
    }

    return produtosFiltrados
}


console.log(myFunc(25))

