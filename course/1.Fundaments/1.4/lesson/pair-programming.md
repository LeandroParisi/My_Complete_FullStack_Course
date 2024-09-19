### **Challenge 1: Full Online Shopping Cart Experience**

#### **Problem Description:**

You are tasked with building a fully functional online shopping cart system that simulates a real user experience. The user will be able to browse items, add them to their cart, update quantities, remove items, and view the total price. The system will also check if the user qualifies for free shipping based on the total value of their cart.

---

### **Requirements:**

1. **Item Browsing and Selection**:
   - The system should present a list of available items for the user to choose from. Each item has a name, price, and available quantity.
   - The user should be able to select an item and specify the quantity they want to add to the cart.

2. **Add Items to Cart**:
   - Once the user selects an item and quantity, the item should be added to their cart. If the item is already in the cart, update the quantity instead of adding a duplicate entry.
   - If the user tries to add more than the available stock, display a message indicating the limit.

3. **View Cart**:
   - The user should be able to view all items in their cart at any time. This should include each item’s name, price, quantity, and the total price for that item.
   - The system should also display the **total cost of all items** in the cart.

4. **Update Item Quantities**:
   - Allow the user to update the quantity of any item in their cart. This update should recalculate the total cost and update the cart accordingly.
   - Ensure the user cannot set a quantity greater than the available stock.

5. **Remove Items from Cart**:
   - Provide an option for the user to remove any item from their cart. Once removed, the cart and total cost should be updated.

6. **Free Shipping Qualification**:
   - If the total value of the items in the cart exceeds $50, the user qualifies for free shipping.
   - Display a message informing the user if they qualify for free shipping or how much more they need to add to their cart to qualify.

7. **Checkout Process**:
   - Once the user is satisfied with their cart, they can proceed to checkout.
   - At checkout, display a summary of their purchase: all items, quantities, individual costs, total cost, and whether they qualify for free shipping.

---

### **Expected User Flow:**

1. **Item Browsing**:
   - The user is presented with a list of items, their prices, and available stock.
   - The user selects an item and adds it to their cart.

2. **Cart Management**:
   - The user adds more items, views the cart, and updates item quantities.
   - The user may decide to remove items or change quantities of items already in the cart.

3. **Qualifying for Free Shipping**:
   - As the user adds items, the total is updated, and the system informs them how close they are to qualifying for free shipping.

4. **Discount Application**:
   - At checkout, the user may enter a discount code to reduce the total cost of their purchase.

5. **Checkout and Receipt**:
   - The user checks out and receives a detailed receipt, including all the purchase details, applied discounts, and shipping information.
   - The system updates the stock for the items that were purchased.

---


### **Extra Challenges:**

1. **Discount Coupons**:
   - Allow the user to input a discount code at checkout. If they enter a valid code, apply a 10% discount to the total price.
   - Make the system validate the code and reject invalid codes.

2. **Stock Management**:
   - After the user checks out, update the available stock for each item based on the quantities purchased.
   - If the stock of an item is zero, mark it as **Out of Stock** and prevent users from adding it to their cart.

3. **Item Details**:
   - When browsing items, allow the user to view more details about a selected item, such as a brief description or category (e.g., electronics, clothing).
   
4. **Error Handling**:
   - Add error messages if the user tries to do any invalid actions, such as:
     - Adding an item with zero quantity.
     - Removing an item that doesn’t exist in the cart.
     - Proceeding to checkout with an empty cart.
  
5. **Final Receipt**:
   - After checkout, display a receipt showing the full breakdown of the purchase: items, quantities, individual costs, total cost, discount applied (if any), and the shipping cost (if applicable).
   - The receipt should also show the user's estimated delivery date based on their location (you can hardcode or simulate location data for simplicity).

---

### **Additional Functionalities for the Shopping Cart**:

- **Item Search**: Add a simple search feature that lets the user search for items by name or category.
- **Cart Validation**: Before checking out, ensure that all items in the cart are still in stock.
- **Empty Cart Message**: If the user tries to view or check out an empty cart, display an appropriate message.
- **Shipping Cost Calculation**: If the user does not qualify for free shipping, display the calculated shipping cost based on a flat rate (e.g., $5 for orders under $50).




---
Here are some extra challenges focused on building **ADMIN user functionalities** for managing the item list in your online shopping cart system. These will add features to allow an admin to make items unavailable, change prices, update stock, and modify descriptions.

---

### **Extra Challenge 1: Make Item Unavailable**

#### **Problem Description:**

As an admin, you should be able to make an item unavailable for purchase. When an item is marked as unavailable, it will still appear in the list but the user will not be able to add it to their cart.

**Tasks:**
1. Add a new property `available` to each item in the items array.
2. Provide an option for the admin to toggle an item’s availability status.
3. If an item is marked as unavailable, users should not be able to add it to their cart, and the system should display a message saying that the item is currently unavailable.

---

### **Extra Challenge 2: Set Item Price**

#### **Problem Description:**

As an admin, you should be able to change the price of any item in the store. The updated price should be reflected in the available items list and when a user adds the item to their cart.

**Tasks:**
1. Create an option for the admin to input a new price for any item.
2. Ensure that the updated price is reflected in both the list of available items and in any carts where the item is already added.

---

### **Extra Challenge 3: Change Item Stock**

#### **Problem Description:**

As an admin, you should be able to update the stock of any item. This will allow you to restock items or adjust the available quantity.

**Tasks:**
1. Create an option for the admin to change the stock level of any item.
2. When the stock is updated, the new stock level should be reflected in the items list and impact how many items users can add to their cart.

---

### **Extra Challenge 4: Change Item Description**

#### **Problem Description:**

As an admin, you should be able to update the description of any item. The description is a key part of the product information and should be modifiable.

**Tasks:**
1. Provide an option for the admin to update the description of any item.
2. Ensure that the new description is reflected in the list of items when users are browsing.

---

### **Admin Features Integration:**

To integrate these features, you can:
- Add an `isAdmin` flag to simulate admin vs. regular users.
- Present admin-specific options (like toggling item availability or changing prices) when the admin is logged in.
- Use input prompts or commands to allow the admin to interact with items in the inventory.

---

### **Example Workflow for Admin:**

1. **Admin Menu**:
   - Admin selects from the following options:
     - `Make Item Unavailable`
     - `Set Item Price`
     - `Change Item Stock`
     - `Change Item Description`

2. **Make Item Unavailable**:
   - Admin enters the item ID.
   - System toggles the availability of the item.

3. **Set Item Price**:
   - Admin selects the item ID.
   - System prompts the admin for a new price and updates the item's price.

4. **Change Item Stock**:
   - Admin selects the item ID.
   - System prompts the admin for the new stock quantity and updates the item's stock.

5. **Change Item Description**:
   - Admin selects the item ID.
   - System prompts for a new description and updates the item.

This allows your project to grow beyond a simple shopping cart into a more dynamic and functional e-commerce simulation.