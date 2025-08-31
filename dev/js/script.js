const burger = document.querySelector('.burger');
const navigation = document.querySelector('.first-screen__nav');

const toggleMenu =()=> {
   burger.classList.toggle('open');
   navigation.classList.toggle('show');
}

burger.addEventListener('click', toggleMenu)


// const burger = document.querySelector('.burger');
// const navigation = document.querySelector('.first-screen__nav');
// const card = document.querySelector('.motivation-card');

// const toggleMenu = () => {
//   burger.classList.toggle('open');
//   navigation.classList.toggle('show');
  
//   // тут керуємо карткою
//   card.classList.toggle('hidden', navigation.classList.contains('show'));
// };

// burger.addEventListener('click', toggleMenu);
