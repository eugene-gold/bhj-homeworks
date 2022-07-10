const countDecrement = function () {
    const timerState = document.getElementById('timer');
    timerState.textContent -= 1;
    if (timerState.textContent === '-1') {
        alert('You win')
        timerState.textContent = 0;
        return clearInterval(timerId)
    }
}
const timerId = setInterval(countDecrement, 100)

