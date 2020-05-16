//Variables
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width= 300;
ctx.canvas.height = 300;
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width /scale;
var snake;
var canPlay = false;
var interval;

//Game setup

function setup(time){
    canPlay = true;
    snake = new Snake();
    mouse = new Mouse();
    mouse.randomMouseSpawn();

    if(interval){
        window.clearInterval(interval);
    }

    interval = window.setInterval(function(){
        ctx.clearRect(0 , 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
        mouse.draw();

        if(snake.eatMouse(mouse)){
            mouse.randomMouseSpawn();
        }

        snake.eatItself();
        document.querySelector('.score').innerText = 'Score: ' + snake.miceAte;

    }, time);
};

//Listener for key press to change snakes direction
window.addEventListener('keydown', (function(keyPress){
    const direction = keyPress.key;
    if(canPlay === true){
        snake.changeDirection(direction);
    }
    keyPress.preventDefault();

}));


