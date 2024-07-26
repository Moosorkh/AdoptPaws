const productButton = Array.from(document.querySelectorAll('.add-to-cart'));

productButton.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));
        const productQuantity = 1;

        const productObj = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };

        addToCart(productObj);
        displayCartItems();
    });
});

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1; // Increment quantity if item exists
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemList = document.createElement('li');
        itemList.textContent = `${item.name} $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(itemList);
    });
}

// Function to populate the shopping list in the modal
function populateShoppingList() {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    const shoppingList = document.getElementById('shoppingListItems');
    shoppingList.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    items.forEach(item => {
        const itemPtag = document.createElement('p');
        itemPtag.textContent = `${item.name} $${item.price} x ${item.quantity}`;
        shoppingList.appendChild(itemPtag);
        totalPrice += item.price * item.quantity;
    });

    // Display total price
    const totalPricePtag = document.createElement('p');
    totalPricePtag.textContent = `Total: $${totalPrice.toFixed(2)}`;
    shoppingList.appendChild(totalPricePtag);
}

// Function to clear items
function clearItems() {
    localStorage.removeItem('cart');
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = ''; // Clear the list
    populateShoppingList(); // Clear the shopping list in the modal
}

const shoppingList = document.getElementById('shopping-list');
const clearShoppingListButton = document.getElementById('clear-shopping-list');

clearShoppingListButton.addEventListener('click', clearItems);

// Event listeners for opening and closing the modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    const span = document.getElementsByClassName('close')[0];

    // Open the modal
    btn.onclick = function() {
        modal.style.display = 'block';
        populateShoppingList(); // Populate the shopping list when modal opens
    }

    // Close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal if user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// Function to clear shopping list
function clearShoppingList() {
    localStorage.removeItem('cart'); // Clear localStorage
    const shoppingList = document.getElementById('shoppingListItems');
    shoppingList.innerHTML = ''; // Clear the list displayed in the modal
}

// Event listener for clearing shopping list
const clearButton = document.getElementById('clear-shopping-list');
clearButton.addEventListener('click', clearShoppingList);