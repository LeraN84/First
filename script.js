let orderButton = document.querySelector('.orderButton')

orderButton.addEventListener('click', function(){
    alert("Оформление заказа");
    prompt("Что Вы хотите заказать?");
    confirm("Пожалуйста, подтвердите действие");
})