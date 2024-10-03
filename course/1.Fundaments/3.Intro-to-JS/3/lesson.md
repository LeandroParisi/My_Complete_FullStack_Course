### Aula: Estruturando o Código com Funções em JavaScript

#### Objetivos:
- Compreender o uso de funções para organizar o código.
- Entender o papel de parâmetros e argumentos em funções.
- Realizar chamadas de funções.
- Definir escopo dentro de funções.
- Utilizar Arrow Functions (`() => {}`).

---

### 1. Introdução às Funções

**O que são funções?**
Funções são blocos de código reutilizáveis que ajudam a organizar o fluxo da aplicação. Elas permitem quebrar o código em partes menores e mais gerenciáveis, além de evitarem repetição de código.

**Sintaxe básica de uma função:**

```javascript
function nomeDaFuncao(param1, param2) {
  // Código a ser executado
  return resultado;
}
```

**Exemplo simples:**

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // Saída: 8
```

### 2. Parâmetros e Argumentos

**Parâmetros** são variáveis que a função espera receber. **Argumentos** são os valores que você passa para esses parâmetros.

#### Exercício 1:
- Crie uma função chamada `subtrai` que receba dois parâmetros e retorne a subtração do segundo pelo primeiro.

**Código base para o aluno:**

```javascript
function subtrai(x, y) {
  // Implemente a lógica aqui
}
console.log(subtrai(10, 4)); // Saída esperada: 6
```

---

### 3. Escopo de Funções

**Escopo** é o contexto em que as variáveis estão acessíveis. Variáveis declaradas dentro de uma função não podem ser acessadas fora dela, a menos que sejam retornadas.

**Exemplo:**

```javascript
function multiplica(a, b) {
  const resultado = a * b;
  return resultado;
}

console.log(multiplica(4, 5)); // Saída: 20
// console.log(resultado); // Erro! `resultado` está no escopo da função.
```

#### Exercício 2:
- Crie uma função chamada `divide` que só retorne o resultado da divisão se o divisor não for zero.

**Código base para o aluno:**

```javascript
function divide(a, b) {
  if (b === 0) {
    return 'Erro: divisão por zero!';
  }
  // Implemente a lógica aqui
}

console.log(divide(20, 4)); // Saída esperada: 5
console.log(divide(10, 0)); // Saída esperada: 'Erro: divisão por zero!'
```

---

### 4. Funções Aninhadas e Chamada de Funções

Você pode chamar uma função dentro de outra função, o que permite criar fluxos complexos.

**Exemplo:**

```javascript
function quadrado(n) {
  return n * n;
}

function somaDosQuadrados(a, b) {
  return quadrado(a) + quadrado(b);
}

console.log(somaDosQuadrados(2, 3)); // Saída: 13
```

#### Exercício 3:
- Crie duas funções: `dobro` que retorna o dobro de um número e `somaDobro` que chama a função `dobro` para dois números diferentes e retorna a soma de ambos.

---

### 5. Arrow Functions

**Arrow Functions** oferecem uma sintaxe mais curta e são muito usadas em funções anônimas ou callbacks.

**Sintaxe:**

```javascript
const funcaoArrow = (param1, param2) => {
  return param1 + param2;
};

// Exemplo de uma função simples:
const saudacao = nome => `Olá, ${nome}!`;

console.log(saudacao('Maria')); // Saída: Olá, Maria!
```

#### Exercício 4:
- Transforme a função `soma` criada anteriormente em uma arrow function.

---

### 6. Desafio Final

Utilizando os conceitos vistos, crie um pequeno sistema que receba dois números e execute as operações básicas (soma, subtração, multiplicação e divisão) usando funções para cada operação e uma função principal que coordene as chamadas de função.

**Exemplo de estrutura:**

```javascript
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

// Função principal que chama as outras funções
function calcular(a, b, operacao) {
  switch (operacao) {
    case 'soma':
      return soma(a, b);
    case 'subtrai':
      return subtrai(a, b);
    // Adicione as outras operações
    default:
      return 'Operação inválida';
  }
}

console.log(calcular(10, 5, 'soma')); // Saída: 15
```

---

### Conclusão

Durante essa aula, você aprendeu como organizar seu código com funções, trabalhar com parâmetros, escopo, e utilizar arrow functions. Agora vamos aplicar isso nos exercícios propostos!x