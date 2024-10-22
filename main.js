let NO_OF_ROWS = 16;
let NO_OF_COLS = 16;

const container = document.querySelector('.container');
createGrid(NO_OF_ROWS, NO_OF_COLS);
allowEtching();





newGridBtn = document.querySelector('.new-grid-btn');
newGridBtn.addEventListener('click', ()=>{
    NO_OF_ROWS = prompt('Number of squares per side of grid (max. 100): ');
    NO_OF_ROWS = NO_OF_ROWS > 100 ? 100 : NO_OF_ROWS;
    NO_OF_COLS = NO_OF_ROWS;
    container.innerHTML = '';
    createGrid(NO_OF_ROWS, NO_OF_COLS);
    container.style.gridTemplateColumns = `repeat(${NO_OF_ROWS}, 1fr)`
    allowEtching();
})


// Function Definitions
function createGrid(NO_OF_ROWS, NO_OF_COLS){
    for(let row = 0; row < NO_OF_ROWS; row++){
        for(let col = 0; col < NO_OF_COLS; col++){
           let gridItem = document.createElement('div');
           gridItem.classList.add('grid-item');
           gridItem.setAttribute('id',`${row}-${col}`)
           container.appendChild(gridItem);
        }
       }
}


function allowEtching(){
    let gridItems = document.querySelectorAll('.grid-item')
    gridItems = Array.from(gridItems);

    gridItems.forEach((item)=>{
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'lightblue';
        })
    })
}
