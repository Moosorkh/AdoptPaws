const productButton= Array.from(document.querySelectorAll('.add-to-cart'));
productButton.forEach(button=>{
button.addEventListener('click', ()=>{

    const productId= button.getAttribute('data-product-id');
    const productName= button.getAttribute('data-product-name');
    const productPrice= button.getAttribute('data-product-price');

    const productObj= {
        id: productId, 
        name: productName,
        price: productPrice
    }

    let cart= JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productObj);

    localStorage.setItem('cart', JSON.stringify(cart));

});
   

})

function getItems(){
    let addedItems= JSON.parse(localStorage.getItem('cart')) || [];
    addedItems.forEach(item => {
        console.log(item);
        
    });
    
} 
    const shoppingList==document.getElementById('#shopping-list');
    shoppingList.addEventListener('click', getItems);