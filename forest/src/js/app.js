'use strict'

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.008}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.02}deg;
        `
    })
})

window.addEventListener('deviceorientation', function(e) => {
    const x = e.beta;
    const y = e.gamma;

    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(x - window.innerWidth / 2) * -0.008}deg;
            --move-y: ${(y - window.innerHeight / 2) * -0.02}deg;
        `
    })
})
