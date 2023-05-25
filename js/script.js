'use strict';

window.addEventListener('DOMContentLoaded', () => {
    fix100vh();
    findHeight();
    window.addEventListener('resize', () => {
        fix100vh();
        findHeight();
    })
})

let promo = document.querySelector('.promo');


function fix100vh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function findHeight(){
    let fullHeight = document.documentElement.clientHeight,
        fullWidth = document.documentElement.clientWidth;
    if(fullWidth > 768 && fullWidth <= 1024){
        if(fullHeight < 730){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth > 576 && fullWidth <= 768){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } else if(fullWidth <= 576){
        if(fullHeight < 700){
            promo.classList.add('no-full');
        } else {
            if(promo.classList.contains('no-full')){
                promo.classList.remove('no-full');
            }
        }
    } 
}

