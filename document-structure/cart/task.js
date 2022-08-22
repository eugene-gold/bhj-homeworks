let cart =  document.querySelector('.cart__products')

document.querySelector('.products').addEventListener('click', (event) => {
    let addQuantityButton = parseInt(event.target.closest('.product').querySelector('.product__quantity-value').textContent)
    let productCount = event.target.closest('.product').querySelector('.product__quantity-value').textContent
    let selectedItem = event.target.closest('.product').dataset.id
    let allProducts = Array.from(cart.querySelectorAll('.cart__product'))
    let cartItem = allProducts.find(item => item.dataset.id === selectedItem)

    if (event.target.closest('.product__quantity-control_dec') ) {
         if (productCount > 1){
            event.target.closest('.product').querySelector('.product__quantity-value').textContent -= 1;
        }
    }
    if (event.target.closest('.product__quantity-control_inc')) {
        if (productCount >= 0){
            event.target.closest('.product').querySelector('.product__quantity-value').textContent = parseInt(productCount) + 1;
        }

    }

    if (event.target.closest('.product__add') && addQuantityButton !== 0) {
        if (!cartItem) {
            cart.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${event.target.closest('.product').dataset.id}">
                   <img class="cart__product-image" src="${event.target.closest('.product').querySelector('img').src}">
                    <div class="cart__product-count">${event.target.closest('.product').querySelector('.product__quantity-value').textContent}</div>
                </div>
`) }
        else {
            cartItem.querySelector('.cart__product-count').textContent =
                parseInt(cartItem.querySelector('.cart__product-count').textContent) + parseInt(productCount)
        }
    }
})




