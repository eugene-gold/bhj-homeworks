const firstMenu = document.getElementById('tabs1')

const allTabs = Array.from(firstMenu.querySelectorAll('.tab'))
const tabContent = firstMenu.querySelectorAll('.tab__content')

const cleanContent = () => {
    allTabs.forEach( item => item.classList.remove('tab_active'))
    tabContent.forEach(item => item.classList.remove('tab__content_active'))
}

allTabs.forEach(item => item.addEventListener('click', (event) => {
    cleanContent()
    event.target.classList.add('tab_active')
    let index = allTabs.indexOf(allTabs.find(item => item.classList.contains('tab_active')))
    tabContent[index].classList.add('tab__content_active')

}))


