const GRID_BUTTON = document.querySelector("button");
const CLEAR_BUTTON = document.getElementById("clear-button")
const GRID_CONTAINER = document.querySelector(".grid-container");

//Event listener for filling in black squares. 
// GRID_CONTAINER.addEventListener("mouseover", (e)=>console.log(e));
GRID_CONTAINER.addEventListener("mouseover", function (e) {
    if (e.target.id){
        e.target.classList.add("js-grid-item--fill-black")
    }});

//Event listener for the button that changes the grid size.
GRID_BUTTON.addEventListener("click", getGridSize); 

function getGridSize(){
    let gridSize = prompt("Enter number");
    if (isNaN(parseInt(gridSize))){
        alert("Please input digits only")
        return; 
    } 
    else if (gridSize > 100){
        alert("Please input up to 100 only")
        return; 
    }
    else {
        removeGrid(); 
        makeRowCol(gridSize); 
        drawGrid(gridSize); 
    }
}; 

//Function that is called to remove current grid before drawing new grid. 
function removeGrid(){
    let gridChildAll = GRID_CONTAINER.querySelectorAll(".js-grid-item"); 
    gridChildAll.forEach(n => n.remove()); 
}

// let htmlStyles = window.getComputedStyle(document.querySelector("html"));
// let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
// let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

//Setting rows and columns of grid
function makeRowCol(gridSize){
    document.documentElement.style.setProperty("--rowNum", gridSize); 
    document.documentElement.style.setProperty("--colNum", gridSize); 
}; 

//Loop for populating grid with div
function drawGrid(gridSize){
gridSize *= gridSize
for (i = 0; i < gridSize; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("js-grid-item")
    gridItem.setAttribute("id", i);
    GRID_CONTAINER.appendChild(gridItem);
}
}; 

//Clear button for removing drawings. 
CLEAR_BUTTON.addEventListener("click", clearGrid); 

function clearGrid(){
    let removeElm = GRID_CONTAINER.querySelectorAll(".js-grid-item--fill-black");
    removeElm.forEach(n=> n.classList.toggle("js-grid-item--fill-black")); 

    // Question - Can use the forEach array method with selecting that collection of DOM?
    // GRID_CONTAINER.querySelectorAll("div").forEach(n => n.remove()); 
    // GRID_CONTAINER.querySelectorAll("js-grid-item--fill-black").forEach(n => n.classList.toggle("js-grid-item--fill-black")); 
    
    // Looking online, it says will get an HTML collection
     // GRID_CONTAINER.querySelectorAll(".js-grid-item--fill-black").classList.toggle("js-grid-item--fill-black"); 
    
    // let removeElm = GRID_CONTAINER.querySelectorAll(".js-grid-item"); 
    // removeElm.remove(); - doesn't work - returns not a function. 
    // removeElm.forEach(n => n.remove()); 
    // removeElm.remove(); -- not a function
    // removeElm.forEach(n => n.remove()); -- removes all DIV elements  
}; 