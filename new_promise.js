
// Flip a coin 
function flip() {
    console.log("Myntet är i 'luften'")
    const flipResult = Math.random() > 0.5;
    setTimeout(() => {
    
    }, 2000)
    return flipResult;
}

const flipACoin = new Promise((resolve, reject) => {
    console.log("Jag kastar myntet!!");

    const flipResult = flip(); // tar par sekunder...
    
    // Krona => resolve, Klave => reject
    if(flipResult) {
        resolve("Krona!!")
    }
    else {
        reject("Klave!")
    }

});

flipACoin
.then(flipResult => console.log("Myntet kastades och blev", flipResult))
.catch(error => console.log(error))