const dotsElement = document.getElementById("dots");
let numberOfDots = 3;

setInterval(() => {
  if(numberOfDots === 4) numberOfDots = 1;
  
  dotsElement.innerHTML = "";
  
  for(let i = 0; i < numberOfDots; i++) dotsElement.innerHTML += ".";

  numberOfDots++;
}, 1000)