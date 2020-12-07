
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage;
var boy;
var tree;
var stone;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11
var boyHit;
function preload()
{
    	backgroundImage = loadImage("groundA.jpg");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(200,596);
    tree = new Tree(900,350,30,300);
	mango1 = new Mango(1110,250,15);
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);
	mango6 = new Mango(970,190,15);
	mango7 = new Mango(870,340,15);
	mango8  = new Mango(870,230,15);
	mango9 = new Mango(880,130,15);
	mango10 = new Mango(820,130,15);
	mango11 = new Mango(990,100,15);
	stone = new Stone(150,650,15);
	boyHit = new Launcher(stone.body,{x:150,y:500});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  boyHit.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyHit.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		boyHit.attach(stone.body);
	}
}



