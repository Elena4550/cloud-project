const burger = document.querySelector('.burger');
const navigation = document.querySelector('.first-screen__nav');

const toggleMenu =()=> {
   burger.classList.toggle('open');
   navigation.classList.toggle('show');
}

burger.addEventListener('click', toggleMenu)
