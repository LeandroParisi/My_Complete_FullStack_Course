// - O que é JavaScript e para que é utilizado;
// - Variáveis;
// - Tipos primitivos;
// - Tipagem dinâmica;
// - Operadores de atribuição;
// - Operadores aritméticos;
// - Operadores lógicos;
// - Estruturas condicionais.
// - Optional chaining
// - Access object properties

let name1 = 'Alice'; // pode mudar
const age1 = 25; // não pode mudar
// var isStudent = true;

console.log(name1, age1);

// TIPOS
let name = 'John';       // String
let age = 30;            // Number
// let isAdult = true;      // Boolean
let address = null;      // Null
let phone;               // Undefined


// TIPAGEM
let x = 10;    // x is a number
x = 'hello';   // now x is a string
console.log(x); // Output: hello

// operadores
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // Output: 15
console.log(num1 - num2); // Output: 5
console.log(num1 * num2); // Output: 50
console.log(num1 / num2); // Output: 2

let a = 10;
a += 5; // same as a = a + 5
a -= 5; // same as a = a - 5
console.log(a); // Output: 15


// Operadores booleanos
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // Output: false
console.log(isAdult || hasLicense); // Output: true
console.log(!isAdult);              // Output: false

// ! => inverte o booleano

const ageName = 'ststs'

// Objetos -> Class (C#)
let person = { 
    name: 'John', 
    age: 25, 
    city: 'New York',
    address: {
        street: 'rua'
    }
};

console.log(person.name);  // Dot notation
console.log(person.ststs); // Bracket notation

console.log(person.ststs + 1)


