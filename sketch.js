var canvas;
var music;
//var ballImage;

function preload(){
    music = loadSound("music.mp3");
    //ballImage = loadImage("ball.png.webp");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 
 surface1 = createSprite(85,585,190,30);
 surface1.shapeColor = "green";

 surface2 = createSprite(300,585,190,30);
 surface2.shapeColor = "pink";

 surface3 = createSprite(500,585,190,30);
 surface3.shapeColor = "orange";

 surface4 = createSprite(710,585,190,30);
 surface4.shapeColor = "purple";

    //create box sprite and give velocity
   
    ball = createSprite(random(20,750));
   // ball.addImage("moving_ball",ballImage);
    ball.scale = 0.5;
    ball.shapeColor = "white";
    ball.velocityX= 4;
    ball.velocityY= 9;
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    ball.bounceOff(edges);

drawSprites();

    //add condition to check if box touching surface and make it box
if (surface1.isTouching(ball) && ball.bounceOff(surface1)){
   ball.shapeColor = "green";
   music.play();
   }

if (surface2.isTouching(ball)){
    ball.shapeColor = "pink";
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
    }
    
if (surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor = "orange";
    music.play();
    }
 
if (surface4.isTouching(ball) && ball.bounceOff(surface4)){
    ball.shapeColor = "purple";
    music.play();
    }
}
