let mainCheck = document.querySelector('.interests')

mainCheck.addEventListener('change', (event) => {
    if(! event.target.closest('label').nextElementSibling) {
    }
    else
    event.target.closest('label').nextElementSibling.querySelectorAll('.interest__check')
        .forEach( checkbox => {
            checkbox.checked = checkbox.checked !== true;

        })

})
