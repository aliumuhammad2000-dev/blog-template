const navBar = document.querySelector('#nav');
const menuBar = document.querySelector('#menu');

navBar.addEventListener('click', () => {
    if (menuBar.classList.contains('hidden')) {
        menuBar.classList.remove('hidden');
    } else {
        menuBar.classList.add('hidden');
    }
});