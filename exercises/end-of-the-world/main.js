let d = 20000;
let countdown = setInterval(myTimer, 1000);
let timer = "";
let boom = new Audio('kablam.mp3');
let beep = new Audio('beep.mp3');
let siren = new Audio('siren.mp3');

function doubleD(number) {
	return (number < 10 ? '0' : '') + number;
}

function toggle() {
    document.getElementById('timer').classList.toggle("hider");
}

function myTimer() {
	let hours = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	let minutes = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
	let seconds = Math.floor(d % (1000 * 60) / 1000);
	timer = doubleD(hours) + ':' + doubleD(minutes) + ':' + doubleD(seconds);
    d = d - 1000;
    
    document.getElementById('timer').innerHTML = timer

    if (d < 0) {
        boom.play()
        setInterval(toggle,500);
        clearInterval(countdown)
        siren.loop = true;
        siren.play();
    } else if (d < 10000) {
        beep.play()
    }
}