var bunny;
var carrot;
var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9;
var  snakeGroup;

function preload() {

}


function setup() {
  createCanvas(600,600);
  bunny=createSprite(40,550,10,10);
 bunny.scale=2.0;
 bunny.shhapeColor="white";

 carrot=createSprite(500,60,30,30);
 carrot.scale=1.3;
 carrot.shapeColor="pink";

 brick1=createSprite(90,250,110,20);
 brick1.scale=1.0;
 brick1.shapeColor="red";

 brick2=createSprite(230,250,110,20);
 brick2.scale=1.0;
 brick2.shapeColor="red";

 brick3=createSprite(370,250,110,20);
 brick3.scale=1.0;
 brick3.shapeColor="red";

 brick4=createSprite(510,250,110,20);
 brick4.scale=1.0;
 brick4.shapeColor="red";

 brick5=createSprite(40,300,110,20);
 brick5.scale=1.0;
 brick5.shapeColor="red";

 brick6=createSprite(185,300,110,20);
 brick6.scale=1.0;
 brick6.shapeColor="red"; 

 brick7=createSprite(325,300,110,20);
 brick7.scale=1.0;
 brick7.shapeColor="red";

 brick8=createSprite(460,300,110,20);
 brick8.scale=1.0;
 brick8.shapeColor="red";

 brick9=createSprite(600,300,110,20);
 brick9.scale=1.0;
 brick9.shapeColor="red";


 snakeGroup = new Group();
}

function draw() {
  background("green");

bunny.x=mouseX;
bunny.y=mouseY;
 
if(bunny.isTouching(brick1)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick3)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick4)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick5)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick6)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick7)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick8)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick9)){
  bunny.x=40;
  bunny.y=550;
}
 generateSnakes();

 for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (bunny.isTouching(temp)) {
    bunny.x=40;
    bunny.y=550;
    }   
  }

  drawSprites();
}
function generateSnakes(){
 if(frameCount%30===0){
  console.log(frameCount);
   var snake=createSprite(0,random(70,520,),random(30,120),5);
   snake.scale=random(1.0,1.2);
   snake.shapeColor="yellow";
   snake.velocityX=random(2,4);
   snakeGroup.add(snake);
 }
}