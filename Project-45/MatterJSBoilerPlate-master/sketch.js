var mainC;
var secondC;
var weapon;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mainC = new character(windowWidth / 15, windowHeight / 2, 40, 60);
	ground = new box(0, windowHeight / 1.1, 2000, 20);

	Engine.run(engine);

}


function draw() {
	background(0);
	//camera.position.x = mainC.position.x;


	
	movement();

	mainC.show();
	ground.show();

	drawSprites();

}

function movement(){
	if(keyIsDown(RIGHT_ARROW)){
		mainC.x = mainC.x +1;
	}
}
