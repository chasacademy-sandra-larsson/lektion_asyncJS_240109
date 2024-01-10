
const url = 'https://jsonplaceholder.typicode.com/users';

// Endast ett syntaktiskt socker över Promise chaining!
// Async / await ES8
// Error handling try / catch!

async function getData() {

    try {
        const response = await fetch(url) // async

       // Synk kod
        console.log("test")

        const data = await response.json(); //async
    
        console.log(data)

        return data;
    }
    catch(error) {
        console.log(error)
    }
    
}

getData()
.then(data => console.log(data))