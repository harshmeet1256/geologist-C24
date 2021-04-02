class Rubberball{
    constructor(x,y,r){
        var options={
            density:1,
            friction:5,
            restitution:0.3
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
display(){
var rubberballpos=this.body.position;
push(); 
rectMode(CENTER);
translate(rubberballpos.x,rubberballpos.y);
strokeWeight(4);
stroke("black");
fill("darkblue"); 
ellipse(0,0,this.r,this.r);
pop();
}

}