const { text } = require("@angular/core/src/render3");

var fixedRect, movingRect;
var wall,car;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  wall = createSprite(230,230,10,70);
  car = createSprite(600,230,20,20);
  car.velocityX = -4;
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  
  isTouching(car,wall)
  

    car.shapeColor = "blue";
    wall.shapeColor = "red";
    
  
  



  drawSprites();
}
