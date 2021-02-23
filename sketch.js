var ballon
var ballonImg1
var ballonImg2
var ballonImg3
var bg;
function preload(){
bg=loadImage("background.png");
ballonImg1=loadAnimation("ballon1.png");
ballonImg2=loadAnimation("ballon2.png");
ballonImg3=loadAnimation("ballon3.png");
}

function setup() {
    database=firebase.database();
  createCanvas(1500,700);
  ballon=createSprite(200, 500, 50, 50);
  
  ballonPosition=database.ref("ballon/position");
  ballonPosition.on("value",readHeight,showError)
  
}

function draw() {
  background(bg);
  
  
  ballon.addAnimation("Img1",ballonImg1);
  ballon.addAnimation("Img2",ballonImg2);
  ballon.addAnimation("Img3",ballonImg3);
  ballon.scale=0.6
  if (height.x!=undefined && height.x!=undefined) {
    
    if(keyDown(LEFT_ARROW)){
      updatePosition(-10,0)
ballon.scale=ballon.scale-0.05
ballon.changeAnimation("Img3",ballonImg3)
}
else if (keyDown(RIGHT_ARROW)) {
  updatePosition(10,0)
  ballon.scale=ballon.scale+0.05
  ballon.changeAnimation("Img2",ballonImg2)
  
}
else if (keyDown(UP_ARROW)) {
  updatePosition(0,-10)
  ballon.scale=ballon.scale-0.05
  ballon.changeAnimation("Img2",ballonImg2)
  
  
}
else if (keyDown(DOWN_ARROW)) {
  updatePosition(0,10)
  ballon.scale=ballon.scale+0.05
  ballon.changeAnimation("Img3",ballonImg3)
  
}
}
drawSprites();
fill("red")  
textSize(20);
text("Use arrows to move your ballon",100,50);
}

function updatePosition(x,y) {
  database.ref("ballon/position").set
  ({'x':height.x+x,'y':height.y+y})
}

function readHeight(data) {
  height=data.val()
  ballon.x=height.x
  ballon.y=height.y
}

function showError() {
  console.log("There is an error ");
}





