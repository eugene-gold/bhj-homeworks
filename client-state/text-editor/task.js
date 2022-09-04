let inputText = document.querySelector('.card')
let textArea = document.getElementById('editor')

if (localStorage.inputSession) {
    textArea.value = localStorage.inputSession
}
else {
    console.log('empty session')
}

inputText.addEventListener('input',  (event) => {
    textArea.value = event.target.value
    localStorage.inputSession = textArea.value
})

inputText.addEventListener('click', (evt)=> {
    if(evt.target === document.getElementById('reset')) {
        localStorage.clear()
        textArea.value = ''
    }
})