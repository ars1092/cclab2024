let balls = [];
let totalNum = 20;
let mySound

function preload(){
  mySound
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

// for(let i =0; i < totalNum; i ++){
//   let b = new Ball(random(width), random(height));
//   balls.push(b);
// }  

// console.log(balls);

}

function draw() {
  background(200);
  function mouseReleased(){
    for(let i= 0; i< balls.length; i++){
      if(balls[i].bTouch){
        ballis[i].isDone; true;
        mySound.play();
      }
    }
  }

  let b = new Ball(mouseX, mouseY);
  balls.push(b);


  for(let i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].checkOutOfCanvas();
    balls[i].checkMouse(mouseX, mouseY);
    balls[i].checkCollision(sBall);
  
    balls[i].display();
  }

  for( let i = balls.length-1; i>=0; i --){
    if(balls[i].isDone){
      balls.splice(i, 1);
    }
  }

  while( balls.length > 500 ){
    balls.splice(0,1);
  }


  fill(0);
  text(balls.length, 50, 50);


}

class Ball {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.size = random(3, 5);
    this.col = [random(255), random(255), random(255)];
    this.isDone = false; 
  }


  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  update(vol){
    this.xSpd += vol;
    this.ySpd += vol;
  }

  checkOutOfCanvas(){
    if (this.x > width || this.x < 0) {
      this.isDone =true;
    }

    if (this.y > height || this.y < 0) {
      this.isDone =true;
    }
  }
  checkMouse(mX, mY){
   let d = dist(this.x, this.y, mX, mY);
   if (d< this.size/2 ){
    this.col = [255, 0, 0];
   }else{
    this.col = [255, 0, 0];
   }
  }
  }else{
   this.bTouch= true;
   elsethis.col = [255, 255, 255]
   this.bTouch = false;
  }

checkAllObjs (allObjs){
  for(let i =0; i< allObjs.length; i++){
    if(allObjs)
  }
}


}


  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpd *= -1;
      // this.sound.play();
    }

    if (this.y > height || this.y < 0) {
      this.ySpd *= -1;
      // this.sound.play();
    }
  }

  display() {
    
    push();
    strokeWeight(0);
    fill('#9C0334');
    ellipse(this.x, this.y, this.size+10, this.size)
    pop();
    push();
    strokeWeight(0);
    fill('#85042E ');
    ellipse(this.x, this.y, this.size/1.5, this. size)
    pop();
  }

} 