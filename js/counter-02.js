
// добавляем прослушку на все окна
window.addEventListener('click', function(event){
    let counter;

    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
     
    // проверем является ли элеменет по которому совершен клик кнопкой Минус
    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // проверем является ли элеменет по которому совершен клик кнопкой Плюс
    if(event.target.dataset.action === 'minus') {
        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            // проверка а товар который находится в корзине
            console.log('IN cart');
            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая/Полная
            toggleCartStatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDevilery();
        }
    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDevilery();
    }
})
