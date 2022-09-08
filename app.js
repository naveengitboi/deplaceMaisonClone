
// hamBurger menu
const openBtn = document.querySelector('#openBtn')
const navLinks = document.querySelector('.navLink')

openBtn.addEventListener('click', () => {
    navLinks.classList.toggle('activeLinks')
})