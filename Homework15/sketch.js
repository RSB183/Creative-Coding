var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

var rectangleObject;
var rectangleObject2;
var rectangleObject3;

function setup() {
    createCanvas(800, 600);

    rectangleObject = new rectangle (200, 200, 50, 30, 100, 200, 10);   
   rectangleObject2 = new rectangle (400, 400, 70, 90, 10, 100, 200);
  rectangleObject3 = new rectangle (500, 250, 50, 40, 50, 80, 20);
   //  random speed when starting
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(100, 50);
}

function draw() {
    background(50);

rectangleObject.display();
rectangleObject2.display();
rectangleObject3.display();
    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
   
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(13, 50, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
   
    if(characterX > width && characterY > width/2-50)
    {
        fill(300);
        stroke(5);
        textSize(40);
        text("You Win!!!", width/2-50, height/2-50);
    } 

    // create the shape based on the mouse click
    fill(12, 13, 400);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(12,13,40);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}