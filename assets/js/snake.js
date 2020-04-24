//declaring snake function
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.miceAte = 0;
    this.snakeSize = [];
    var snakeTop = new Image();
    snakeTop.src = "assets/images/head.png"


    //Function to draw snake on canvas
    this.draw = function () {
        ctx.fillStyle = "green";
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";


        ctx.drawImage(snakeTop, this.x, this.y, scale, scale);

        //loop through snakeSize arrays length and draw each box at its x and y 
        for (let i = 0; i < this.snakeSize.length; i++) {
            ctx.drawImage(this.snakeSize[i].x, this.snakeSize[i].y, scale, scale);
            ctx.strokeRect(this.snakeSize[i].x, this.snakeSize[i].y, scale, scale);
        }
    }

    //function to check for changes to the snake
    this.update = function () {

        //moves tail to the left
        for (let i = 0; i < this.snakeSize.length - 1; i++) {
            this.snakeSize[i] = this.snakeSize[i + 1];
        }

        //add the new box to the tail
        this.snakeSize[this.miceAte - 1] = { x: (this.x), y: (this.y) };

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x > canvas.width) {
            End();
        }

        else if (this.x < 0) {
            End();
        }

        else if (this.y > canvas.height) {
            End();
        }

        else if (this.y < 0) {
            End();
        }
    }



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



    this.changeDirection = function (direction) {
        var arrowSound = new Audio("assets/sounds/arrowPress.wav");
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




    this.eatMouse = function (mouse) {
        var mouseAte = new Audio("assets/sounds/shortEat.wav");

        if (this.x === mouse.x && this.y === mouse.y) {
            mouseAte.play();
            this.miceAte++;
            return true;
        }
        else {
            return false;
        }
    }

    this.eatItself = function () {
        for (let i = 0; i < this.snakeSize.length; i++) {
            if (this.x === this.snakeSize[i].x && this.y === this.snakeSize[i].y) {
                End();
            }
        }
    }
}