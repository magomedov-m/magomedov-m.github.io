'use strict'

let pixels = document.querySelectorAll('.pixel');

let arr = ['pixel_active_0', 'pixel_active_1', 'pixel_active_2', 'pixel_active_3', 'pixel_active_4', 'pixel_active_5'];

let random = Math.floor(Math.random() * 6)

for (let i of pixels) {
    i.addEventListener('mouseover', function() {
        i.classList.toggle(arr[random]);
    })
};

