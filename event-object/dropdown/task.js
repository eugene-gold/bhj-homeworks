let menu = document.querySelector('.dropdown__list').closest('.dropdown')

menu.addEventListener('click', (event)=> {
    menu.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
    event.preventDefault()
})

const menuItem = document.querySelectorAll('.dropdown__item')

menuItem.forEach(item => item.addEventListener('click', () => document.querySelector('.dropdown__value').textContent = item.querySelector('.dropdown__link').textContent))

