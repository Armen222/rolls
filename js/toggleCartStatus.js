function toggleCartStatus() {
    

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const oderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0) {
        console.log('FULL');
        cartEmptyBadge.classList.add('none');
        oderForm.classList.remove('none')
    } else {
        console.log('EMPTY');
        cartEmptyBadge.classList.remove('none');
        oderForm.classList.add('none');
    }
}