const container = document.getElementById('container');

function getSquareSize(a=16){
    return 800 / a + "px";
}

function getLoopNumber(a=16){
    return a * a;
}

function initializeGrid(a=getLoopNumber(), b=getSquareSize()){
    for(let i=1;i<=a;i++){
        const div = document.createElement('div');
        div.classList.add('drawingDivs');
        div.style.flex = "1 0 auto";
        div.style.flexWrap = "wrap";
        div.style.minWidth = b;
        div.style.minHeight = b;
        container.appendChild(div);
    }
}

initializeGrid();

// set the hover effect
container.addEventListener('mouseover', () => {
    document.querySelector('.drawingDivs:hover').style.backgroundColor = "black";
})

//clear button
const clearButton = document.getElementById('clear-button');

function resetGrid(){
    container.textContent = "";
}

clearButton.addEventListener('click', () => {
    resetGrid();
   initializeGrid();
})

//Button to resize and clear the screen
const resizeButton = document.getElementById('resize-button');

resizeButton.addEventListener('click', () => {
    resetGrid();
    askPrompt = prompt("Type the proportions (for a 64x64 grid, type 64. MAX 100!)");
    initializeGrid(getLoopNumber(+askPrompt), getSquareSize(+askPrompt));
})