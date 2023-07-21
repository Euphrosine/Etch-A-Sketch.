
const container = document.getElementById("grid-container");

// Function to create a grid square (div element)
function createGridSquare() {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.backgroundColor = "white"; // Start with white background
    div.currentDarkness = 0; // Initialize darkness level

    // Function to apply a random RGB color and progressive darkening on hover
    function applyRandomColor() {
        const randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;

        const darknessIncrement = 0.1; // 10% darker on each interaction
        const maxDarkness = 0.9; // Maximum darkness level (90% black)

        if (div.currentDarkness < maxDarkness) {
            div.currentDarkness += darknessIncrement;
        }

        const newColor = `rgba(0, 0, 0, ${div.currentDarkness})`;
        div.style.backgroundColor = newColor;
        div.style.borderColor = randomRGB; // Border color based on random RGB value
    }

    // Add event listener for hover effect
    div.addEventListener("mouseenter", applyRandomColor);

    return div;
}

// Function to create the 16x16 grid (default size)
function createGrid(gridSize = 16) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = createGridSquare();
            container.appendChild(gridSquare);
        }
    }
}

// Function to reset the grid based on user input
function resetGrid() {
    let gridSize = prompt("Enter the number of squares per side (max 100):");
    gridSize = parseInt(gridSize);

    // Validate user input (limit to a maximum of 100)
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Clear existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create a new grid with the specified size
    createGrid(gridSize);
}

// Attach click event listener to the button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGrid);

// Create the default 16x16 grid when the page loads
createGrid();

