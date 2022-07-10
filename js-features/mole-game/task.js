let killedMoles = document.getElementById('dead')
let lostMoles = document.getElementById('lost')

const allHoles = document.querySelectorAll('.hole')
allHoles.forEach(item=> item.addEventListener('click', function (){
    if (item.classList.contains('hole_has-mole')) {
        incrementWinCount()
    }
    else if (!(item.classList.contains('hole_has-mole'))){
        incrementLostCount()
    }

}))

function incrementWinCount () {
    let count = killedMoles.textContent = parseInt(killedMoles.textContent) + 1;
    if (count === 10) {
        alert('You win')
        killedMoles.textContent = 0;
        lostMoles.textContent = 0;
    }
}
function incrementLostCount () {
    let count = lostMoles.textContent = parseInt(lostMoles.textContent) +1;
    if (count === 5) {
        alert('You lose')
        killedMoles.textContent = 0;
        lostMoles.textContent = 0;
    }
}



