let modal = document.getElementById('modal_main')
let box = document.getElementById('modal_success')
let close = document.querySelectorAll('.modal__close_times')
let btn = document.querySelector('.btn')

function displayModal (a) {
    a.classList.add('modal_active')
}

function hideModal (a) {
    a.classList.remove('modal_active')
}

function showBox (a,b) {
    hideModal(a)
    displayModal(b)
}

displayModal(modal)
close.forEach( item=> item.addEventListener('click', ()=> hideModal(modal)))
btn.addEventListener('click', () => {
    showBox(modal, box)
})
 close.forEach( item=> item.addEventListener('click', ()=> hideModal(box)))
