const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.upload.addEventListener('progress', (event)=> {

        progress.value = event.loaded / event.total

    });
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.send(formData);
    e.preventDefault()
})

