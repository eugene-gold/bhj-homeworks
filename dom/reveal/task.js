const blocks = document.querySelectorAll('.reveal')

const isInViewport = function(element){
        const viewportHeight = window.innerHeight;
        const elementBottom =
            element.getBoundingClientRect().bottom;

        return (elementBottom < viewportHeight) ? true : false;
};

window.addEventListener('scroll', ()=> {
    blocks.forEach(item => {
        if(isInViewport(item)) {
            item.classList.add('reveal_active')
        } else if (!isInViewport(item)) {
            item.classList.remove('reveal_active')
        }
    })
})
