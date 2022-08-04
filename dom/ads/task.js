const element = document.querySelector('.card')
const elements = Array.from(element.querySelectorAll('.rotator__case'))
let interval = 1000;
let index = 0;


const nextSpan = () => {

    if (index + 1 === elements.length) {
        index = 0;
        elements[elements.length - 1].classList.remove('rotator__case_active')
    }

    elements[index].classList.remove('rotator__case_active')

    index ++;

    elements[index].classList.add('rotator__case_active')

    elements[index].style.color = elements[index].getAttribute('data-color')

    interval =  elements[index].dataset.speed;


    setTimeout(nextSpan, interval)
}

nextSpan()