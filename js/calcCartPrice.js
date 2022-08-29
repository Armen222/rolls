function calcCartPriceAndDevilery() {    
    const cartItem = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    cartItem.forEach(function (item){
        

        const amounEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amounEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;
    });
    // Отображаем цену на странице
   totalPriceEl.innerText = priceTotal;

   if(priceTotal > 0) {
    cartDelivery.classList.remove('none');
   }else {
    cartDelivery.classList.add('none');
   }

   if(priceTotal >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
   } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
   }
}