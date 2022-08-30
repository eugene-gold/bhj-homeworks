let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()

let answerId = ''
let answerIndex = ''
let answerHTML = document.getElementById('poll__answers')

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        document.getElementById('poll__title').textContent = data.data.title
        let answers = data.data.answers
        answerId += data.id
        // console.log(answerId)
        answers.forEach( (item, index) => {
            answerHTML.insertAdjacentHTML('beforeend', `
            <button class="poll__answer" data-id="${index}">
              ${item}
            </button>
            `)

        })
    }
})

answerHTML.addEventListener('click', (event) => {
    if(event.target.classList.contains('poll__answer')) {
        alert('Ваш голос засчитан')
        answerIndex += event.target.dataset.id
        const xhr2 = new XMLHttpRequest;
        xhr2.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhr2.send( `vote=${answerId}&answer=${answerIndex}` );

        xhr2.addEventListener('readystatechange', () => {
            if(xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
                let data = JSON.parse(xhr2.responseText);
                let stat = data.stat
                // console.log(stat)
                answerHTML.innerHTML = ''
                stat.forEach( item => {
                    answerHTML.insertAdjacentHTML('beforeend', `
            <div class="poll__answer"  >
              ${item.answer}:  <span style="font-weight: bold">${item.votes / 10 
                        //в задании не написано про проценты
                    }%</span>  
            </div>
            `)
                })

            }
        })

    }
})

