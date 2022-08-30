let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.send()
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4) {
//         document.getElementById('loader').classList.remove('loader_active')
//         console.log(xhr.responseText);
//     };
// };

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        document.getElementById('loader').classList.remove('loader_active')
        let data = JSON.parse(xhr.responseText);
        // console.log(data.response['Valute']['AMD'])
        let val = data.response['Valute']
        for (let key in val) {
            document.getElementById('items').insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${ val[key]['CharCode']}
                </div>
                <div class="item__value">
                   ${val[key]['Value']}
                </div>
                <div class="item__currency">
                    руб.
                </div>            
            </div>
         `)
        }
    }
})