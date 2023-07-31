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
    gridSize *= gridSize
    drawGrid(gridSize); 
}

GRID_BUTTON.addEventListener("click", getGridSize); 
