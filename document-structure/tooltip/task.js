let hrefs = document.querySelectorAll('.has-tooltip')
let tooltip = document.createElement('div')
tooltip.className = 'tooltip';
const deleteTT = () => tooltip.remove()

const showBox = (event) => {
    tooltip.textContent = event.target.title

    event.target.appendChild(tooltip)

    if ((event.target.getBoundingClientRect().bottom + 20) > window.innerHeight ) {
        tooltip.style.top = event.target.getBoundingClientRect().top - 30 + 'px'
    }
    else {
        tooltip.style.top = event.target.getBoundingClientRect().bottom + 'px'
    }
    tooltip.style.left = event.target.getBoundingClientRect().left + 'px'


    setTimeout(deleteTT, 1000)
}
hrefs.forEach( item => item.addEventListener('click',  (event)=> {
    event.preventDefault()
    tooltip.classList.toggle('tooltip_active')
    showBox(event)

}))


