
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,height,1600,20);
	tree =  new Tree(1000,450);
	boy = new Boy(480,620);
	stone = new Stone(200,200);
	mango1 = new Mango(900,350);
	mango2 = new Mango(1000,350);
	mango3 = new Mango(1100,350);
	mango4 = new Mango(1200,350);
	mango5 = new Mango(800,350);
	launcher = new Launcher(stone.body, {x:400,y:550});


	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
  	ground.display();
  	tree.display();
	boy.display();
	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	launcher.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

	drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})

}

function mouseReleased() {
	launcher.throw();


}


function detectCollision(stone,mango){
	mPos=mango.body.position;
	sPos=stone.body.position;

	var distance=dist(sPos.x,sPos.y,mPos.x,mPos.y);

	if(distance<=45){
		Matter.Body.setStatic(mango.body,false);
	}
}
