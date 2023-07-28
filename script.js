const GRID_CONTAINER = document.querySelector(".grid-container");

for (i = 0; i < 256; i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("js-grid-item")
    gridItem.setAttribute("id", i);
    GRID_CONTAINER.appendChild(gridItem);
}

// GRID_CONTAINER.addEventListener("mouseover", (e)=>console.log(e));

GRID_CONTAINER.addEventListener("click", function (e) {
    if (e.target.id){
        e.target.classList.add("js-grid-item--fill-black")
    }});

