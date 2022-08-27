const one = document.createElement('audio');
one.setAttribute('src', '1.mp3');
let button = document.querySelector('button');
let finish;
function zatuh() {
    one.volume = one.volume - 0.1
    if (one.volume < 0.2 || finish == false) {
        clearInterval(finish);
        one.volume = 0
    }
}
button.onmousedown = function () {
    clearInterval(finish);
    one.volume = 1
    one.currentTime = 0
    one.play();
}

button.onmouseup = function () {
    finish = setInterval(zatuh, 50);
}

button.touchstart == function () {
    clearInterval(finish);
    one.volume = 1
    one.currentTime = 0
    one.play();
}
button.touchend == function () {
    finish = setInterval(zatuh, 50);
}