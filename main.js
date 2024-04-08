const timer = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let stopWatch = () => {
    seconds++;
    if (seconds % 60 === 0) {
        minutes++;
        seconds = 0;
    }
    timer.innerHTML = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + ':' + ('0' + milliseconds).slice(-2);
}

let interval;

start.addEventListener('click' , () => {
    interval = setinterval(stopWatch, 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
})

stop.addEventListener('ckick' , () => {
    clearInterval(interval);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
})

reset.addEventListener('click' , () => {
    timer.innerHTML = '0:0:0:0';
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
})