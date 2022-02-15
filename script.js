function makeGrid() {
    let gridSize = prompt("Insert grid size (1 to 100)");
    if (gridSize >= 1 && gridSize <= 100 ); // pass
    else gridSize = 16;// for outside the limit and non-integer inputs

    const container = document.querySelector("div.container");
    container.innerHTML = "" // Remove previous grid

    squareSize = 1000/gridSize;
    for (let i = 0; i < gridSize**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    usePaint();
}

function clearGrid() {
    const grid = document.querySelectorAll("div.square");
    for (let square of grid) {
        square.style.backgroundColor = "#121212";
    }
}


function usePaint() {
    const grid = document.querySelectorAll("div.square");
    for (let square of grid) {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = getRandomColor();
        });
    }
    paintButton.disabled = true;
    eraseButton.disabled = false;
}


function useEraser() {
    const grid = document.querySelectorAll("div.square");
    for (let square of grid) {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = "#121212"
        });
    }
    paintButton.disabled = false;
    eraseButton.disabled = true;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const paintButton = document.querySelector("button.paint");
const eraseButton = document.querySelector("button.erase");

makeGrid();
usePaint();