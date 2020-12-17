var bullet, wall,speed, weight, thickness;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness= random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);
  
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet*lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}