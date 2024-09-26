Aqui está o material pós-aula para os alunos:

---

## Exercícios Pós-Aula: Métodos de Arrays

### 1. Construa a Lógica dos Seguintes Métodos:
Desenvolva a lógica por trás dos seguintes métodos de arrays sem usar as funções já prontas do JavaScript. A ideia é que você recrie a funcionalidade dessas funções do zero:

#### a. `find()`
- Objetivo: Retornar o primeiro elemento de um array que satisfaça a condição dada em uma função de callback.
  
callback = funcaoDoUsuario
```javascript
const arr = [1, 2, 3, 4];

function callback(elementDoArray) {
    const ehIgualA3 = elementDoArray == 3
    return ehIgualA3
}

function find(arr, callback) {
  // Sua implementação aqui
  for()

  if() {

  } else {}
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
