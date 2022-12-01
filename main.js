var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y : 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
dino.x += 1;
dino.draw()

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cacti = [];

function run() {
    requestAnimationFrame(run);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (timer % 120 === 0) {
        var cactus = new Cactus();
        cacti.push(cactus);
    }

    cacti.forEach((a)=>{
        a.x--;
        a.draw();
    })

    dino.draw();
}

run();