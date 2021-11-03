var pathImg,runAnime,path,player,rightBound,leftBound;
function preload()
{
  //pre-load images
  pathImg= loadImage("path.png");
  runAnime= loadAnimation("Runner-1.png","Runner-2.png");
}
function setup()
{
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  player=createSprite(200,350,50,50);
  player.addAnimation("BoyRunning",runAnime);
  player.scale=0.08;
  leftBound=createSprite(0,200,80,400);
  rightBound=createSprite(400,200,75,400);
  leftBound.visible=false;
  rightBound.visible=false;
}

function draw()
{
  background(0);
  if(path.y > 400)
  {
    path.y= height/2;
  }
  player.x=World.mouseX;
  player.collide(leftBound);
  player.collide(rightBound);
  drawSprites();
}
