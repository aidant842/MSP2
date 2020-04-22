//Variables
var highScore = 0;

//function for highScore
function bestScore() {
    if (snake.total > highScore) {
        highScore = snake.total;
    }
    return highScore;
}

//function to end the game

function End() {
    var gameOver = new Audio('assets/sounds/gameOver.wav');
    gameOver.play();
    document.querySelector('.highSore').innerText = 'HighScore: ' + bestScore();
    snake.x = 0;
    snake.y = 0;
    snake.xSpeed = 0;
    snake.ySpeed = 0;
    snake.total = 0;
    snake.snakeSize = [];
    this.gameOver();
}

//function to turn off play and show play game button again
function gameOver() {
    canPlay = false;
    document.getElementById('start').classList.toggle('hidden');
}
