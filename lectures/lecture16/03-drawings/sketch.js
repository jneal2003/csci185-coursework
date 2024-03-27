function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("white");
  

    

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    https://p5js.org/reference/#/p5/ellipse
    fill('green')
    circle(700, 200, 350)
    fill('red');
    ellipse(650, 125, 60, 100);
    ellipse(750, 125, 60, 100);
    
    fill('white')
    circle(750, 125, 50)
    circle(650, 125, 50)
    fill('black')
    circle(735,125,15)
    circle(665,125,15)
    fill('black')
    ellipse(700, 200, 40, 70)
    circle(680, 225, 35)
    circle(720, 225, 35)
    circle(640, 280, 40)
    circle(620, 250, 40)
    circle(760, 280, 40)
    circle(780, 250, 40)
    ellipse(700,290, 90, 50)



    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve
    


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}