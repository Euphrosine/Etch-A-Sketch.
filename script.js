
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
            
            // Add event listeners for hover effect
            gridSquare.addEventListener("mouseenter", function () {
                gridSquare.style.backgroundColor = "black";
            });

            gridSquare.addEventListener("mouseleave", function () {
                gridSquare.style.backgroundColor = "";
            });
            container.appendChild(gridSquare);
        }
    }
}

createGrid();

