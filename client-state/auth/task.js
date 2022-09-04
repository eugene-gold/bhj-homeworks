const activeInput = document.querySelector('.signin')
const form = document.getElementById('signin__form')
const greetWindow = document.querySelector('.welcome')
const greetId = document.getElementById('user_id')
const exit = document.querySelector('.exit')

window.addEventListener('load', ()=> {
    if (localStorage.loginId) {
        activeInput.classList.remove('signin_active')
        greetWindow.classList.add('welcome_active')
        greetId.textContent = localStorage.loginId
    }
})

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userDate = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
    request.send(userDate);
    request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE && request.status === 200) {
            let data = JSON.parse(request.responseText);
            if (data.success) {
                activeInput.classList.remove('signin_active')
                greetWindow.classList.add('welcome_active')
                greetId.textContent = data.user_id
                localStorage.loginId = data.user_id
            }  else {
                alert('Неверный логин/пароль')
                form.reset()
            }
        }
    })
})

exit.addEventListener('click', ()=> {
    localStorage.clear()
    greetWindow.classList.remove('welcome_active')
    activeInput.classList.add('signin_active')
    form.reset()
})