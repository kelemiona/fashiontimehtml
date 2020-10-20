'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('toggler');
    const navbar = document.getElementById('navbar');
    const main = document.querySelector('.main');
    const link = document.querySelector('.nav');
    const width = document.documentElement.clientWidth;
    
  
    toggle.addEventListener('click', ()=> {
        console.log(link);
        toggle.classList.toggle('active');
        navbar.classList.toggle('visible-navbar');
        main.classList.toggle('move-main');
        toggle.classList.toggle('sticky-burger');
    });
    


    let sticky = navbar.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            if (width < 768 && width > 576 && toggle.classList.contains('active')) {
                toggle.classList.add("sticky-burger");
            }
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




