//Variables
var buttonSound = new Audio("assets/sounds/arrowPress.wav");
var mouseAte = new Audio("assets/sounds/shortEat.wav");

//declaring snake function
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.miceAte = 0;
    this.snakeLength = [];
    var snakeTop = new Image();
    snakeTop.src = 'assets/images/head.png';
    var snakeBody = new Image();
    snakeBody.src = 'assets/images/snakeBody3.png';


    //Function to draw snake on canvas
    this.draw = function () {
        ctx.fillStyle = "green";
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        //Custom Sprite for Snake Head
        ctx.drawImage(snakeTop, this.x, this.y, scale, scale);

        //loop through snakeLength arrays length and draw each box at its x and y 
        for (let i = 0; i < this.snakeLength.length; i++) {
            ctx.drawImage(snakeBody, this.snakeLength[i].x, this.snakeLength[i].y, scale, scale);
            ctx.strokeRect(this.snakeLength[i].x, this.snakeLength[i].y, scale, scale);
        }
    }

    //function to check for changes to the snake
    this.update = function () {

        //moves tail to the left
        for (let i = 0; i < this.snakeLength.length - 1; i++) {
            this.snakeLength[i] = this.snakeLength[i + 1];
        }

        //add the new box to the tail
        this.snakeLength[this.miceAte - 1] = { x: (this.x), y: (this.y) };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //Check to see if snake goes outside canvas, if so, end game
        if (this.x > (canvas.width - 1)) {
            End();
        }

        else if (this.x < 0) {
            End();
        }

        else if (this.y > (canvas.height - 1)) {
            End();
        }

        else if (this.y < 0) {
            End();
        }
    }

    //Audio function
    playAudio = function () {
        buttonSound.currentTime = 0;
        buttonSound.play();
    }

    //Functions for each direction
    this.moveUp = function () {
        playAudio();
        if (this.ySpeed != (scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveRight = function () {
        playAudio();
        if (this.xSpeed != (-scale * 1)) {
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveDown = function () {
        playAudio();
        if (this.ySpeed != (-scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveLeft = function () {
        playAudio();
        if (this.xSpeed != (scale * 1)) {
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        }
        else {
            console.log("can't turn back on itself");
        }
    }


    //Function for direction change based on user input
    this.changeDirection = function (direction) {
        if (direction === 'ArrowUp') {
            this.moveUp();
        }
        else if (direction === 'ArrowRight') {
            this.moveRight();
        }
        else if (direction === 'ArrowDown') {
            this.moveDown();
        }
        else if (direction === 'ArrowLeft') {
            this.moveLeft();
        }
    }

    // Mobile Controls
    document.getElementById('buttonRight').onclick = function(){
        if (canPlay == true){
            snake.moveRight();
        }    
    }

    document.getElementById('buttonUp').onclick = function(){
        if (canPlay == true){
            snake.moveUp();
        }    
    }
    document.getElementById('buttonDown').onclick = function(){
        if (canPlay == true){
            snake.moveDown();
        }    
    }
    document.getElementById('buttonLeft').onclick = function(){
        if (canPlay == true){
            snake.moveLeft();
        }    
    }


    //Function to check did snake eat mouse

    this.eatMouse = function (mouse) {
        
        if (this.x === mouse.x && this.y === mouse.y) {
            mouseAte.currentTime = 0;
            mouseAte.play();
            this.miceAte++;
            return true;
        }
        else {
            return false;
        }
    }

    //Function to check did snake eat itself

    this.eatItself = function () {
        for (let i = 0; i < this.snakeLength.length; i++) {
            if (this.x === this.snakeLength[i].x && this.y === this.snakeLength[i].y) {
                End();
            }
        }
    }
}