var fixedRect,movingRect;



function setup() {
  var canvas = createCanvas(1200,800);
  movingRect = createSprite(400, 50, 50, 50);
  movingRect.shapeColor= "green";
  movingRect.velocityY=5;
  fixedRect = createSprite(400,700,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=-5;
}

function draw() {
  background(0);  
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.velocityY=-(movingRect.velocityY)
  fixedRect.velocityY=-(fixedRect.velocityY)
  }
  drawSprites();
}