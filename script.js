const GRID_BUTTON = document.getElementById("grid-button");
const CLEAR_BUTTON = document.getElementById("clear-button"); 
const GRID_CONTAINER = document.querySelector(".grid-container");

function drawGrid(gridSize){
    gridSize *= gridSize;  
for (i = 0; i < gridSize; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("js-grid-item")
    gridItem.setAttribute("id", i);
    GRID_CONTAINER.appendChild(gridItem);
}
}; 
// GRID_CONTAINER.addEventListener("mouseover", (e)=>console.log(e));

GRID_CONTAINER.addEventListener("mouseover", function (e) {
    if (e.target.id){
        e.target.classList.add("js-grid-item--fill-black")
    }});

let getGridSize = function(){
    removeGrid(); 
    let gridSize = prompt("Enter number");
     if (isNaN(parseInt(gridSize))){
        alert("Please input digits only")
    } 
    else if (gridSize > 100){
        alert("Please input up to 100 only")
    }
    else {
    
    makeRowCol(gridSize); 
    drawGrid(gridSize); 
    }
}

GRID_BUTTON.addEventListener("click", getGridSize); 

// Need some explanation for this code. 
// let htmlStyles = window.getComputedStyle(document.querySelector("html"));
// let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
// let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

// Need some explanation about this code. 
function makeRowCol(gridSize){
    GRID_CONTAINER.style.setProperty("--rowNum", gridSize); 
    GRID_CONTAINER.style.setProperty("--colNum", gridSize); 
    // document.documentElement.style.setProperty("--rowNum", gridSize); 
    // document.documentElement.style.setProperty("--colNum", gridSize); 
}

function removeGrid(){
    let delDiv = GRID_CONTAINER.querySelectorAll(".js-grid-item"); 
    delDiv.forEach(n => n.remove()); 
}

CLEAR_BUTTON.addEventListener("click", clearGrid); 

function clearGrid(){
    let filledItm = GRID_CONTAINER.querySelectorAll(".js-grid-item--fill-black");
    filledItm.forEach(n => n.classList.toggle("js-grid-item--fill-black")); 
}
