var ball1;
var database,position
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    ball1= database.ref('ball/position');
    ball1.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position!==undefined)
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
} 

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}
function readPosition(data){
    position=data.val();
ball1.x=position.x;
ball1.y=position.y

}
function writePosition(x,y){
    database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})
}