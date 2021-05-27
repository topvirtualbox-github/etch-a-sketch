const black = document.querySelector("#black");
const white = document.querySelector("#white");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const rgb = document.querySelector("#rgb");
const clear = document.querySelector("#clear");
const size = document.querySelector("#size");
let color = "black";

window.addEventListener("load", createGrid(16));
window.addEventListener("load", paintGrid());

black.addEventListener("click", function() {
    color = "black";
});
white.addEventListener("click", function() {
    color = "white";
});
red.addEventListener("click", function() {
    color = "red";
});
green.addEventListener("click", function() {
    color = "green";
});
blue.addEventListener("click", function() {
    color = "blue";
});
yellow.addEventListener("click", function() {
    color = "yellow";
});
rgb.addEventListener("click", function() {
    color = "rgb";
});
clear.addEventListener("click", function() {
    clearGrid();
});
size.addEventListener("click", function() {
    sizeGrid();
});

function createGrid(num) {
    let screen = document.querySelector(".screen");
    screen.style.gridTemplateRows = "repeat(" + num + ", auto)";
    screen.style.gridTemplateColumns = "repeat(" + num + ", auto)";
    screen.style.gridGap = "1px 1px";
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement("div");
        screen.appendChild(div).style.backgroundColor = "var(--white)";
    } 
}

function clearGrid() {
    let grid = document.querySelectorAll(".screen>div");
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = "var(--white)";
    }
}

function paintGrid() {
    let grid = document.querySelectorAll(".screen>div");
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", function() {
            if (color === "black") {
                grid[i].style.backgroundColor = "var(--black)";
            } else if (color === "white") {
                grid[i].style.backgroundColor = "var(--white)";
            } else if (color === "red") {
                grid[i].style.backgroundColor = "var(--red)";
            } else if (color === "green") {
                grid[i].style.backgroundColor = "var(--green)";
            } else if (color === "blue") {
                grid[i].style.backgroundColor = "var(--blue)";
            } else if (color === "yellow") {
                grid[i].style.backgroundColor = "var(--yellow)";
            } else {
                grid[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777216).toString(16);
            }
        });
    }
}

function removeGrid() {
    let grid = document.querySelectorAll(".screen>div");
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    }
}

function sizeGrid() {
    let answer = prompt("Size:");
    while (answer !== null && (isNaN(answer) || answer < 1 || answer > 64 || answer % 1 !== 0)) {
        answer = prompt("Insert a number between 1 and 64:");
    }
    if (answer !== null) {
        answer = Math.floor(answer);
        removeGrid();
        createGrid(answer);
        paintGrid();
    }
}