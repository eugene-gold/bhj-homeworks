const menuItem = document.querySelectorAll('.menu__link')

menuItem.forEach(item => item.addEventListener('click', (event) => {
    const subMenu = item.closest('.menu__item').querySelector('.menu_sub');
    if(subMenu) {
        event.preventDefault()
        subMenu.classList.toggle('menu_active')
    }

}))

