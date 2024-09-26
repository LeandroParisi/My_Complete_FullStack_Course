// Import readline to handle user input in Node.js
const readline = require('readline');

// Create an interface to get input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object of items available in the store, using item names as keys
let items = {
  'Laptop': { id: 1, price: 900, stock: 5, description: 'High-performance laptop' },
  'Smartphone': { id: 2, price: 500, stock: 10, description: 'Latest model smartphone' },
  'Headphones': { id: 3, price: 100, stock: 15, description: 'Noise-cancelling headphones' },
  'Keyboard': { id: 4, price: 50, stock: 8, description: 'Mechanical keyboard' },
  'Monitor': { id: 5, price: 300, stock: 4, description: '24-inch HD monitor' }
};

// Initialize the cart object with all items, setting quantity to 0 for each
let cart = {
  'Laptop': { quantity: 0 },
  'Smartphone': { quantity: 0 },
  'Headphones': { quantity: 0 },
  'Keyboard': { quantity: 0 },
  'Monitor': { quantity: 0 }
};

// Function to display items for the user
function displayItems() {
  console.log("\nAvailable Items:");
  Object.keys(items).forEach(itemName => {
    const item = items[itemName];
    console.log(`${item.id}. ${itemName} - $${item.price} (Stock: ${item.stock})`);
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
  rl.question("\nEnter the name of the item you want to add: ", function (name) {
    let selectedItem = items[name];

    if (selectedItem) {
      rl.question(`How many ${name}s would you like to add? `, function (quantity) {
        quantity = parseInt(quantity);
        
        if (quantity > 0 && quantity <= selectedItem.stock) {
          addToCart(name, selectedItem, quantity);
        } else {
          console.log("Invalid quantity. Please try again.");
        }
        promptUser();
      });
    } else {
      console.log("Invalid item name. Please try again.");
      promptUser();
    }
  });
}

// Function to add the selected item and quantity to the cart
function addToCart(name, item, quantity) {
  // Increase the quantity of the item in the cart
  cart[name].quantity += quantity;

  // Update the stock of the item
  item.stock -= quantity;
  
  console.log(`${quantity} ${name}(s) added to your cart.`);
}

// Function to view the cart
function viewCart() {
  const cartItems = Object.keys(cart).filter(itemName => cart[itemName].quantity > 0);

  if (cartItems.length === 0) {
    console.log("Your cart is empty.");
  } else {
    console.log("\nYour Cart:");
    cartItems.forEach(itemName => {
      const cartItem = cart[itemName];
      const item = items[itemName];
      console.log(`${cartItem.quantity} x ${itemName} - $${item.price} each`);
    });
  }
  promptUser();
}

// Function to handle checkout
function checkout() {
  const cartItems = Object.keys(cart).filter(itemName => cart[itemName].quantity > 0);

  if (cartItems.length === 0) {
    console.log("Your cart is empty. Add items before checking out.");
  } else {
    let total = cartItems.reduce((sum, itemName) => {
      const item = items[itemName];
      return sum + (item.price * cart[itemName].quantity);
    }, 0);
    console.log(`\nYour total is $${total}.`);
    console.log("Thank you for your purchase!");
  }
  rl.close();
}

// Start by displaying items and prompting the user
displayItems();
promptUser();
