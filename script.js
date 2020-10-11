'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('toggler');
    const navbar = document.getElementById('navbar');
    const main = document.querySelector('.main');
    const link = document.querySelector('.nav');
    const width = document.documentElement.clientWidth;
    
  
    toggle.addEventListener('click', ()=> {
        console.log(link);
        navbar.classList.toggle('visible-navbar');
        main.classList.toggle('move-main');
    });
    


    let sticky = navbar.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            console.log('scroll');
            } 
    });

    if (width < 768) {
            console.log(width)
            link.addEventListener('click', () => {
            navbar.classList.remove('visible-navbar');
            main.classList.remove('move-main');
        });
    };

 
})

// window.onscroll = function() {myFunction()};

// let navbar = document.getElementById("navbar");
// let sticky = navbar.offsetTop;
// let toggle = document.getElementById("toggler");
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } 




