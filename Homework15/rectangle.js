class rectangle{

//constructor
// x=x y=y h=height w=width r=red b=blue g=green
    constructor(x, y, h, w, r, b, g)
    
    {
        console.log("blahblahblah");
this.x = x;
this.y = y;
this.h = h;
this.w = w;
this.r = r;
this.b = b;
this.g = g;

    }

    display()
    {
        fill(this.r, this.b, this.g);
        rect(this.x, this.y, this.h, this.w);
    }
}