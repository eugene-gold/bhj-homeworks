let clickCount = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie');

function increaseWidth () {
    cookie.width = 210;
    clickCount.textContent = parseInt(clickCount.textContent) + 1;
}
function decreaseWidth () {
    cookie.width = 200;
    clickCount.textContent = parseInt(clickCount.textContent) + 1;
}
cookie.onclick = function () {
    if (cookie.width === 210) {
        decreaseWidth ()
    }
    else {
        increaseWidth()
    }
}