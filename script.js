const screen = document.querySelector(".screen");
const clear = document.querySelector("#clear");
const size = 15;

window.addEventListener("load", createGrid(size));

let grid = document.querySelectorAll(".screen>div");

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function() {
        grid[i].setAttribute("style", "background-color: #000");
    });
}

clear.addEventListener("click", function() {
    clearGrid();
});

function createGrid(num) {
    screen.style.gridTemplateRows = "repeat(" + num + ", auto)";
    screen.style.gridTemplateColumns = "repeat(" + num + ", auto)";
    screen.style.gridGap = "1px 1px";
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement("div");
        screen.appendChild(div).setAttribute("style", "background-color: #fff");
    }
}

function clearGrid() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].setAttribute("style", "background-color: #fff");
    }
}



