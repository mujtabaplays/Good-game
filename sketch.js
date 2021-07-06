const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
  bg=loadImage("space.jpg")
  jailBars=loadImage("Jail10.png")
  alladinimg=loadImage("alladin.png")
  magiclampimg=loadImage("magiclamp.png")
  genieimg=loadImage("genie.png")
  alladinHappyimg=loadImage("alladinhappy.png")
}
    

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
  groundSprite=createSprite(100, 390,300,50);
	groundSprite.shapeColor=color("grey")
  
  alladinSprite=createSprite(120, 240, 10,10);
	alladinSprite.addImage(alladinimg)
	alladinSprite.scale=0.2

  
 
  jailSprite=createSprite(100, 250, 10,10);
	jailSprite.addImage(jailBars)
  
  magiclampSprite=createSprite(650,350,10,10)
  magiclampSprite.addImage(magiclampimg)
  magiclampSprite.scale=0.2
  

  genieSprite=createSprite(650,150,10,10)
  genieSprite.addImage(genieimg)
  genieSprite.scale=0.2
  genieSprite.visible=false;
  
  
  alladinHappySprite=createSprite(500,150,10,10)
  alladinHappySprite.addImage(alladinHappyimg)
  alladinHappySprite.scale=0.5
  alladinHappySprite.visible= false


  
	
  

	// alladinBody = Bodies.rectangle(120, 240 ,10,10, {restitution:0.4, isStatic:false});
	// World.add(world, alladinBody);
	

	// //Create a Ground
	// ground = Bodies.rectangle(200,390,400, 50 , {isStatic:true} );
 	// World.add(world, ground);

}

function draw() {
  Engine.update(engine)
  background(bg);  

if(keyDown(LEFT_ARROW)){
 alladinSprite.x=alladinSprite.x-2
}

if(keyDown(RIGHT_ARROW)){
  alladinSprite.x=alladinSprite.x+2
 }
  
 if(keyDown(UP_ARROW)){
  alladinSprite.y=alladinSprite.y-2
 }
  
 if(keyDown(DOWN_ARROW)){
  alladinSprite.y=alladinSprite.y+2
 }
   
 if(alladinSprite.x>310 && alladinSprite.x<420){
   alladinSprite.velocityY=5
   textSize(30);
   fill("white")
   text("you Missed Genie", 300,200)
 }
  

 if(alladinSprite.isTouching(magiclampSprite)){
   genieSprite.visible= true
   magiclampSprite.visible= false
   alladinSprite.velocityY=0
   alladinSprite.velocityX=0
   
   alladinHappySprite.visible= true
   alladinSprite.visible=false

   fill("white")
   textSize(30)
   text("Genieeee you are free now",300,380)
 }
  // groundSprite.x= ground.position.x 
  // groundSprite.y= ground.position.y 

  // alladinSprite.x= alladinBody.position.x 
  // alladinSprite.y= alladinBody.position.y 

  
  
  drawSprites();
}