const container = document.querySelector('div');

function getSquareSize(){
    return 500 / 16 + "px";
}
//reminder: if you change the dimensions(example, from 16x16 to 64x64) you have to 
//change the number of loops. You get the amount of loops making the number of divs * 2


for(let i=1;i<=256;i++){
    const div = document.createElement('div');
    div.classList.add('drawingDivs');
    div.style.flex = "1 0 auto";
    div.style.flexWrap = "wrap";
    div.style.minWidth = getSquareSize();
    div.style.minHeight = getSquareSize();
    container.appendChild(div);
}

// set the hover effect
container.addEventListener('mouseover', () => {
    document.querySelector('.drawingDivs:hover').style.backgroundColor = "black";
});
