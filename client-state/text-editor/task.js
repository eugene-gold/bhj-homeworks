let inputText = document.querySelector('.card')
let textArea = document.getElementById('editor')

textArea.value = localStorage.getItem('inputSession');

inputText.addEventListener('input',  (event) => {
    textArea.value = event.target.value
    localStorage.inputSession = textArea.value
})

document.getElementById('reset').addEventListener('click', (evt)=> {
        evt.preventDefault()
        localStorage.removeItem('inputSession')
        textArea.value = ''
})