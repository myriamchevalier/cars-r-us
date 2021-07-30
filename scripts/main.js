import { CarsRUs } from "./Cars-R-Us.js";

const mainContainer = document.querySelector("#container") //creating a js variable to link html and js

// function below uses mainContainer variable to render the html in our browser
const renderAllHTML = () => {  
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()
