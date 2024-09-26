// Import readline to handle user input in Node.js
const readline = require('readline');

// Create an interface to get input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array of items available in the store
let items = [
  { id: 1, name: 'Laptop', price: 900, stock: 5, description: 'High-performance laptop' },
  { id: 2, name: 'Smartphone', price: 500, stock: 10, description: 'Latest model smartphone' },
  { id: 3, name: 'Headphones', price: 100, stock: 15, description: 'Noise-cancelling headphones' },
  { id: 4, name: 'Keyboard', price: 50, stock: 8, description: 'Mechanical keyboard' },
  { id: 5, name: 'Monitor', price: 300, stock: 4, description: '24-inch HD monitor' }
];

// Cart array to store selected items
let cart = [];

// Function to display items for the user
function displayItems() {
  console.log("\nAvailable Items:");
  items.forEach(item => {
    console.log(`${item.id}. ${item.name} - $${item.price} (Stock: ${item.stock})`);
  });
}

// Function to prompt user for input
function promptUser() {
  rl.question("\nWhat would you like to do? (add/view cart/checkout/exit): ", function (action) {
    if (action === 'add') {
      addItemToCart();
    } else if (action === 'view cart') {
      viewCart();
    } else if (action === 'checkout') {
      checkout();
    } else if (action === 'exit') {
      console.log("Thank you for visiting!");
      rl.close();
    } else {
      console.log("Invalid option. Please try again.");
      promptUser();
    }
  });
}

// Function to handle adding items to the cart
function addItemToCart() {
  displayItems();
  rl.question("\nEnter the ID of the item you want to add: ", function (id) {
    let selectedItem = items.find(item => item.id == id);

    if (selectedItem) {
      rl.question(`How many ${selectedItem.name}s would you like to add? `, function (quantity) {
        quantity = parseInt(quantity);
        
        if (quantity > 0 && quantity <= selectedItem.stock) {
          addToCart(selectedItem, quantity);
        } else {
          console.log("Invalid quantity. Please try again.");
        }
        promptUser();
      });
    } else {
      console.log("Invalid item ID. Please try again.");
      promptUser();
    }
  });
}

// Function to add the selected item and quantity to the cart
function addToCart(item, quantity) {
  let cartItem = cart.find(cartItem => cartItem.id === item.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity: quantity });
  }

  // Update the stock of the item
  item.stock -= quantity;
  
  console.log(`${quantity} ${item.name}(s) added to your cart.`);
}

// Function to view the cart
function viewCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    console.log("\nYour Cart:");
    cart.forEach(cartItem => {
      console.log(`${cartItem.quantity} x ${cartItem.name} - $${cartItem.price} each`);
    });
  }
  promptUser();
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    console.log("Your cart is empty. Add items before checking out.");
  } else {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`\nYour total is $${total}.`);
    console.log("Thank you for your purchase!");
  }
  rl.close();
}

// Start by displaying items and prompting the user
displayItems();
promptUser();
