let interval = null
let chatWindow = document.querySelector('.chat-widget')
chatWindow.addEventListener('click', (event) => {
    chatWindow.classList.add('chat-widget_active')

} )
let messagesContainer = document.querySelector('.chat-widget__messages-container')
const clientInput = document.getElementById('chat-widget__input')
const chatMessages = document.getElementById('chat-widget__messages')

const botAnswers = [
   'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
   'Где ваша совесть?',
   'Кто тут?',
   'Добрый день! До свидания!',
   'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
   'Мы ничего не будем вам продавать!'
]

const randomAnswer = () => botAnswers[Math.floor(Math.random() * botAnswers.length)]

const scrollDown =() => {
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.getBoundingClientRect().height;
}


const timeStr = () => {
    let currTime = new Date()
    return currTime.toLocaleTimeString()
    //без секунд: currTime.getHours() + ':' + currTime.getMinutes();
}


const botAnswer = () => {
    chatMessages.innerHTML += `         
          <div class="message">
            <div class="message__time">${timeStr()}</div>
            <div class="message__text">${randomAnswer()}</div>
          </div>
        `;

}

const clientMessage = () => {

    chatMessages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${timeStr()}</div>
            <div class="message__text">${clientInput.value}</div>
          </div>       
        `;
    interval = setTimeout(botAnswer,5000) //поставить 30000

}


clientInput.addEventListener('keyup', (event)=> {

    if ((event.code === "Enter" || event.code === "NumpadEnter") && clientInput.value !== '') {
        clearTimeout(interval)
        clientMessage()
        botAnswer()
        clientInput.value = '';
        scrollDown()
    }

})

