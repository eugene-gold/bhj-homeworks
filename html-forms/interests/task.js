let mainCheck = document.querySelector('.interests')

mainCheck.addEventListener('change', (event) => {
    if(! event.target.closest('label').nextElementSibling) {
    }
    else
    event.target.closest('label').nextElementSibling.querySelectorAll('.interest__check')
        .forEach( checkbox => {
            checkbox.checked = checkbox.checked !== true;

        })

})
//алгоритм обхода дома дерева

// function traverse(startNode) {
//     const stack = [startNode]
//     while (stack.length > 0) {
//         const current = stack.pop()
//         if (current.classList.contains('interest__check')) {
//             current.checked = false
//         }
//         stack.push(...current.children)
//     }
// }
//
// const parent = document.querySelectorAll('.interest')
// parent.forEach((item) => {
//     traverse(item)
// })