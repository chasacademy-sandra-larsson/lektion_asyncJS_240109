

const url = 'https://jsonplaceholder.typicode.com/users';
const btn = document.querySelector(".btn")

const getData = function(url) {
    fetch(url)
        .then(response => {
            if(!response.ok)
                throw new Error("Sidan finns inte. 404")
            response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))

}


btn.addEventListener("click" , function() {
    getData(url)
})



