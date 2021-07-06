
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	;
var paperBallObject,paperBallObjectImg;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject= new ground(width/2,670,width,20);
	dustbinObj= new dustbin(1200,650);
    paperBallObject= new paperBall(200,300,3,20,40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  keyPressed();
  paperBallObject.display();
  groundObject.display();
  dustbinObj.display();
   
}

function keyPressed(){
	if (keyCode == UP_ARROW) {

		Matter.Body.applyForce(paperBallObject.body, paperBallObject.body.position, {x:15,y:-15});

	}
}
