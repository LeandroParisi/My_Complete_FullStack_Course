Aqui está o material pós-aula para os alunos:

---

## Exercícios Pós-Aula: Métodos de Arrays

### 1. Construa a Lógica dos Seguintes Métodos:
Desenvolva a lógica por trás dos seguintes métodos de arrays sem usar as funções já prontas do JavaScript. A ideia é que você recrie a funcionalidade dessas funções do zero:

#### a. `find()`
- Objetivo: Retornar o primeiro elemento de um array que satisfaça a condição dada em uma função de callback.
  
```javascript
function find(arr, callback) {
  // Sua implementação aqui
}
```

#### b. `filter()`
- Objetivo: Retornar um novo array contendo todos os elementos que satisfaçam a condição fornecida na função de callback.
  
```javascript
function filter(arr, callback) {
  // Sua implementação aqui
}
```

#### c. `some()`
- Objetivo: Retornar `true` se pelo menos um elemento do array satisfizer a condição da função de callback. Caso contrário, retorna `false`.
  
```javascript
function some(arr, callback) {
  // Sua implementação aqui
}
```

#### d. `every()`
- Objetivo: Retornar `true` se todos os elementos do array satisfizerem a condição da função de callback. Caso contrário, retorna `false`.

```javascript
function every(arr, callback) {
  // Sua implementação aqui
}
```

### 2. Desafio Extra: Construa a Lógica do `reduce()`
Recrie a função `reduce`, que percorre o array e retorna um único valor de acordo com a função de callback. O método `reduce` pode acumular valores, como somas ou produtos, e mais.

```javascript
function reduce(arr, callback, initialValue) {
  // Sua implementação aqui
}
```

#### Exemplo de uso:
```javascript
const nums = [1, 2, 3, 4];
const sum = reduce(nums, (acc, curr) => acc + curr, 0);
console.log(sum); // Deve exibir 10
```

--- 

Esses exercícios visam reforçar a lógica dos métodos de arrays e a compreensão de como esses métodos podem ser implementados na prática.