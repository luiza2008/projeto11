var pista
var pista2
var corredor
var corredor2
var paredeE
var paredeD

function preload(){
  //imagens pré-carregadas
pista2 = loadImage("path.png");
corredor2 = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
pista = createSprite(200,200);
pista.addImage(pista2);
pista.velocityY = 2;

corredor = createSprite(180,340,30,30);
corredor.addAnimation("correndo",corredor2);
corredor.scale = 0.05;

paredeE = createSprite(0,0,100,800);
paredeE.visible = false;

paredeD = createSprite(410,0,100,800);
paredeD.visible = false;
}

function draw() {
  background(0);

  drawSprites();

if (pista.y > 400){

pista.y = height /2

}
corredor.x = World.mouseX

corredor.collide(paredeE);
corredor.collide(paredeD);

}
