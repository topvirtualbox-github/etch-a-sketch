const grid = document.querySelector("#grid");
const clear = document.querySelector("#clear");
const size = document.querySelector("#size");
const mode = document.querySelector("#mode");
const black = document.querySelector("#black");
const white = document.querySelector("#white");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const rgb = document.querySelector("#rgb");

let isColor = "black";
let isGrid = "on";
let isMode = "dark";

window.addEventListener("load", createScreen(15));

grid.addEventListener("click", function() {
    changeGrid();
});
clear.addEventListener("click", function() {
    clearScreen();
});
size.addEventListener("click", function() {
    changeSize();
});
mode.addEventListener("click", function() {
    changeMode();
});
black.addEventListener("click", function() {
    isColor = "black";
});
white.addEventListener("click", function() {
    isColor = "white";
});
red.addEventListener("click", function() {
    isColor = "red";
});
green.addEventListener("click", function() {
    isColor = "green";
});
blue.addEventListener("click", function() {
    isColor = "blue";
});
yellow.addEventListener("click", function() {
    isColor = "yellow";
});
rgb.addEventListener("click", function() {
    isColor = "rgb";
});

function createScreen(num) {
    removeScreen();
    let screen = document.querySelector(".screen");
    screen.style.gridTemplateRows = "repeat(" + num + ", auto)";
    screen.style.gridTemplateColumns = "repeat(" + num + ", auto)";
    if (isGrid === "on") {
        screen.style.gridGap = "1px 1px";
    } else if (isGrid === "off") {
        screen.style.gridGap = "0px 0px";
    }
    for (let i = 0; i < num ** 2; i++) {
        let div = document.createElement("div");
        div.style.userSelect = "none";
        screen.appendChild(div).style.backgroundColor = "var(--white)";
    }
    paintScreen();
}

function removeScreen() {
    let divs = document.querySelectorAll(".screen>div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}

function paintScreen() {
    let divs = document.querySelectorAll(".screen>div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mousedown", function() {
            switch (isColor) {
                case "black":
                    divs[i].style.backgroundColor = "var(--black)";
                    break;
                case "white":
                    divs[i].style.backgroundColor = "var(--white)";
                    break;
                case "red":
                    divs[i].style.backgroundColor = "var(--red)";
                    break;
                case "green":
                    divs[i].style.backgroundColor = "var(--green)";
                    break;
                case "blue":
                    divs[i].style.backgroundColor = "var(--blue)";
                    break;
                case "yellow":
                    divs[i].style.backgroundColor = "var(--yellow)";
                    break;
                case "rgb":
                    divs[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777216).toString(16);
            }
        });
        divs[i].addEventListener("mouseover", function(e) {
            if (e.buttons === 1) {
                switch (isColor) {
                    case "black":
                        divs[i].style.backgroundColor = "var(--black)";
                        break;
                    case "white":
                        divs[i].style.backgroundColor = "var(--white)";
                        break;
                    case "red":
                        divs[i].style.backgroundColor = "var(--red)";
                        break;
                    case "green":
                        divs[i].style.backgroundColor = "var(--green)";
                        break;
                    case "blue":
                        divs[i].style.backgroundColor = "var(--blue)";
                        break;
                    case "yellow":
                        divs[i].style.backgroundColor = "var(--yellow)";
                        break;
                    case "rgb":
                        divs[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777216).toString(16);
                }
            }
        });
    }
}

function changeGrid() {
    let screen = document.querySelector(".screen");
    if (isGrid === "on") {
        screen.style.gridGap = "0px 0px";
        isGrid = "off";
    } else if (isGrid === "off") {
        screen.style.gridGap = "1px 1px";
        isGrid = "on";
    }
}

function clearScreen() {
    let divs = document.querySelectorAll(".screen>div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "var(--white)";
    }
}

function changeSize() {
    let answer = prompt("Size:");
    while (answer !== null && (isNaN(answer) || answer < 1 || answer > 64 || answer % 1 !== 0)) {
        answer = prompt("Insert a number between 1 and 64:");
    }
    if (answer !== null) {
        answer = Math.floor(answer);
        createScreen(answer);
    }
}

function changeMode() {
    let root = document.querySelector(":root");
    if (isMode === "dark") {
        root.style.setProperty("--color", "#111");
        root.style.setProperty("--background", "#eee");
        root.style.setProperty("--border", "#fff");
        isMode = "light";
    } else if (isMode === "light") {
        root.style.setProperty("--color", "#eee");
        root.style.setProperty("--background", "#111");
        root.style.setProperty("--border", "#000");
        isMode = "dark";
    }
}