let j1 = 10;
let j2 = 10;
let j3 = 10;
let j4 = 10;
let j5 = 10;
let flag1 = false;
let x = 0;
let y = 0;
let xSpd = 1;
let ySpd = 1;

function setup() {
  createCanvas(800, 500);
  let canvas= createCanvas(800, 500); canvas.id("p5canvas"); canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);
  for (let i = 0; i < 150; i++) {
    let x = random(width);
    let y = random(height);
    stroke(255);
    point(x, y);
    hand();
    finger1();
    finger2();
    finger3();
    finger4();
    thumb();

  }
  let a = mouseX - x;
  let b = mouseY - y; 
  
  if (a>= 50){
    xSpd += b*0.0000008;
  }else{
    xSpd = 0;
  }
  
  if(b >= 10 || b<= -10){
    ySpd = random(-3,3);
    
  }else{
    ySpd = 0.005;
  }
  
  xSpd+= a * 0.005
  ySpd+= b*0.005

  x += xSpd; 
  y += ySpd;
  Face(x, y);

  //circle(x, y, 30);
  //closeFist();
  let circleCenterX = x;
  let circleCenterY = y;
  let handCenterX = mouseX;
  let handCenterY = mouseY;

  let distance = dist(circleCenterX, circleCenterY, handCenterX, handCenterY);
  let minDistance = 30 / 2 + 54 / 2; 
  if (distance < minDistance &&  j1 == 10 ) {
    setTimeout(changeJ1,3000);
  }
  if(j1==0 && distance <minDistance ){
    setTimeout(changeJ2,3000);
    flag1 = true;
  }
  if(j1==0 && j2==0 && distance <minDistance ){
    setTimeout(changeJ3,3000);
  }
  if(j1==0 && j2==0 && j3==0 && distance <minDistance ){
    setTimeout(changeJ4,3000);
  }
  if(j1==0 && j2==0 && j3==0 && j4==0 && distance <minDistance ){
    setTimeout(changeJ5,3000);
  }
  if(j1==10 && j2==10 && j3==10 && j4==10 && j5==10 && distance >=minDistance && mouseIsPressed ){
    j1 = 0;
    j2 = 0;
    j3 = 0;
    j4 = 0;
    j5 = 0;
  }
   if(j1==0 && j2==0 && j3==0 && j4==0 && j5==0 && !mouseIsPressed && flag1==false ){
     j1 = 10;
     j2 = 10;
     j3 = 10;
     j4 = 10;
     j5 = 10;  
   }

 }


function changeJ1(){
  j1 = 0;
}
function changeJ2(){
  j2 = 0;
}
function changeJ3(){
  j3 = 0;
}function changeJ4(){
  j4 = 0;
}
function changeJ5(){
  j5 = 0;
}
  
