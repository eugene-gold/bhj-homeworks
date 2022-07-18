const arrows = document.querySelectorAll('.slider__arrow');
const itemsImg = Array.from(document.querySelectorAll('.slider__item'))

function toTheRight (arr) {
    let curr = arr.findIndex( item => item.classList.contains('slider__item_active'))
    arr[curr].classList.remove('slider__item_active')
    if (curr + 1 > arr.length - 1 ) {
        arr[0].classList.add('slider__item_active')
    } else {
        arr[curr + 1].classList.add('slider__item_active')
    }
}

function toTheLeft (arr) {
    let curr = arr.findIndex( item => item.classList.contains('slider__item_active'))
    arr[curr].classList.remove('slider__item_active')
    if (curr - 1 < 0 ) {
        arr[arr.length - 1].classList.add('slider__item_active')
    } else {
        arr[curr - 1].classList.add('slider__item_active')
    }
}

arrows.forEach(item => item.addEventListener('click', () => {
    if (item.classList.contains('slider__arrow_next')) {
        toTheRight(itemsImg)
    }
    if (item.classList.contains('slider__arrow_prev')) {
        toTheLeft(itemsImg)
    }
} ))



