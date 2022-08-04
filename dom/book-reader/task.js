const element = document.getElementById('book')

let fonts = Array.from(element.querySelectorAll('.font-size'))
let colors = Array.from(element.querySelectorAll('.color'))
let backgrnds = Array.from(element.querySelector('.book__control_background').querySelectorAll('.color'))

const changeFont = (event) => {
    if(element.classList.contains('book_fs-small')) {
        element.classList.remove('book_fs-small')
    }
    if(element.classList.contains('book_fs-big')) {
        element.classList.remove('book_fs-big')
    }
    let index = fonts.indexOf(event.target)
    if(index === 0) {
        element.classList.add('book_fs-small')
    }
    if (index === 2) {
        element.classList.add('book_fs-big')
    }
}
fonts.forEach( item => item.addEventListener('click', (event) => {
    event.preventDefault()
    fonts.find( item => {
        item.classList.remove('font-size_active')
    })
    event.target.classList.add('font-size_active')
    changeFont(event)
}))

const changeColor = (event) => {
    if(element.classList.contains('book_color-black')) {
       element.classList.remove('book_color-black')
    }
    if(element.classList.contains('book_color-gray')) {
        element.classList.remove('book_color-gray')
    }
    if(element.classList.contains('book_color-whitesmoke')) {
        element.classList.remove('book_color-whitesmoke')
    }
    let index = colors.indexOf(event.target)

    if(index === 0) {
        element.classList.add('book_color-black')
    }
    if(index === 1) {
        element.classList.add('book_color-gray')
    }
    if(index === 2) {
        element.classList.add('book_color-whitesmoke')
    }
}

colors.forEach( item => item.addEventListener('click', (event) => {
    event.preventDefault()
    colors.find( item => {
        item.classList.remove('color_active')
    })
    event.target.classList.add('color_active')

    changeColor(event)
}))


const changeBackGrnd = (event) => {
    if(element.classList.contains('book_bg-black')) {
        element.classList.remove('book_bg-black')
    }
    if(element.classList.contains('book_bg-gray')) {
        element.classList.remove('book_bg-gray')
    }
    if(element.classList.contains('book_bg-white')) {
        element.classList.remove('book_bg-white')
    }
    let index = backgrnds.indexOf(event.target)

    if(index === 0) {
        element.classList.add('book_bg-black')
    }
    if(index === 1) {
        element.classList.add('book_bg-gray')
    }
    if(index === 2) {
        element.classList.add('book_bg-white')
    }
}

backgrnds.forEach( item => item.addEventListener('click', (event) => {
    event.preventDefault()
    colors.find( item => {
        item.classList.remove('color_active')
    })
    event.target.classList.add('color_active')

    changeBackGrnd(event)
}))

