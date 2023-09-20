var trex, trex_running, edges;
var groundImage;
var groundSpr;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}
var Canvas;
function setup(){
  Canvas = createCanvas(600,200);
  ground = createSprite(200,180,100,30)

  ground.addImage("MainImage",groundImage);
  //criando o trex
  trex = createSprite(200,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}
var GroundVeloMax = -10.9
var GroundXLimit = 0
var Jumping = false;
function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10;
    Jumping = true;
  }
  trex.velocityY += 0.5;
  
 //impedir que o trex caia
 if (ground.x<=GroundXLimit) {
  ground.x = ground.width/2
 }
 // x < b
 if (ground.velocityX>GroundVeloMax) {
  ground.velocityX -= 0.1
 }
  trex.collide(ground)
  drawSprites();
}