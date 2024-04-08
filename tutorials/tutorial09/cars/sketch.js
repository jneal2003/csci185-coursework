const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 100,
    speed: 20.2,
    color: 'hotpink'
};
const c2 = {
    x: 1000,
    y: 500,
    width: 100,
    speed: -20.2,
    color: 'hotpink'
};
const c3 = {
    x: 1000,
    y: 600,
    width: 250,
    speed: -20.2,
    color: 'hotpink'
};



// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (c1.x > canvasWidth) {
        c1.x = -100
    } if (c2.x < -100) {
        c2.x = 1500
    }
    if (c3.x < -120) {
        c3.x = 1500
    }
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;


    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);


    // draw the grid (optional -- feel free to remove this line):

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
