


function redBg() {
    document.body.style.backgroundColor = "#ff0000";
} 

function greenBg() {
    document.body.style.backgroundColor = "#00ff00";
}

function blueBg() {
    document.body.style.backgroundColor = "#0000FF";
}





let colors = ["red", "green", "blue", "yellow"];
function randGen(colors) {
return colors[Math.floor(Math.random() * colors.length)];
}
document.body.style.backgroundColor = "colors";