Aqui está o gabarito da aula onde você construirá a lógica dos métodos `find` e `forEach` com os alunos:

### 1. **Construindo o `forEach`**

A função `forEach` percorre um array, executando uma função para cada item.

**Objetivo**: Criar uma função que simule o comportamento do `forEach`.

#### Passos:
1. Definir uma função que receba dois argumentos: um array e uma função de callback.
2. Usar um loop (`for`) para percorrer o array.
3. A cada iteração, chamar a função de callback, passando o elemento atual como argumento.

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array); // Passa o elemento, o índice e o array para o callback.
  }
}

// Testando o myForEach
const arr = [1, 2, 3, 4];

myForEach(arr, (item) => {
  console.log(item);
});
```

**Explicação**:
- O `forEach` original percorre o array e executa uma função callback para cada item. Aqui, a lógica é reconstituída com um `for`, e o `callback` é executado em cada iteração.

---

### 2. **Construindo o `find`**

O `find` percorre o array até encontrar um item que satisfaça a condição passada na função de callback, retornando esse item.

**Objetivo**: Criar uma função que simule o comportamento do `find`.

#### Passos:
1. Definir uma função que receba dois argumentos: um array e uma função de callback.
2. Usar um loop (`for`) para percorrer o array.
3. A cada iteração, verificar se o resultado da função callback é verdadeiro (`true`).
4. Retornar o primeiro item que satisfizer a condição.
5. Se nenhum item for encontrado, retornar `undefined`.

```js
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i]; // Retorna o primeiro item que satisfaz a condição.
    }
  }
  return undefined; // Caso não encontre nenhum item, retorna undefined.
}

// Testando o myFind
const arr2 = [10, 20, 30, 40];

const result = myFind(arr2, (item) => item > 25);

console.log(result); // Deve imprimir 30
```

**Explicação**:
- A lógica do `find` percorre o array e usa o `callback` para testar uma condição. O primeiro elemento que satisfizer essa condição é retornado. Se nenhum for encontrado, o retorno é `undefined`.

Esses exercícios ajudarão seus alunos a entender a lógica interna dos métodos de arrays e como podem ser construídos do zero.