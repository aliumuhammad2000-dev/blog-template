const navMenu = document.querySelector('.nav-menu');
const menuBar = document.querySelector('.menu-bar');
const closeIcon = document.querySelector('.icon-close');
const hamburgerIcon = document.querySelector('.hamburger');

menuBar.addEventListener('click', () => {
    navMenu.classList.toggle('-translate-x-full');
    closeIcon.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('-translate-x-full');
        closeIcon.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
    });
});