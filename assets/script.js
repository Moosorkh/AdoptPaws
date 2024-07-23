const productButton= document.querySelectorAll('button');
productButton.forEach(button=>{
function myFunction(){
    const productId= button.getAttribute('data-product-id');
    const productObj= {
        id: productId
    }

    let cart= JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productObj);

    localStorage.setItem('cart', JSON.stringify(cart));
}
productButton.addEventListener('click', myFunction);
})