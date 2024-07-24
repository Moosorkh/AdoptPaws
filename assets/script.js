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






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}