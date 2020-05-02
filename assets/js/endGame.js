//Variables
var gameOver = new Audio('assets/sounds/gameOver.wav');
var highScore = localStorage.getItem('highScore');

//function for highScore
function bestScore() {
    if (snake.miceAte > highScore) {
        highScore = snake.miceAte;
        localStorage.setItem('highScore', highScore.toString());
    }
    return highScore;
}

//function to end the game

function End() {
    gameOver.currentTime = 0;
    gameOver.play();
    document.querySelector('.highScore').innerText = 'HighScore: ' + bestScore();
    snake.x = 0;
    snake.y = 0;
    snake.xSpeed = 0;
    snake.ySpeed = 0;
    snake.miceAte = 0;
    snake.snakeLength = [];
    this.gameOver();
}

//function to turn off play and show play game button again
function gameOver() {
    canPlay = false;
    document.getElementById('start').classList.toggle('hidden');
}
