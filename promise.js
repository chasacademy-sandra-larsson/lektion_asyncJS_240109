

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