function closeFist(){
  if(mouseIsPressed && j1==10 && j2==10 && j3 == 10 && j4 ==10 && j5==10) {
      j1 = 0;
      j2 = 0;
      j3 = 0;
      j4 = 0;
      j5 = 0;
      finger4closed();
      thumbclosed();
      finger1closed();
      finger2closed();
      finger3closed();  
}else{
        j1 = 10;
      j2 = 10;
      j3 = 10;
      j4 = 10;
      j5 = 10;
  finger4();
}
  
}
function hand(x, y) {

    fill('white');
  
    ellipse(mouseX, mouseY, 72, 54);
    push();
    strokeWeight(15);
    pop();
  }
  function finger1() {
    // if(j1==10 && mouseIsPressed){
    //   j1 = 0;
    //   j2 = 0;
    //   j3 = 0;
    //   j4 = 0;
    //   j5 = 0;
    //   finger4closed();
    //   thumbclosed();
    //   finger1closed();
    //   finger2closed();
    //   finger3closed(); 
    // }else{
    //   j1 = 10;
    //   j2 = 10;
    //   j3 = 10;
    //   j4 = 10;
    //   j5 = 10;
    //   finger4();
    // }
    if (j1 == 10){
    push();
    strokeWeight(10);
    bezier(
      mouseX - 20,
      mouseY - 30,
      mouseX - 20,
      mouseY - 110,
      mouseX - 20,
      mouseY - 10,
      mouseX - 20,
      mouseY - 10
    );
    pop();
    }
    else{
    push();
    strokeWeight(10);
    ellipse(mouseX - 20, mouseY - 25, 7, 12);
    pop();
    }

  }
  function finger2() {

    if (j2 == 10){
    push();
    strokeWeight(10);
    bezier(
      mouseX - 2,
      mouseY - 30,
      mouseX - 2,
      mouseY - 125,
      mouseX - 2,
      mouseY - 10,
      mouseX - 2,
      mouseY - 10
    );
    pop();
    }else{
    push();
    strokeWeight(10);
    ellipse(mouseX - 2, mouseY - 27, 7, 12);
    pop();
      
    }
  }
  function finger3() {
    if (j3 == 10){
    push();
    strokeWeight(10);
    bezier(
      mouseX + 15,
      mouseY - 30,
      mouseX + 15,
      mouseY - 100,
      mouseX + 15,
      mouseY - 10,
      mouseX + 15,
      mouseY - 10
    );
    pop();
    }else{
    push();
    strokeWeight(10);
    ellipse(mouseX + 16, mouseY - 22, 7, 12);
    pop();
    }
  }
  function thumb() {
    if (j5 == 10){

    push();
    noFill();
    strokeWeight(10 * 1.3);
    bezier(
      mouseX - 50,
      mouseY - 21,
      mouseX - 42,
      mouseY - 10,
      mouseX - 15,
      mouseY - 3,
      mouseX - 15,
      mouseY - 3
    );
    pop();
    }else{
    push();
    strokeWeight(10);
    ellipse(mouseX - 30, mouseY - 5, 10, 25);
    pop();
    }
  }
  function finger4() {
    if (j4 == 10){

    push();
    strokeWeight(10);
    bezier(
      mouseX + 30,
      mouseY - 10,
      mouseX + 30,
      mouseY - 100,
      mouseX + 30,
      mouseY - 10,
      mouseX + 30,
      mouseY - 10
    );
    pop();
    }else{
    push();
    strokeWeight(10);
    push();
    strokeWeight(10);
    ellipse(mouseX + 28, mouseY - 12, 7, 12);
    pop();

    bezier(
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10
    );
    pop();
}
  }
  function finger4closed() {
    push();
    strokeWeight(10);
    push();
    strokeWeight(10);
    ellipse(mouseX + 28, mouseY - 12, 7, 12);
    pop();

    bezier(
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10,
      mouseX + 30,
      mouseY + 10
    );
    pop();
  }
  function thumbclosed() {
    push();
    strokeWeight(10);
    ellipse(mouseX - 30, mouseY - 5, 10, 25);
    pop();
  }
  function finger1closed() {
    push();
    strokeWeight(10);
    ellipse(mouseX - 20, mouseY - 25, 7, 12);
    pop();
  }
  function finger2closed() {
    push();
    strokeWeight(10);
    ellipse(mouseX - 2, mouseY - 27, 7, 12);
    pop();
  }
  function finger3closed() {
    push();
    strokeWeight(10);
    ellipse(mouseX + 16, mouseY - 22, 7, 12);
    pop();
  }
  function balldsg(x, y) {
    push();
    ellipse(x, y, 20, 20);
    pop();
  }

function Face(x, y) {
  push();
  angleMode(DEGREES);
  translate(x, y);
  scale(0.5);// Translate the entire face to the specified position
  push();
  strokeWeight(8);
  line(55, -15, 25, -5);
  line(-55, -15, -25, -5);
  pop();
  fill('#900C3F');
  ellipse(45, 0, 10, 15 + sin(frameCount * 0.1) * 2);
  ellipse(30, 4, 10, 15 + sin(frameCount * 0.1) * 2);
  ellipse(-30, 4, 10, 15 + sin(frameCount * 0.1) * 2);
  ellipse(-45, 0, 10, 15 + sin(frameCount * 0.1) * 2);
  push();
  fill('black');
  circle(2, (cos(frameCount * 3.1) * 5) + 3, 40 + sin(frameCount * 0.1) * 4);
  drawTentacles(x, y, 40); // Pass x and y to drawTentacles

  pop();

}

function drawTentacles(x, y, pNum) {
  //translate(x, y); // Translate the tentacles to the specified position
  rotate(frameCount * 0);
  let a = 360 / pNum;
  for (let i = 0; i < pNum; i++) {
    rotate(a);
    noFill();
    stroke( random (0, 256), random (0, 256), random (0, 256));
    let x1 = cos(frameCount * 6.111) * 5; // Adjust movement with cos
    let y1 = cos(frameCount * 0.05) * 5; // Adjust movement with cos
    let x2 = 90;
    let y2 = 60;
    let x3 = 80;
    let y3 = 40;
    let x4 = 100;
    let y4 = 90;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    beginShape();
    //repeat starting and end
    curveVertex(84, 91);
    curveVertex(84, 91);
    curveVertex(x1, y1);
    curveVertex(21, 17);
    curveVertex(32, 91);
    curveVertex(32, 91);
    endShape();
  }
}