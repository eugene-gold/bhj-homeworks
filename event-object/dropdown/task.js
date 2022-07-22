let menu = document.querySelector('.dropdown__list').closest('.dropdown')

menu.addEventListener('click', (event)=> {
    menu.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
    event.preventDefault()
})

const itemValue = document.querySelector('.dropdown__value').textContent
const menuItem = document.querySelectorAll('.dropdown__item')
menuItem.forEach()

console.log(menuItem)