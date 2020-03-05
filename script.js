const div = document.getElementById('container');

let rows = document.getElementsByClassName('row');

function gridRow(rowNum) {
    for(i =0; i < rowNum; i++){
        let createRow = document.createElement('div');
        div.appendChild(createRow);
        createRow.className = 'row';
    }
}
