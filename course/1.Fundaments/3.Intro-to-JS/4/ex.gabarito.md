Aqui está o gabarito dos 10 exercícios sobre objetos:

---

### 1. **Criar um objeto**
```javascript
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

console.log(person);
```

### 2. **Acessar e modificar propriedades**
```javascript
// Modificando a propriedade 'age' e adicionando 'job'
person.age = 35;
person.job = 'Software Developer';

console.log(person);
```

### 3. **Métodos em objetos**
```javascript
person.greet = function() {
  return `Hello, my name is ${this.name}!`;
};

console.log(person.greet()); // Output: Hello, my name is John Doe!
```

### 4. **Verificar existência de uma propriedade**
```javascript
function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// Testando a função
console.log(hasProperty(person, 'name')); // Output: true
console.log(hasProperty(person, 'salary')); // Output: false
```

### 5. **Iterar sobre propriedades**
```javascript
function listProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// Testando a função
listProperties(person);
```

### 6. **Copiar objetos**
```javascript
const personCopy = Object.assign({}, person);

// Alterando a cópia
personCopy.name = 'Jane Doe';
personCopy.age = 28;

console.log('Original:', person);
console.log('Copy:', personCopy);
```

### 7. **Combinar objetos**
```javascript
const person1 = { name: 'Alice', age: 25 };
const person2 = { city: 'Paris', job: 'Designer' };

const combinedPerson = Object.assign({}, person1, person2);

console.log(combinedPerson);
// Output: { name: 'Alice', age: 25, city: 'Paris', job: 'Designer' }
```

### 8. **Objetos dentro de objetos**
```javascript
// Adicionando o objeto 'address'
person.address = {
  street: '5th Avenue',
  number: 123,
  zipcode: '10001'
};

// Acessando a propriedade 'zipcode'
console.log(person.address.zipcode); // Output: 10001
```

### 9. **Método Object.keys**
```javascript
function getKeys(obj) {
  return Object.keys(obj);
}

// Testando a função
console.log(getKeys(person));
// Output: ['name', 'age', 'city', 'job', 'greet', 'address']
```

### 10. **Método Object.values**
```javascript
function getValues(obj) {
  return Object.values(obj);
}

// Testando a função
console.log(getValues(person));
// Output: ['John Doe', 35, 'New York', 'Software Developer', [Function: greet], {street: '5th Avenue', number: 123, zipcode: '10001'}]
```
