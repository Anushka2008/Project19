var boat, BoatImage;
var ocean, oceanImage;
var shark, sharkImage, sharkGroup
var CriShip,CriShipImage, CriShipGroup
var block
var score
var gameOver=false;


function preload(){
    BoatImage= loadImage("BoatImg.png")
    oceanImage= loadImage("waves.png")
    sharkImage=loadImage("shark.png")
    CriShipImage=loadImage("BigShip.png")


}

function setup() {
createCanvas(600,600)
background("white")

ocean=createSprite(400,300)
ocean.addImage("ocean",oceanImage)
ocean.velocityX=-3

block=createSprite(300,200,600,10)
block.visible= false




boat=createSprite(200,400,10,30)
boat.addImage(BoatImage)
boat.scale=0.2


sharkGroup=createGroup();
CriShipGroup=createGroup();

score=0

}

function draw() {
    if(gameOver){
        return;
    }

    drawSprites();
    spawnSharks();
    spawnCriShip();
    if(ocean.x<300){
        ocean.x=400
    }
    if(keyDown("up")){
        boat.y=boat.y-10
    }
    if(keyDown("down")){
        boat.y=boat.y+10
    }
    textSize(20)
    text("score="+score,500,20)
    if(boat.isTouching(CriShipGroup)||boat.isTouching(sharkGroup)){
        textSize(25)
        text("Game Over",200,300)
        boat.destroy();
        sharkGroup.destroyEach();
        CriShipGroup.destroyEach();
        sharkGroup.setVelocityXEach(0)
        sharkGroup.setVelocityYEach(0)
        ocean.velocityY=0
        gameOver=true;
    }

    if(frameCount%100==0){
        score=score+10;
    }



    
}

function spawnSharks(){
    if(frameCount%90==0){
    shark=createSprite(600,random(300,500))
    shark.addImage(sharkImage)
    shark.scale=0.2
    shark.velocityY=random(-2,1)
    shark.velocityX=-4
    shark.bounceOff(block)
    sharkGroup.add(shark)
    }
}

function spawnCriShip(){
    if(frameCount%160==0){
        CriShip=createSprite(600,random(300,550))
        CriShip.addImage(CriShipImage)
        CriShip.scale=0.3
        CriShip.velocityY=random(-1,3);
        CriShip.velocityX=-3
        CriShipGroup.add(CriShip);



    }
}

