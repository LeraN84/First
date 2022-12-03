let orderButton = document.querySelector('.orderButton')
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')

orderButton.addEventListener('click', function(){
    alert("Оформление заказа");
    prompt("Что Вы хотите заказать?");
    confirm("Пожалуйста, подтвердите действие");
})

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})