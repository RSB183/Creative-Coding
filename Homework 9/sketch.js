function setup() {
    createCanvas(650,750);
  }
  
  function draw() {
    background(120, 45, 78);
    fill(50,50,50);

    rect(110,125,391,100);

    fill(50,50,50);
    ellipse(305,200,400,290); // Face

    fill(200, 200, 200);
    circle(200,170,80); // left eye 

    circle(400,170,80); // right eye

    ellipse(310,300,200,50); // mouth 

triangle(290,215,300,150,330,215); // nose

strokeWeight(10);
point(200,170); // left pupil 
point(400,170);

line(150,120,240,130); // left eyebrow 
line(350,130,420,120); // right eyebrow 

textSize(30);
text('Ronaldo Silva Broadbent',150,500);

textSize(25);
text('Codenaldo',245,30);
}
