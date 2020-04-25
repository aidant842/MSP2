function Mouse() {
    this.x;
    this.y;

    //function for random mouse spawn, get a random integer that isn't outside the canvas and inline with snake
    this.randomMouseSpawn = function () {
        let count = 0;
        let valid = true;
        while (true) {
            if (count > 100000) {
                End();
                break;
            }
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
            for (let i = 0; snake.snakeLength.length; i++){
                if (this.x === snake.snakeLength[i].x && this.y === snake.snakeLength[i].y) {
                    valid = false;
                    break;
                }
            }
            if(valid){
                break;
            }
            count++;
        }
    }

        //draws mouse in the canvas
        this.draw = function () {
            var mouseImage = new Image();
            mouseImage.src = 'assets/images/mouse.png';
            ctx.drawImage(mouseImage, this.x, this.y, scale, scale);
        }
    }
