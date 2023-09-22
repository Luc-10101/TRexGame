var trex, trex_running, edges;
var groundImage;
var groundSpr;
var framespawnrate = 0;
var framelimit = 70;
var framelimit_mincap = 35;
var objects = [];
function spawnCactus(waitMarks) {
  var amount = Math.floor(Math.random() * 4);
  if (amount==0) {
    return
  }
  console.log(amount);
  var images = ["cactus1.png", "cactus2.png", "cactus3.png"];
  var Cactus = createSprite(600,150);
  var spr = loadImage(images[amount-1])
  Cactus.addImage("image",spr);
objects.push(Cactus)
Cactus.velocityX = ground.velocityX;
if (framelimit>framelimit_mincap) {
framelimit-=10;
}
}
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
framespawnrate+=1;
if (framespawnrate>=framelimit) {
  spawnCactus()
  framespawnrate = 0;
}
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -15;
    Jumping = true;
  }
  trex.velocityY += 0.9;
  
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