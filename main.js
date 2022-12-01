var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = 'cactus.png';
var img2 = new Image();
img2.src = 'dino.png';

var dino = {
    x: 10,
    y : 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, 40, 40);
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
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, 40, 40);
    }
}
var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cacti = [];
var jumpTimer = 0;
var animation;

function run() {
    animation = requestAnimationFrame(run);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (timer % 120 === 0) {
        var cactus = new Cactus();
        cacti.push(cactus);
    }

    cacti.forEach((a)=>{
        if (a.x < 0) {
            o.splice(i, 1)
        }
        a.x--;
        crash(dino, a);
        a.draw();
    })

    if (jumping == true) {
        dino.y -= 3;
        jumpTimer+=3;
    }
    if (jumping == false) {
        if (dino.y < 200) {
            dino.y+=3;
        }
    }
    if (jumpTimer > 100) {
        jumping = false;
        jumpTimer = 0;
    }

    dino.draw();
}

run();

function crash(dino, cactus) {
    var xx = cactus.x - (dino.x + dino.width);
    var yy = cactus.y - (dino.y + dino.height);
    if (xx < 0 && yy < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}

var jumping = false;
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        jumping = true;
    }
})