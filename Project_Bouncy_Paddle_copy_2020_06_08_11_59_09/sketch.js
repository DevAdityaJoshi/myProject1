var ball,playerPaddle;

  

function preload(){

playerPaddleImage = loadImage("paddle.png");
ballImage = loadImage("ball.png");

}
function setup() {
  createCanvas(400, 400);
playerPaddle = createSprite(380,230,25,150);  
playerPaddle.addImage("playerPaddleImage",playerPaddleImage);
ball = createSprite(200,200,20,20);
ball.addImage("ballImage",ballImage);
}

function draw() {
  background(205,153,0);
 edges = createEdgeSprites();
 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  
  playerPaddle.y = mouseY;

  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

