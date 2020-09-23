function bounceOff(target1, target2) {
    if (target1.x - target2.x < target2.width/2 + target1.width/2
        && target2.x - target1.x < target2.width/2 + target1.width/2) {
      target1.velocityX = target1.velocityX * (-1);
      target2.velocityX = target2.velocityX * (-1);
    }
    if (target1.y - target2.y < target2.height/2 + target1.height/2
      && target2.y - target1.y < target2.height/2 + target1.height/2){
      target1.velocityY = target1.velocityY * (-1);
      target2.velocityY = target2.velocityY * (-1);
    }
}

function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }