let taskDescription = document.querySelector('input')
let taskList =  document.getElementById('tasks__list')
let addButton = document.getElementById('tasks__add')

const task = (element) => {
    element.insertAdjacentHTML('beforeend', `
<div class="task">
    <div class="task__title">
        ${taskDescription.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
</div>`)

}


const addTask = () => {
    task(taskList)
    taskList.querySelectorAll('.task__remove').forEach(item => {
        item.onclick = function (event) {
            event.target.closest('div').remove()
        }
    })

}

addButton.addEventListener( "click", ()=> {
    if(taskDescription.value !== '') {
        addTask()
    }
    taskDescription.value = ''
})




