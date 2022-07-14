const arrows = document.querySelectorAll('.slider__arrow ');
const itemsImg = document.querySelectorAll('.slider__item')
console.log(itemsImg)

arrows.forEach(item => item.addEventListener('click', changeImage ))

function changeImage () {
    let slide = 0;
    console.log('click')
}

