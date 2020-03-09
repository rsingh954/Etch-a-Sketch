const div = document.getElementById('container');
const button = document.querySelector('.button');

//clear the grid
function clearGrid() {
    let cells = document.querySelectorAll('div.row');
    for (i = cells.length - 1; i >= 0; i--) {
        div.removeChild(div.childNodes[i + 1]);
    }
    if (cells.childNodes > 0) {
        console.log('wo');
        div.removeChild(div.childNodes[0]);
    }

}

function createNewGrid() {
    clearGrid();
    let newGrid = prompt("How many rows and columns do you want? (Enter one number): ");
    let n = parseInt(newGrid);
    if(isNaN(n)){ 
        alert("ERROR: Please only enter a whole number. (i.e. 32) ");
    };
    gridRow(parseInt(newGrid));
    return parseInt(newGrid);

}



//This makes the rows and we used inline styles to cofigure the grid. We used inline stlyes so we can pass the parameter through backticks
function gridRow(rowNum) {

    for (i = 0; i < rowNum * rowNum; i++) {
        let createRow = document.createElement('div');
        div.appendChild(createRow);
        createRow.className = 'row';
        div.style.gridTemplateColumns = `repeat(${rowNum}, 1fr)`;
        div.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;
    }
    mouseEvent();
}
//default grid size
gridRow(16);

//Need a mouse over event
function mouseEvent() {
    let rows = document.querySelectorAll('div.row');
    rows.forEach((row) => {
        row.addEventListener('mouseover', (e) => {
            row.classList.add('draw');
        })
    })
}

function clearSketch() {
    let activeCell = document.querySelectorAll('div.draw');
    activeCell.forEach((cell) => {
        cell.classList.remove('draw');
    })

}
