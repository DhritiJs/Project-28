
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImg;
var ground1,stone1,rope1,tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var tree2;

function preload(){
	boyImg=loadImage("sprites/boy.png");
	treeImg=loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1000, 700);
 
   engine = Engine.create();
  world = engine.world;



	//Create the Bodies Here.
	ground1 = new ground(500,600,1000,20);
	stone1 = new stone(100,465,15);
  mango1 = new mango(750,300,20);
  mango2 = new mango(790,340,20);
  mango3 = new mango(730,370,20);
  mango4 = new mango(800,270,30);
  mango5 = new mango(860,360,30);
  mango6 = new mango(690,330,30);
  mango7 = new mango(870,290,30);
  mango8 = new mango(930,340,30);
  rope1 = new rope(stone1.body,{x:100,y:450});
   tree1 =new tree( 800,400);

	Engine.run(engine);
  boy=createSprite(150,520);
  boy.addImage(boyImg);
  boy.scale=0.1;
 
  tree2=createSprite(800,400);
  tree2.addImage(treeImg);
  tree2.scale=0.3;

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
 
  textSize(25);
  fill("black")
  text("-Press space to get a second chance to play!-",300,100)
  
  
  
  
  drawSprites();

  //tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  rope1.display();

  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango6)
  detectCollision(stone1,mango7)
  detectCollision(stone1,mango8)
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope1.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
      rope1.attach(stone1.body);
  }
}
