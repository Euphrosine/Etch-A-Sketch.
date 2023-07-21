
const container = document.getElementById("grid-container");

// Function to create a grid square (div element)
function createGridSquare() {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    return div;
}

// Function to create the 16x16 grid
function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridSquare = createGridSquare();
            container.appendChild(gridSquare);
        }
    }
}

createGrid();

