const container = document.querySelector('.container');

    for(let k=1; k<= 256; k++){
        const div = document.createElement('div');
        div.style.flexShrink = "0";
        div.style.border = "1px solid black";
        div.style.width = "80px";
        div.style.height = "80px";
        container.appendChild(div);
    }

