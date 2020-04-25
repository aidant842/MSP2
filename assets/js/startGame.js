//select difficulty
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

//function to handle selected difficulty, difficulty based on interval time, increasing snakes speed
function easy() {
    setup(150);
    document.getElementById('start').classList.toggle('hidden');
}

function medium() {
    setup(100);
    document.getElementById('start').classList.toggle('hidden');
}

function hard() {
    setup(60);
    document.getElementById('start').classList.toggle('hidden');
}
