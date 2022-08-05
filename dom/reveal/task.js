const blocks = document.querySelectorAll('.reveal')

const isInViewport = function(element){
        const viewportHeight = window.innerHeight;
        const elementBottom =
            element.getBoundingClientRect().bottom;

        return ((elementBottom < viewportHeight && elementBottom > 0)) ? true : false

};

window.addEventListener('scroll', ()=> {
    blocks.forEach(item => {
        if(isInViewport(item)) {
            item.classList.add('reveal_active')
        } else {
            item.classList.remove('reveal_active')
        }
    })
})
