function Mouse() {
    
    //function for random mouse spawn, get a random spawn that isn't outside the canvas and isn't ontop of snake
    this.randomMouseSpawn = function () {
        let validSpawn = true;
        while (validSpawn) {
            validSpawn = false;
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
            for (let i = 0; i < snake.snakeLength.length; i++) {
                if (this.x === snake.snakeLength[i].x && this.y === snake.snakeLength[i].y) {
                    validSpawn = true;
                    break;
                }
            }
        }
    }

    //draws mouse in the canvas
    this.draw = function () {
        var mouseImage = new Image();
        mouseImage.src = 'assets/images/mouse.png';
        ctx.drawImage(mouseImage, this.x, this.y, scale, scale);
    }
}
