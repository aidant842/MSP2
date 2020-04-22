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
    mouse.mouseLocation();

    if(interval){
        window.clearInterval(interval);
    }

    interval = window.setInterval(function(){
        ctx.clearRect(0 , 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
        mouse.draw();

        if(snake.eat(mouse)){
            mouse.mouseLocation();
        }

        snake.eatItself();
        document.querySelector('.score').innerText = 'Score: ' + snake.total;

    }, time);
};

window.addEventListener('keydown', (function(keyPress){
    const direction = keyPress.key;
    if(canPlay === true){
        snake.changeDirection(direction);
    }
    keyPress.preventDefault();

}));

document.getElementById('buttonRight').onclick = function(){
    if(canPlay === true){
        snake.moveRight();
    }
}

document.getElementById('buttonUp').onclick = function(){
    if(canPlay === true){
        snake.moveUp();
    }
}
document.getElementById('buttonDown').onclick = function(){
    if(canPlay === true){
        snake.moveDown();
    }
}
document.getElementById('buttonLeft').onclick = function(){
    if(canPlay === true){
        snake.moveLeft();
    }
}