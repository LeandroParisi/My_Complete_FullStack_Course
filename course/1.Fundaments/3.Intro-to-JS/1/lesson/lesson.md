Let's design your examples and code for the beginner JavaScript class.

- O que é JavaScript e para que é utilizado;
'Segurança' de código:
  1. Compilada (tipada) - C#, Java, GO - Muito utilizado em aplicações mais antigas ou mais CORPORATE (bancos, coisas muito regulagas)
     1. Existe um processo de build 
        1. O processo garante certa segurança que o código vai **ser executado como esperado**
        2. Transforma esse código em uma linguagem intermediária
  2. Interpretada (não tipada) - JS - Mais utilizado em startups
     1. Interpretador
        1. Simplicação do código para a máquina
        2. NÃO faz o check de segurança que a linguagem compilada
        3. ESLINT - check de código estático (formatador de código)
  3. Typescript (superset de JS) - Adiciona tipagem ao javascript (+ segurança) - O tem sido cada vez mais pedido

'Complexidade' de código:
  3. Alto nivel - JS / Python 
  4. 'Médio nivel' - C#
  5. Baixo nivel (está mais próximas la linguagem da máquina) - C++, C
     
- Variáveis;
- Tipos primitivos;
- Tipagem dinâmica;
- Operadores de atribuição;
- Operadores aritméticos;
- Operadores lógicos;
- Estruturas condicionais.
- Optional chaining
- Access object properties



### 1. **O que é JavaScript e para que é utilizado**
   **Explanation:** JavaScript is a versatile programming language used to make websites interactive. It can be used to add dynamic behavior, handle events, and interact with APIs.

   **Example:**
   ```html
   <button onclick="greet()">Click Me!</button>
   
   <script>
     function greet() {
       alert('Hello! Welcome to JavaScript.');
     }
   </script>
   ```

### 2. **Variáveis**
   **Explanation:** Variables are used to store data. In JavaScript, you can declare variables using `var`, `let`, or `const`.

   **Example:**
   ```js
   let name = 'Alice';
   const age = 25;
   var isStudent = true;

   console.log(name, age, isStudent);
   ```

### 3. **Tipos primitivos**
   **Explanation:** JavaScript has several primitive types like strings, numbers, booleans, null, undefined, and symbols.

   **Example:**
   ```js
   let name = 'John';       // String
   let age = 30;            // Number
   let isAdult = true;      // Boolean
   let address = null;      // Null
   let phone;               // Undefined
   ```

   null x undefined:
   null => intentionally set to no value
   undefined => value is not set yet

   In JavaScript, null and undefined are both used to represent the absence of a meaningful value, but they have different meanings:

    undefined: This typically means that a variable has been declared but has not yet been assigned a value. It also represents the return value of functions that do not explicitly return anything.

    null: This is explicitly assigned by developers to indicate the absence of any object value. It is often used as a placeholder or to signify that a variable intentionally holds no value.

    Here's a summary of their differences:

    undefined is the default value of variables that have been declared but not initialized.
    null is an assignment value. It can be assigned to a variable to represent the absence of a value that should be defined.
    In practical terms, you might encounter undefined when you try to access a variable that hasn't been set, whereas null is something you set yourself to indicate a variable intentionally holds no value.

### 4. **Tipagem dinâmica**
   **Explanation:** JavaScript is dynamically typed, meaning variables can change their type during runtime.

   **Example:**
   ```js
   let x = 10;    // x is a number
   x = 'hello';   // now x is a string
   console.log(x); // Output: hello
   ```

### 5. **Operadores de atribuição**
   **Explanation:** Assignment operators are used to assign values to variables. The most common is `=`, but there are also others like `+=`, `-=`, `*=`, etc.

   **Example:**
   ```js
   let a = 10;
   a += 5; // same as a = a + 5
   console.log(a); // Output: 15
   ```

### 6. **Operadores aritméticos**
   **Explanation:** Arithmetic operators perform mathematical operations like addition (+), subtraction (-), multiplication (*), etc.

   **Example:**
   ```js
   let num1 = 10;
   let num2 = 5;

   console.log(num1 + num2); // Output: 15
   console.log(num1 - num2); // Output: 5
   console.log(num1 * num2); // Output: 50
   console.log(num1 / num2); // Output: 2
   ```

### 7. **Operadores lógicos**
   **Explanation:** Logical operators like `&&` (AND), `||` (OR), and `!` (NOT) are used to combine conditional statements.

   **Example:**
   ```js
   let isAdult = true;
   let hasLicense = false;

   console.log(isAdult && hasLicense); // Output: false
   console.log(isAdult || hasLicense); // Output: true
   console.log(!isAdult);              // Output: false
   ```

### 8. **Estruturas condicionais**
   **Explanation:** Conditional structures like `if-else` and `switch` allow you to execute code based on conditions.

   **Example (if-else):**
   ```js
   let age = 20;

   if (age >= 18) {
     console.log('You are an adult.');
   } else {
     console.log('You are a minor.');
   }
   ```

   **Example (switch):**
   ```js
   let day = 3;

   switch (day) {
     case 1:
       console.log('Monday');
       break;
     case 2:
       console.log('Tuesday');
       break;
     case 3:
       console.log('Wednesday');
       break;
     default:
       console.log('Invalid day');
   }
   ```

### 9. **Optional chaining**
   **Explanation:** Optional chaining (`?.`) is used to safely access deeply nested properties without causing an error if an intermediate value is `null` or `undefined`.

   **Example:**
   ```js
   let user = { name: 'Alice', address: { city: 'Paris' } };
   
   console.log(user?.address?.city); // Output: Paris
   console.log(user?.contact?.phone); // Output: undefined (instead of an error)
   ```

### 10. **Access object properties**
   **Explanation:** You can access object properties using dot notation or bracket notation.

   **Example:**
   ```js
   let person = { name: 'John', age: 25, city: 'New York' };

   console.log(person.name);  // Dot notation
   console.log(person['age']); // Bracket notation
   ```

Would you like to adjust or expand on any of these topics?