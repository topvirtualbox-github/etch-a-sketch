const black = document.querySelector("#black");
const rgb = document.querySelector("#rgb");
const clear = document.querySelector("#clear");
let color = "black";

window.addEventListener("load", createGrid(16));
window.addEventListener("load", paintGrid());

black.addEventListener("click", function() {
    color = "black";
});
rgb.addEventListener("click", function() {
    color = "rgb";
});
clear.addEventListener("click", function() {
    clearGrid();
});

function createGrid(num) {
    let screen = document.querySelector(".screen");
    screen.style.gridTemplateRows = "repeat(" + num + ", auto)";
    screen.style.gridTemplateColumns = "repeat(" + num + ", auto)";
    screen.style.gridGap = "1px 1px";
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement("div");
        screen.appendChild(div).style.backgroundColor = "#fff";
    } 
}

function clearGrid() {
    let grid = document.querySelectorAll(".screen>div");
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = "#fff";
    }
}

function paintGrid() {
    let grid = document.querySelectorAll(".screen>div");
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", function() {
            if (color === "black") {
                grid[i].style.backgroundColor = "#000";
            } else {
                grid[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777216).toString(16);
            }
        });
    }
}