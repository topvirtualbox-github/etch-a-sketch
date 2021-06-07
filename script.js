const color = document.querySelector("#color");
const input = document.querySelector("#color>input");
const grid = document.querySelector("#grid");
const clear = document.querySelector("#clear");
const size = document.querySelector("#size");
const mode = document.querySelector("#mode");

const black = document.querySelector("#black");
const white = document.querySelector("#white");
const red = document.querySelector("#red");
const orange = document.querySelector("#orange");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const purple = document.querySelector("#purple");

let isColor = "black";
let isGrid = "on";
let isMode = "dark";

window.addEventListener("load", createScreen(15));

input.addEventListener("input", function() {
    changeColor(input.value);
});
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

black.addEventListener("mousedown", function() {
    changeColor("black");
});
white.addEventListener("mousedown", function() {
    changeColor("white");
});
red.addEventListener("mousedown", function() {
    changeColor("red");
});
orange.addEventListener("mousedown", function() {
    changeColor("orange");
});
yellow.addEventListener("mousedown", function() {
    changeColor("yellow");
});
green.addEventListener("mousedown", function() {
    changeColor("green");
});
blue.addEventListener("mousedown", function() {
    changeColor("blue");
});
purple.addEventListener("mousedown", function() {
    changeColor("purple");
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
            if (isColor === "black") {
                divs[i].style.backgroundColor = "var(--black)";
            } else if (isColor === "white") {
                divs[i].style.backgroundColor = "var(--white)";
            } else if (isColor === "red") {
                divs[i].style.backgroundColor = "var(--red)";
            } else if (isColor === "orange") {
                divs[i].style.backgroundColor = "var(--orange)";
            } else if (isColor === "yellow") {
                divs[i].style.backgroundColor = "var(--yellow)";
            } else if (isColor === "green") {
                divs[i].style.backgroundColor = "var(--green)";
            } else if (isColor === "blue") {
                divs[i].style.backgroundColor = "var(--blue)";
            } else if (isColor === "purple") {
                divs[i].style.backgroundColor = "var(--purple)";
            } else {
                divs[i].style.backgroundColor = isColor;
            }
        });
        divs[i].addEventListener("mouseover", function(e) {
            if (e.buttons === 1) {
                if (isColor === "black") {
                    divs[i].style.backgroundColor = "var(--black)";
                } else if (isColor === "white") {
                    divs[i].style.backgroundColor = "var(--white)";
                } else if (isColor === "red") {
                    divs[i].style.backgroundColor = "var(--red)";
                } else if (isColor === "orange") {
                    divs[i].style.backgroundColor = "var(--orange)";
                } else if (isColor === "yellow") {
                    divs[i].style.backgroundColor = "var(--yellow)";
                } else if (isColor === "green") {
                    divs[i].style.backgroundColor = "var(--green)";
                } else if (isColor === "blue") {
                    divs[i].style.backgroundColor = "var(--blue)";
                } else if (isColor === "purple") {
                    divs[i].style.backgroundColor = "var(--purple)";
                } else {
                    divs[i].style.backgroundColor = isColor;
                }
            }
        });
    }
}

function changeColor(col) {
    isColor = col;
    if (isColor === "black") {
        color.style.backgroundColor = "var(--black)";
        input.value = "#000000";
    } else if (isColor === "white") {
        color.style.backgroundColor = "var(--white)";
        input.value = "#ffffff";
    } else if (isColor === "red") {
        color.style.backgroundColor = "var(--red)";
        input.value = "#f85245";
    } else if (isColor === "orange") {
        color.style.backgroundColor = "var(--orange)";
        input.value = "#feb718";
    } else if (isColor === "yellow") {
        color.style.backgroundColor = "var(--yellow)";
        input.value = "#efe803";
    } else if (isColor === "green") {
        color.style.backgroundColor = "var(--green)";
        input.value = "#12ca22";
    } else if (isColor === "blue") {
        color.style.backgroundColor = "var(--blue)";
        input.value = "#068dda";
    } else if (isColor === "purple") {
        color.style.backgroundColor = "var(--purple)";
        input.value = "#752ed4";
    } else {
        color.style.backgroundColor = isColor;
        input.value = isColor;
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
        root.style.setProperty("--main", "#111");
        root.style.setProperty("--background", "#eee");
        root.style.setProperty("--border", "#fff");
        isMode = "light";
    } else if (isMode === "light") {
        root.style.setProperty("--main", "#eee");
        root.style.setProperty("--background", "#111");
        root.style.setProperty("--border", "#000");
        isMode = "dark";
    }
}