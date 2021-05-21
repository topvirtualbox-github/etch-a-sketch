const screen = document.querySelector(".screen");
const clear = document.querySelector("#clear");
const black = document.querySelector("#black");
const rgb = document.querySelector("#rgb");
const size = 15;
window.addEventListener("load", createGrid(size));
let mode = "black";
let grid = document.querySelectorAll(".screen>div");

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function() {
        if (mode === "black") {
            grid[i].setAttribute("style", "background-color: #000");
        } else {
            grid[i].setAttribute("style", "background-color: #" + Math.floor(Math.random()*16777216).toString(16));
        }
    });
}

clear.addEventListener("click", function() {
    clearGrid();
});
black.addEventListener("click", function() {
    mode = "black";
});
rgb.addEventListener("click", function() {
    mode = "rgb";
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

