function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();


    let counter = 0;
    let y = -100;
    let x = -100
    let z = 1

    while (counter < 5000){
        circle(x,y,z);
        counter += 1
        y += 10
        x += 10
        z += 2
        circle(x+250,y,z)
        circle(x+500,y,z)
    }
   
    
    
    // circle(100, 200, 50); 
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
