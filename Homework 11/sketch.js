
var x = 400;
var y = 170;

var lefteyex = 200;
var righteyex = 400;

var leftpupily = 170;
var rightpupily = 170;

var movement = 13;

var size = 25;
var count = 0;
var sizeDirection = 2; 


function setup() 
{
    createCanvas(650,750);
  movement = floor(random() * 10) +1;
  }

  
  function draw() {
    background(120, 45, 78);
    fill(50,50,50);

    rect(110,125,391,100);

    fill(50,50,50);
    ellipse(305,200,400,290); // Face



    fill(200, 200, 200);
    circle(lefteyex,170,80); // left eye 
if (lefteyex <= 520 || lefteyex <=0)  
{
  lefteyex+=movement;
}



    circle(righteyex,170,80); // right eye
if (righteyex >= 605 || righteyex <= 0)
{
  movement *= -1;
}
{  righteyex += movement;
}

ellipse(310,300,200,50); // mouth 

triangle(290,215,300,150,330,215); // nose





strokeWeight(10);
point(200,leftpupily); // left pupil 
{
  leftpupily+=movement;
}


point(400,rightpupily); // right pupil
{
  rightpupily+=movement;
}



line(150,120,240,130); // left eyebrow 
line(350,130,420,120); // right eyebrow 

textSize(30);
text('Ronaldo Silva Broadbent',150,500);




textSize(size);
size+= sizeDirection;
count++; 
if(count> 5)
{
  sizeDirection *=-1;
  count = 0; 
}
text('Codenaldo',245,30);

circle (x,y,25); // Using this as an example "dot"
x+=movement;
y+=movement;


}
