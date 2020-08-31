var movingRect;
var fixedRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200,200,60,90);
  movingRect = createSprite(300,600,80,40);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.velocityY=-3;
  fixedRect.velocityY=3;

}

function draw() {
  background("black"); 
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 
    &&fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 )
  {
    movingRect.velocityX= movingRect.velocityX * -1;
    fixedRect.velocityX= fixedRect.velocityX * -1;
  }
  else if ( movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 
    &&fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2)

  {
    movingRect.velocityY= movingRect.velocityY * -1;
    fixedRect.velocityY= fixedRect.velocityY * -1;

  }
  drawSprites();



  
}


 