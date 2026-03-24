// Navigation toggle elements
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('#navMenu')

// Toggle the mobile menu and hamburger icon state
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    hamburger.classList.toggle('open')
});