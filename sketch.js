
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

function preload()
{
	boy1= loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(650,517,300,400)
	ground= new Ground(400,690,800,20)
	stone= new Stone(100,570,25)
	mango1= new Mango(690,470,20)
	mango2= new Mango(570,450,20)
	mango3= new Mango(740,400,20)
	mango4= new Mango(790,500,20)
	mango5= new Mango(630,350,20)

	sling= new Sling(stone.body, {x: 95, y: 555})

	boy= createSprite(150,620,100,100)
	boy.addImage(boy1, "boy.png")
	boy.scale= 0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
	//rect(100,400,100,100)

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
  stone.display();

  
  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged() {
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
	sling.fly();
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.radius+lstone.radius) {
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:95, y:555})
		sling.attach(stone.body)
	}
}