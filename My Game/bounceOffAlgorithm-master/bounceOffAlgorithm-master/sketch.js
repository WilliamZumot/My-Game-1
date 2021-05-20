//variables
var player;
var x;

function setup() {
  //Canvas
  createCanvas(displayWidth, displayHeight);
  //Sprites
  player = createSprite(displayWidth*0.2, displayHeight/2, displayHeight*0.1, displayHeight*0.1)
}

function draw() {
  //background
  background("PINK");  
  /*x = "255, 200, 0"*/

  drawSprites();
}