const burger = document.querySelector('.btn-burger');
const navigation = document.querySelector('.header__menu');

const toggleMenu =()=> {
   burger.classList.toggle('open');
   navigation.classList.toggle('show');
}

burger.addEventListener('click', toggleMenu)
