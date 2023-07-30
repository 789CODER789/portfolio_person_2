window.onscroll = function() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').style.background = 'white';
        document.querySelector('header').style.boxShadow = '0 .1rem 1rem rgba(0, 0, 0, .5)'
    }
    else{
        document.querySelector('header').style.background = 'tranparent';
        document.querySelector('header').style.boxShadow = 'none'    
    }
}

/* daek mode */


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 80;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('actiove');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');   
            });
        };
    });

let header = document.querySelector('.header')

header.classList.toggle('sticky', window.scrollY > 80);

// menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
};


let daekModeIcon = document.querySelector('#darkMode-icon');

daekModeIcon.onclick = () => {
    daekModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active')
}