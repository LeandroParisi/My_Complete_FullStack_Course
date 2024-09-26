Aqui está o gabarito dos exercícios pós-aula:

---

### Gabarito

### 1. Construa a Lógica dos Seguintes Métodos:

#### a. `find()`
A função `find` percorre o array e retorna o primeiro elemento que satisfaça a condição dada pela função de callback. Se nenhum elemento satisfizer a condição, retorna `undefined`.

```javascript
function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
```

#### b. `filter()`
A função `filter` cria um novo array com todos os elementos que satisfaçam a condição dada pelo callback.

```javascript
function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

#### c. `some()`
A função `some` percorre o array e retorna `true` se pelo menos um elemento satisfizer a condição do callback. Se nenhum elemento satisfizer a condição, retorna `false`.

```javascript
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
```

#### d. `every()`
A função `every` percorre o array e retorna `true` se **todos** os elementos satisfizerem a condição do callback. Se qualquer elemento não satisfizer, retorna `false`.

```javascript
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
```

### 2. Desafio Extra: Construa a Lógica do `reduce()`
A função `reduce` aplica uma função de callback em cada elemento do array, acumulando os valores em um único resultado final. Se for fornecido um valor inicial, ele será usado como o valor inicial do acumulador; caso contrário, o primeiro elemento do array será o valor inicial.

```javascript
function reduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}
```

#### Exemplo de uso:
```javascript
const nums = [1, 2, 3, 4];
const sum = reduce(nums, (acc, curr) => acc + curr, 0);
console.log(sum); // Deve exibir 10
```

--- 

Esses exemplos devem ajudar os alunos a entenderem como os métodos de array funcionam por trás das cenas, com foco na lógica por trás da iteração e acumulação de resultados.