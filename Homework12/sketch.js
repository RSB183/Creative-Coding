//MC
var characterX = 100;
    var characterY = 50;
    var characterD = 25;


    //enemy #1
var x = 50;
var y = 50;
var diameter = 25;
var xspeed;
var yspeed; 

//enemy#2
var ex = 70;
var ey = 70;
var ed = 40;
var exspeed;
var eyspeed;


    var w = 87; 
    var s = 83;
    var a = 65;
    var d = 68;

    var shapeX = 30;
    var shapeY = 50;
    var shapeXSpeed;
    var shapeYSpeed;

    var mouseShapeX;
    var mouseShapeY;

    function setup()
    {
        createCanvas(800,600);
        xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   
    exspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    eyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    }
    function draw()
    {
        background(50);
        //our character's color 
        fill(20,200,29);
       // our character 
        circle(characterX,characterY,characterD);
        // enemy #1 color
        fill(200,200,200);
        // enemy #1
        circle (x,y,diameter);

        if (x > 800) {
            x = 50;
        }
        else if (x > 200) {
            x += 5;
        }
        else if (x <= 300) {
            x += 10;
        } 
        if (y > 600) {
            y = 50;
        }
        else if (y > 200) {
            y += 1;
        } 
        else if (y <= 300) {
            y += 3;
        }
createBorders()
// enemy #2
fill(25,300,250);
        circle (ex,ey,ed);
        if(ex <= 800)
        {
            ex+=10;
        }
        else if(ex == 250 || ex <= 300)
        {
            ex+=2;
            console.log("second else if for x");
        }
        else if(ex != 300)
        {
           ex = 50;
        }

      
        if(ey <= 200)
        {
            ey+=3;
        }

        else if(ey == 250 || ey <= 300)
        {
            ey+=1; 
            console.log("second else if for y");
        }
        else if(ey != 300)
        {
            ey = 50;
        }
        if(ed <= 200)
        {
            ed+=8;
        }
          
        else if(ed == 200 || ed <= 300)
        {
            ed ++;
            console.log("second else if for diameter");
        }
        else if(diameter != 300)
        {
            ed = 2;
        }

        textSize(16);
        text("EXIT", width-50,height-50)

        if(characterX > width && characterY > width/2-50)
    {
        fill(0);
        stroke(5);
        textSize(40);
        text("You Win!", width/2-50, height/2-50);
    }

characterMovement();
   

}
function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
circle(mouseShapeX,mouseShapeY,25);

function mouseClicked()
{
    mouseshapeX=mouseShapeX;
    mouseshapeY=mouseShapey;
}

}
function createBorders()
{
    //top border
    rect (10,0,width,10);
    //left border
    rect (0,0,10,height);
    //bottom border
    rect (0,height-10, width, 10);
    //right upper border
    rect (width-10, 0, 10, height-50);
}