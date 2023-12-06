'use strict'

let weight = document.getElementById('form__weight');
let height = document.getElementById('form__height');
let text_out = document.querySelector('.text-out');
let age = document.getElementById('form__age');
let button = document.querySelector('.form__btn');
let img = document.querySelector('img');
let gender = document.getElementById('form__male').checked ? 'male' : 'female';

let rec_arr = [', недостаточная масса тела.', ', норма', ', избыточная масса тела.', ', ожирение первой степени', ', ожирение второй степени', ', ожирение третьей степени']

// Исполнение кода при нажатии на кнопку
button.addEventListener('click', function() {

    // Проверка на валидность формы
    if (isNaN(weight.value)) {
        alert('Необходимо ввести вашу массу в виде числа!')
    }if (isNaN(weight.value)) {
        alert('Необходимо ввести ваш рост в виде числа!')
    }
    // Производится расчет индекса массы тела и отображение результата
    let res = (Number(weight.value) / (Number(height.value) / 100) ** 2).toFixed(1);

    let imgUrl;
    if (document.getElementById('form__male').checked) {
        imgUrl = 'i'
    }if (document.getElementById('form__female').checked) {
        imgUrl = 'w'
    }

        // Тут надо вставить изображение 
    if (res < 18.5) {
        text_out.textContent = res + rec_arr[0];
        img.src = `src/img/${imgUrl}-1.png`
    }else if (res >= 18.5 && res <= 24.9) {
        text_out.textContent = res + rec_arr[1];
        img.src = `src/img/${imgUrl}-1.png`
    }else if (res >= 25 && res <= 30) {
        text_out.textContent = res + rec_arr[2];
        img.src = `src/img/${imgUrl}-2.png`
    }else if (res > 30 && res <= 35) {
        text_out.textContent = res + rec_arr[3];
        img.src = `src/img/${imgUrl}-3.png`
    }else if (res > 35 && res <= 40) {
        text_out.textContent = res + rec_arr[4];
        img.src = `src/img/${imgUrl}-4.png`
    }else if (res > 40) {
        text_out.textContent = res + rec_arr[5];
        img.src = `src/img/${imgUrl}-5.png`
    }
})
 
