// Object of items available in the store, using item names as keys
let items = {
    Laptop: { price: 900, stock: 5, description: 'High-performance laptop' },
    Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
    'Headphones': { price: 100, stock: 15, description: 'Noise-cancelling headphones' },
    'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
    'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
    'Mouse': { price: 20, stock: 12 },
};
// Initialize the cart object with all items, setting quantity to 0 for each
let cart = {
    'Laptop': { quantity: 0 },
    'Smartphone': { quantity: 0 },
    'Headphones': { quantity: 0 },
    'Keyboard': { quantity: 0 },
    'Monitor': { quantity: 0 }
};

// ### **Challenge 1: Full Online Shopping Cart Experience**

// #### **Problem Description:**

// You are tasked with building a fully functional online shopping cart system that simulates a real user experience. The user will be able to browse items, add them to their cart, update quantities, remove items, and view the total price. The system will also check if the user qualifies for free shipping based on the total value of their cart.



// Import readline to handle user input in Node.js
const readline = require('readline');

// Create an interface to get input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 1. **Item Browsing and Selection**:
//    - The system should present a list of available items for the user to choose from. Each item has a name, price, and available quantity.
//    - The user should be able to select an item and specify the quantity they want to add to the cart.

// input do usuario
const selectedProduct = 'Laptop' // Input no site

const productDetails = items[selectedProduct]

const quantityTheUserWants = 4 // Input no site
// let cart = {
//     'Laptop': { quantity: 0 },
//     'Smartphone': { quantity: 0 },
//     'Headphones': { quantity: 0 },
//     'Keyboard': { quantity: 0 },
//     'Monitor': { quantity: 0 }
// };
console.log(cart[selectedProduct])

// let items = {
//     Laptop: { price: 900, stock: 5, description: 'High-performance laptop' },
//     Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
//     'Headphones': { price: 100, stock: 15, description: 'Noise-cancelling headphones' },
//     'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
//     'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
//     'Mouse': { price: 20, stock: 12 },
// };

function addItemToCart(itemToAdd, quantityToAdd) {
    const availableProducts = items[itemToAdd].stock
    // console.log({itemToAdd, quantityToAdd, availableProducts}) 

    if (quantityToAdd > availableProducts) {
        console.log('Sorry, we don\'t have that many items in stock.')
    } else {
        cart[itemToAdd].quantity = quantityToAdd
        items[itemToAdd].stock -= quantityToAdd
    }

    // console.log({adding: {itemToAdd, quantityToAdd}, cart, items})
}

// let items = {
//     Laptop: { price: 900, stock: 5, description: 'High-performance laptop' },
//     Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
//     'Headphones': { price: 100, stock: 15, description: 'Noise-cancelling headphones' },
//     'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
//     'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
//     'Mouse': { price: 20, stock: 12 },
// };
addItemToCart('Laptop', 1)
// cart = {
//     'Laptop': { quantity: 1 },
//     'Smartphone': { quantity: 0 },
//     'Headphones': { quantity: 0 },
//     'Keyboard': { quantity: 0 },
//     'Monitor': { quantity: 0 }
// };
// items =      {Laptop: { price: 900, stock: 4, description: 'High-performance laptop' },
//      Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
//      'Headphones': { price: 100, stock: 15, description: 'Noise-cancelling headphones' },
//      'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
//      'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
//      'Mouse': { price: 20, stock: 12 },
// }
addItemToCart('Headphones', 2)
// cart = {
//     'Laptop': { quantity: 1 },
//     'Smartphone': { quantity: 0 },
//     'Headphones': { quantity: 2 },
//     'Keyboard': { quantity: 0 },
//     'Monitor': { quantity: 0 }
// };
// items =      {Laptop: { price: 900, stock: 4, description: 'High-performance laptop' },
//      Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
//      'Headphones': { price: 100, stock: 13, description: 'Noise-cancelling headphones' },
//      'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
//      'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
//      'Mouse': { price: 20, stock: 12 },
// }
addItemToCart('Monitor', 5)
// cart = {
//     'Laptop': { quantity: 1 },
//     'Smartphone': { quantity: 0 },
//     'Headphones': { quantity: 2 },
//     'Keyboard': { quantity: 0 },
//     'Monitor': { quantity: 0 }
// };
// items =      {Laptop: { price: 900, stock: 4, description: 'High-performance laptop' },
//      Smartphone: { price: 500, stock: 10, description: 'Latest model smartphone' },
//      'Headphones': { price: 100, stock: 13, description: 'Noise-cancelling headphones' },
//      'Keyboard': { price: 50, stock: 8, description: 'Mechanical keyboard' },
//      'Monitor': { price: 300, stock: 4, description: '24-inch HD monitor' },
//      'Mouse': { price: 20, stock: 12 },
// }



// 7. **Checkout Process**:
//    - Once the user is satisfied with their cart, they can proceed to checkout.
//    - At checkout, display a summary of their purchase: all items, quantities, individual costs, total cost, and whether they qualify for free shipping.


