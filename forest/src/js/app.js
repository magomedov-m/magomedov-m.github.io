'use strict'

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxPoints > 0;

function handleMouseMove(e) {
    document.addEventListener('mousemove', e => {
        Object.assign(document.documentElement, {
            style: `
                --move-x: ${(e.clientX - window.innerWidth / 2) * -0.008}deg;
                --move-y: ${(e.clientY - window.innerHeight / 2) * -0.02}deg;
            `
        })
    })
}

function handleDeviceOrientation(e) {
    const x = e.beta;
    const y = e.gamma;

    Object.assign(document.documentElement.style, {
        
            '--move-x': `${(y) * 0.5}deg`;
            '--move-y': `${(x) * 0.5}deg`;
    });
}

if (isTouchDevice) {
    window.addEventListener('deviceorientation', handleDeviceOrientation);
}else {
    document.addEventListener('mousemove', handleMouseMove);
}
