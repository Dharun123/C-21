function isTouching(object1,object2)
{
  //textSize(20);
    console.log("Dharun")

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
      {

     
      object1.velocityX = -1*object1.velocityX
  
}
else if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
{

    object1.velocityY = -1*object1.velocityY
}

}