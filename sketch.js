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