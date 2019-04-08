
let displayValue = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body= document.getElementById("gradient")


color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right bottom, " + 
    color1.value + 
    ", " + 
    color2.value +
    ", " + 
    color3.value + 
    ")";

    displayValue.textContent = body.style.background + ";"
})

color2.addEventListener("input", function(){
   body.style.background = "linear-gradient(to right bottom, " + 
    color1.value + 
    ", " + 
    color2.value +
    ", " + 
    color3.value + 
    ")";

    displayValue.textContent = body.style.background + ";"
})

color3.addEventListener("input", function(){
   body.style.background = "linear-gradient(to right bottom, " + 
    color1.value + 
    ", " + 
    color2.value +
    ", " + 
    color3.value +
    ")";

    displayValue.textContent = body.style.background + ";"
})
