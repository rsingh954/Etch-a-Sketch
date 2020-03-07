const div = document.getElementById('container');
const rows = document.querySelectorAll('.row');
let body = document.getElementsByTagName('body');

function gridRow(rowNum) {
    for(i =0; i < rowNum*rowNum; i++){
        let createRow = document.createElement('div');
        div.appendChild(createRow);
        createRow.className = 'row';
        div.style.gridTemplateColumns = `repeat(${rowNum}, 1fr)`;
    }
}
gridRow(16);

