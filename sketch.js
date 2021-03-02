//Create variables here
var dogS, dog, happyDog, dataBase;
var foodS, foodStock,database;

function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dogS = createSprite(250,250,20,20);
  dogS.addImage(dog);
  dogS.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(rgb(46,139,87));
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dogS.addImage(happyDog);
  }
  drawSprites();
  //add styles here

  text("Press Up Arrow to feed Doggo Milk!",250,50);
}



