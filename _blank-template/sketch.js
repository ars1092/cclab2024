let ball1, ball2;
  let balls =[];

  function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
  
  

  ball = new Ball(200, 200);
  ball2 = new Ball(100,200);
  for(let i =0; i<totalNum; i++){
    let b = new Ball(random(width), random(height));
    balls.push(b);
  }
  //console.log(balls);
}

function draw() {
  background(200);
  let b = new Ball(mouseX, mouseY);
  balls.push(b);

  //ball.move();
  //ball.bounce();
  //ball.display();

  //ball2.move();
  //ball2.bounce();
  //ball2.display();

  //balls[0].move();
  //balls[0].bounce();
  //balls[0].display();
  //balls[balls.length-1].move();
  //balls[balls.length-1].bounce();
  //balls[balls.length-1].display();
  
  

  for(let i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].checkOutOfCanvas();
    balls[i].bounce();
     balls[i].display();
     //balls[i].update(v);

     for(let i = balls.length -1; i>=0; i--){
     if(balls[i].isDone)[
      balls.splice(i,1)
     ]}
  }
  while(balls.length >100){
    balls.splice(0,1);
  }


  //
}
class Ball{
  constructor (xPos, yPos, s)
  {
    this.x =xPos;
    this.y = yPos;
    this.xSpd= random(-3,3);
    this.ySpd = random(-3,3);
    this.size= random(1, 6);
    this.col = [random(255), random(255), random(255)];
    this.isDone = false;
  }
  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  update(vol){
    this.xSpd += vol;
    this.ySpd += vol;
  }
  checkOutOfCanvas(){
    if(this.x > width || this.x< 0){
      this.isDone = true;

  }
  if(this.y > width || this.y< 0){
    this.isDone = true;

}
  bounce(){
    if(this.x > width || this.x< 0){
      this.xSpd *= -1;
     // this.sound.play();
    }
    if(this.y > height || this.y<0){
    this.ySpd *= -1;
   // this.sound.play();
    }
  }
  display(){
    fill(this.col[0], this.col[1], this.col[2])
  }
}
}