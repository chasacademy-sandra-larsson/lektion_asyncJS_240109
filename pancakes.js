function makePancakes(callback){
    // Simulerar tiden det tar
    // att göra pannkakor
    setTimeout( function(){
      console.log("Making pancakes...");
      callback();
    }, 1500);
  }
  
  function pancakesReady(){
    console.log("Let's eat!");
  }
  
makePancakes(pancakesReady);    