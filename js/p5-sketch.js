var canvas;

let h = 700;

let img;

function windowResized() {
    resizeCanvas(windowWidth, h);
    img.resize(width, 0);
}

function preload(){
    img = loadImage("../img/many-books.jpg")
}

function setup() {
    canvas = createCanvas(windowWidth, h);
    canvas.parent("P5Canvas");

    img.resize(width, 0);

    frameRate(20);

    rectMode(CENTER);
}

function draw() {
    background("#f7f7f7");

    const n = 40 + 30 * sin(frameCount/500);
    const grid = height/n;
    for(let x = grid/2; x < width; x += grid){
        for (let y = grid / 2; y < height; y += grid) {
            const c = img.get(x, y);
            noStroke();
            fill(c);
            rect(x, y, grid*0.9, grid*0.9)
        }
    }
}