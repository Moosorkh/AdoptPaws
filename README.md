# Group 4 Project
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Markup-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-Styles-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Overview

This project implements a simple shopping cart functionality using HTML, CSS, and JavaScript. Users can add items to the cart, view the items in a modal, and clear the cart. The cart items are stored in the browser's `localStorage`, allowing the items to persist across page reloads.

## Features

- **Add to Cart:** Users can add products to the cart by clicking the "Add to Cart" button.
- **Display Cart Items:** The cart items are displayed in a list.
- **View Cart in Modal:** Users can view the cart items in a modal.
- **Clear Cart:** Users can clear the cart, removing all items from `localStorage` and the displayed list.

## Project Structure

- **HTML:** The structure of the webpage, including buttons for adding items to the cart and the modal for viewing the cart.
- **CSS:** Basic styling for the page and modal.
- **JavaScript:** Logic for handling cart functionality, including adding, displaying, and clearing items.

## How to Use

1. **Add Items to Cart:**
    - Click the "Add to Cart" button on any product.
    - This will add the product to the cart and display the cart items in a list.

2. **View Cart:**
    - Click the "View Cart" button to open the modal.
    - The modal will display the current items in the cart.

3. **Clear Cart:**
    - Click the "Clear Cart" button to remove all items from the cart.
    - This will clear both the `localStorage` and the displayed list of items.

## Code Explanation

### JavaScript Functions

- **Event Listeners for Add to Cart Buttons:**
    ```javascript
    const productButton = Array.from(document.querySelectorAll('.add-to-cart'));

    productButton.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');

            const productObj = { id: productId, name: productName, price: productPrice };

            addToCart(productObj);
            displayCartItems(productObj);
        });
    });
    ```

- **Add to Cart Function:**
    ```javascript
    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    ```

- **Display Cart Items Function:**
    ```javascript
    function displayCartItems(item) {
        const cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
        const itemList = document.createElement('li');
        itemList.textContent = `${item.name} $${item.price}`;
        cartItemsList.appendChild(itemList);
    }
    ```

- **Get Items Function:**
    ```javascript
    function getItems() {
        let addedItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
        addedItems.forEach(item => {
            const itemList = document.createElement('li');
            itemList.textContent = `${item.name} $${item.price}`;
            cartItemsList.appendChild(itemList);
            console.log(item.name, item.id, item.price);
        });
    }
    ```

- **Clear Items Function:**
    ```javascript
    function clearItems() {
        localStorage.removeItem('cart');
        const cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
    }
    ```

- **Populate Shopping List Function:**
    ```javascript
    function populateShoppingList() {
        let items = JSON.parse(localStorage.getItem('cart')) || [];
        const shoppingList = document.getElementById('shoppingListItems');
        shoppingList.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} $${item.price}`;
            shoppingList.appendChild(li);
        });
    }
    ```

- **Event Listeners for Modal:**
    ```javascript
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('myModal');
        const btn = document.getElementById('myBtn');
        const span = document.getElementsByClassName('close')[0];

        btn.onclick = function() {
            modal.style.display = 'block';
            populateShoppingList();
        }

        span.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
    ```

- **Clear Shopping List Function:**
    ```javascript
    function clearShoppingList() {
        localStorage.removeItem('cart');
        const shoppingList = document.getElementById('shoppingListItems');
        shoppingList.innerHTML = '';
    }

    const clearButton = document.getElementById('clear-shopping-list');
    clearButton.addEventListener('click', clearShoppingList);
    ```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shopping-cart-project.git
    ```
2. Open the `index.html` file in your browser to see the project in action.

## Contribution

Feel free to fork this repository and contribute by submitting a pull request. For any issues, please open an issue in the repository.

## License

This project is licensed under the MIT License.
