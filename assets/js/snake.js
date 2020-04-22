//Declaring Snake Function
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.snakeSize = [];
    var snakeTop = new Image();
    snakeTop.sec = 'assets/images/head.png';

    //Function to draw snake on canvas
    this.draw = function () {
        ctx.fillStyle = 'green';
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';

        //draw snake at position 0, 0 using snakeTop image
        ctx.drawImage(snakeTop, this.x, this.y, scale, scale);

        //while i is greater than length of snakeSize array draw box behind snake to add to tail
        for (let i = 0; i < this.snakeSize.length; i++) {
            ctx.fillRect(this.snakeSize[i].x, this.snakeSize[i].y, scale, scale);
            ctx.strokeRect(this.snakeSize[i].x, this.snakeSize[i].y, scale, scale);
        }
    }

    //function to call updates on snake to check status of snake
    this.update = function () {

        //adding to snakeSize array
        for (let i = 0; i < snakeSize.length; i++) {
            this.snakeSize[i] = this.snakeSize[i + 1];
        }
        //add at snakes location
        this.snakeSize[this.total - 1] = { x: (this.x), y: (this.y) };

        //snakes speed
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        //check if snake goes outside of canvas
        if (this.x > canvas.width) {
            End();
        }

        else if (this.x < 0) {
            End();
        }

        else if (this.x > canvas.height) {
            End();
        }

        else if (this.x < 0) {
            End();
        }


    }


    //directional functions
    this.moveUp = function () {
        if (this.ySpeed != (scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveRight = function () {
        if (this.xSpeed != (-scale * 1)) {
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveDown = function () {
        if (this.ySpeed != (-scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveLeft = function () {
        if (this.xSpeed != (scale * 1)) {
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    //direction function for pc use with arrow keys
    this.changeDirection = function (direction) {
        var arrowSound = new Audio('assets/sounds/arrowPress.wav');
        arrowSound.play();

        if (direction === 'ArrowUp') {
            this.moveUp();
        }

        if (direction === 'ArrowRight') {
            this.moveRight();
        }

        if (direction === 'ArrowDown') {
            this.moveDown();
        }

        if (direction === 'ArrowLeft') {
            this.moveLeft();
        }
    }

    //function for checking if mouse was ate, add to snakes size if it does
    this.eatMouse = function (mouse) {
        var mouseAte = new Audio('assets/sounds/shortEat.wav');

        if (this.x === mouse.x && this.y === mouse.y) {
            mouseAte.play();
            this.total++;
            return true;
        }
        else {
            return false;
        }
    }

    //function for snake eating itself end game if it does
    this.eatItself = function () {
        for (let i = 0; i < this.snakeSize.length; i++) {
            if (this.x === this.snakeSize[i].x && this.y === this.snakeSize[i].y) {
                End();
            }
        }
    }
}