const GRID_BUTTON = document.querySelector("button");
const GRID_CONTAINER = document.querySelector(".grid-container");

function drawGrid(gridSize){
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
    let gridSize = prompt("Enter number");
    if (isNaN(parseInt(gridSize))){
        alert("Please input digits only")
    } 
    else if (gridSize > 100){
        alert("Please input up to 100 only")
    }
    else {
    makeRowCol(gridSize); 
    gridSize *= gridSize
    drawGrid(gridSize); 
    }
}

GRID_BUTTON.addEventListener("click", getGridSize); 

// let htmlStyles = window.getComputedStyle(document.querySelector("html"));
// let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
// let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

function makeRowCol(gridSize){
    document.documentElement.style.setProperty("--rowNum", gridSize); 
    document.documentElement.style.setProperty("--colNum", gridSize); 
}