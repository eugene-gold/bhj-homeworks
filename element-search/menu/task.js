const menuItem = document.querySelector('.menu__sub')
const subMenu = document.querySelectorAll('.menu_sub')
subMenu.forEach(item => item.addEventListener('click', () => {
    showMenu(menuItem)
}))
subMenu.forEach(item => item.closest('.menu__item').addEventListener('click', (evt) => {

    evt.preventDefault()
}))


function showMenu (a) {
    a.classList.add('.menu_active')
}


