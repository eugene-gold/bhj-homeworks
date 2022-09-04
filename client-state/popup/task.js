let modal = document.querySelector('.modal')

const showModal =()=> {
    if (!getCookies('modal=closed')) {
        modal.classList.add('modal_active');
    }

}
function getCookies(pair) {
    const pairs = document.cookie.split(';')
    return pairs.find(el => el.startsWith(pair))
}
const closeModal = () => {
    modal.classList.remove('modal_active')
    document.cookie = 'modal=closed;';
}
document.querySelector('.modal__close').addEventListener('click', (evt) =>{
    evt.preventDefault()
    closeModal()
} )

setTimeout(showModal, 3000)