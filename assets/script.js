const productButton = Array.from(document.querySelectorAll('.add-to-cart'));

productButton.forEach(button => {
    button.addEventListener('click', () => {

        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = button.getAttribute('data-product-price');

        const productObj = {
            id: productId,
            name: productName,
            price: productPrice
        }

        addToCart(productObj);
        displayCartItems(productObj);
    });
});
//moved the add to cart function outside of the click event
    function addToCart(item){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);

        localStorage.setItem('cart', JSON.stringify(cart));
    }
// added display added items fucntion
function displayCartItems(item){
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = '';
    const itemList = document.createElement('li');
    itemList.textContent = `${item.name} $${item.price}`;
    cartItemsList.appendChild(itemList);
}


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

function clearItems() {
    localStorage.removeItem('cart');
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = ''; // Clear the list
}


const shoppingList = document.getElementById('shopping-list');
const clearShoppingListButton = document.getElementById('clear-shopping-list');

shoppingList.addEventListener('click', getItems);
clearShoppingListButton.addEventListener('click', clearItems);






// Function to populate the shopping list in the modal
function populateShoppingList() {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    const shoppingList = document.getElementById('shoppingListItems');
    shoppingList.innerHTML = ''; // Clear previous items

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} $${item.price}`;
        shoppingList.appendChild(li);
    });
}

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
