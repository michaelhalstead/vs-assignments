let mySquare = document.getElementById('square');
let triggers = {
    82:'red',
    66:'blue',
    71:'green',
    89:'yellow',
    79:'orange',
    mousedown:'red',
    mouseup:'yellow',
    dblclick:'green',
    wheel:'orange'
}

window.addEventListener("keydown", colorChange);
window.addEventListener("wheel", colorChange);
mySquare.addEventListener("dblclick", colorChange);
mySquare.addEventListener("mousedown", colorChange);
mySquare.addEventListener("mouseup", colorChange);

function colorChange(e) {
    (e.type == 'keydown') ? mySquare.style.background = triggers[e.keyCode] : mySquare.style.background = triggers[e.type];
}