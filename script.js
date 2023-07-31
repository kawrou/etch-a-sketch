const GRID_BUTTON = document.querySelector("button");
// const CLEAR_BUTTON = document.getElementById("clear-button")
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
}; 

GRID_BUTTON.addEventListener("click", getGridSize); 

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));

function makeRowCol(gridSize){
    document.documentElement.style.setProperty("--rowNum", gridSize); 
    document.documentElement.style.setProperty("--colNum", gridSize); 
}; 

// CLEAR_BUTTON.addEventListener("click", clearGrid); 

// function clearGrid(){
//     let removeElm = GRID_CONTAINER.querySelectorAll(".js-grid-item--fill-black");
//     removeElm.forEach(n=> n.classList.toggle("js-grid-item--fill-black")); 

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
// }; 