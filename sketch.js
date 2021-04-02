const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, stone, rubberball, iron;
var ground;

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	//creating the objects
    ground=new Ground(600,height,1200,20);
	  hammer=new Hammer(10,100);
    stone=new Stone(700,320,100,100);
    rubberball=new Rubberball(900,450,70);
    iron=new Iron(300,350);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  hammer.display();
  ground.display();
  stone.display();
  rubberball.display();
  iron.display();  
}



