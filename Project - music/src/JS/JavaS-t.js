'use strict'
// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.nav-menu'),
//     menuItem = document.querySelectorAll('.nav-menu__list-item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('nav-menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('nav-menu_active');
//         })
//     })
// })








class Client {
    constructor(name, surname, fatherName, age, location, number) {
        this.name = name
        this.surname = surname
        this.fatherName = fatherName
        this.age = age
        this.location = location
        this.number = number
    }
    general_information () {
        return `Имя: ${this.name}; Фамилия: ${this.surname}; Возраст: ${this.age}; Место жительства: ${this.location}; Номер телефона: ${this.number}.`
    }
    toId () {
        return `Имя: ${this.name}; Фамилия: ${this.surname}; Номер телефона: ${this.number}`
    }
};

let ClientId = new Client('Magomed', 'Magomedov', 'Abdurazakovich', 21, 'р. Дагестан, г. Махачкала', 8964555349);
console.log(ClientId.general_information());


