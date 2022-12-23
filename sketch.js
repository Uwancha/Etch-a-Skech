// Global variables
let changeGrid = document.querySelector("#newGrid");
let randomColor = document.querySelector("#rgbColor");
let erase = document.querySelector("#erase");
let black = document.querySelector("#blackColor");

//Function to reset grid size
function changeGridSize(){
    let newSqu = parseInt(prompt("How many squares per side: "));
    let container = document.querySelector("#inner")

    if (newSqu > 100) {
        alert("Maximum is 100")
    }else {
    container.replaceChildren()
     makeGrids(newSqu);
     changeColor()
} }
//Function to update color to black
function blackColor() {
    let cols = document.querySelectorAll(".col")

    cols.forEach(col => col.addEventListener("mouseenter", () => col.style.cssText = "background-color: black;"))
}

// Function to update color to random rgb
function rgbColor() {
    let cols = document.querySelectorAll(".col");
    
    cols.forEach(col => col.addEventListener("mouseenter", () => {
        col.style.cssText = 'background-color: rgb('+ Math.round(Math.random() * 255) + ","  + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255)+');';
    }) ) 
}

// Function to create grids
function makeGrids(v) {
    for (var i = 0; i < v; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (var j = 0; j < v; j++) {
        let col = document.createElement("div")
        let box = document.createElement("div")
        box.classList.add("box")
        col.classList.add("col")
        box.appendChild(col)
        row.appendChild(box)

    let container = document.querySelector("#inner");
    container.appendChild(row);
}}}