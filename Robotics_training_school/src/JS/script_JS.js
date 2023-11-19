"use strict"
// Переменные для формы 
// let input_name = document.querySelector('.input_name');
// let input_surname = document.querySelector('.input_surname');
// let input_email = document.querySelector('.input_email');
// let button_application = document.querySelector('.button_application');

// Открытие и закрытие карточки преподавателя
// let fourth_section = document.querySelector(".fourth-section")
// let dynamic_card = document.querySelector('.card__more_information')
// let more_details = document.querySelectorAll('.more-details')
// let closed_button = document.querySelector('.closed');
// let name_teacher = document.querySelectorAll('.name_teacher');
// let dc_name = document.querySelector('.card__more_information__img_info__social_media');

// for (let i of more_details) {
//   i.addEventListener('click', function() {
//     dynamic_card.style.display = 'inline-block'; 
//   }); 
// };

// closed_button.addEventListener('click', function() {
//   dynamic_card.style.display = 'none';
// });

// Блок кода для работы гамбургера
let humburger = document.querySelector('.humburger');
let menu = document.querySelector('.menu__navigation');

humburger.addEventListener('click', function() {
  humburger.classList.toggle('humburger_active')
  menu.classList.toggle('menu__navigation_active')
})


// Слайдер
$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

