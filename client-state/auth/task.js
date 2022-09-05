const activeInput = document.querySelector('.signin')
const form = document.getElementById('signin__form')
const greetId = document.getElementById('user_id')
const exit = document.querySelector('.exit')
const greetWindow = document.querySelector('.welcome')

const showGreet =() => {
    activeInput.classList.remove('signin_active')
    greetWindow.classList.add('welcome_active')
}

window.addEventListener('load', ()=> {
    if (localStorage.loginId) {
        showGreet()
        greetId.textContent = localStorage.loginId
    }
})

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userDate = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
    request.responseType = 'json'
    request.send(userDate);
    request.addEventListener('load', () => {
            let data = request.response;
            if (data.success) {
                showGreet()
                greetId.textContent = data.user_id
                localStorage.loginId = data.user_id
            }  else {
                alert('Неверный логин/пароль')
                form.reset()
            }
    })
})

exit.addEventListener('click', ()=> {
    localStorage.removeItem('loginId')
    greetWindow.classList.remove('welcome_active')
    activeInput.classList.add('signin_active')
    form.reset()
})