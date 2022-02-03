const container = document.querySelector('div');

const maxDivHeightWidth = () => {
    return 500 / 16;
}


for(let i=1;i<=256;i++){
    const div = document.createElement('div');
    div.style.flex = "1 0 auto";
    div.style.flexWrap = "wrap";
    div.style.minWidth = "31.25px";
    div.style.minHeight = "31.25px";
    container.appendChild(div);
}
