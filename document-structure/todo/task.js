let taskDescription = document.querySelector('input')
let taskList =  document.getElementById('tasks__list')
let addButton = document.getElementById('tasks__add')

taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains('task__remove')) {
        event.target.closest('div').remove()
    }
})
const task = (element) => {
    element.insertAdjacentHTML('beforeend', `
    <div class="task">
        <div class="task__title">
            ${taskDescription.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
`)
}

const addTask = () => {
    task(taskList)
}

addButton.addEventListener( "click", (event)=> {
    event.preventDefault()
    if(taskDescription.value.trim().length !== 0) {
        addTask()
    }
    taskDescription.value = ''
})




