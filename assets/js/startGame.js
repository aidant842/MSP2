//select difficulty
document.getElementById('easy').onclick = function () {
    easy()
};

document.getElementById('medium').onclick = function () {
    easy()
};

document.getElementById('hard').onclick = function () {
    easy()
};

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
