// Fixes Audio issues in Safari (caused by Safari not caching audio)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

//Difficulty Select
document.getElementById('easy').onclick = function () {
    easy();
};

document.getElementById('medium').onclick = function () {
    medium();
};

document.getElementById('hard').onclick = function () {
    hard();
};

//get Local storage key highScore and set to html element of class highScore
var highScore = localStorage.getItem('highScore') || 0;
document.querySelector('.highScore').innerText = 'HighScore: ' + highScore;

//functions to handle selected difficulty, difficulty based on interval time, increasing snakes speed
function easy() {
    setup(200);
    document.getElementById('start').classList.toggle('hidden');
}

function medium() {
    setup(140);
    document.getElementById('start').classList.toggle('hidden');
}

function hard() {
    setup(100);
    document.getElementById('start').classList.toggle('hidden');
}
