let dancer;
let angle = 200;
let freq = 0.01

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  dancer = new Alaric(width / 2, height / 2);
  
}

function draw() {
  background(0);

  dancer.update();
  dancer.display();
}

class Alaric {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.legspd = 3;
    this.armAngle = 5;
    this.dia = 30;
    this.body = 1;
    this.eyebroY = 135;
    this.eyebrospd = 5;
    this.legY = sin( angle * freq)* -0.05;
    this.col = [random(255), random(255), random(255)];
    this.leftArmY = 200;
    this.ypos = sin( angle * freq)* -0.05;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //
    if (this.eyebroY >= 135) {
      this.eyebroY -= 4;
    } else if (this.eyebroY <= 135) {
      this.eyebroY += 4;
    }

    if (this.leftArmY >= 250) {
      this.leftArmY -= 5;
    } else if (this.leftArmY < 250) {
      this.leftArmY += 5;
    }
    
   
  
  }
  display() {
    push(); //**
    translate(this.x, this.y);

    //leg1
    push();
    fill(this.col);
    ellipse(180, this.ypos, 17, 80);
    pop();

    //leg2
    push();
    fill("blue");
    ellipse(225, this.legY, 17, 80);
    pop();

    //body
    push();
    fill("red");

    ellipse(200, 200, 70, 100);
    pop();

    //right arm
    push();
    fill("red");
    ellipse(235, this.leftArmY+1, 15, 65);
    pop();

    //left arm
    push();
fill('red')
    ellipse(170, this.leftArmY+1, 15, 65);
    pop();

    //hat
    push();
    fill("#556b2f");
    arc(200, 133, 60, 50, PI, 0);
    rect(167, 127, 65, 10, 50);
    pop();

    //head
    push();
    fill("#c77241");
    circle(200, 150, 60);
    pop();

    //eyebags
    push();
    noStroke();
    fill("#66331B");
    circle(185, 145, 15);
    circle(215, 145, 15);
    pop();

    //eyes
    push();
    fill(256, 256, 256);
    circle(185, 145, 10);
    circle(215, 145, 10);
    pop();

    //pupils
    push();
    fill(0, 0, 0);
    circle(185, 145, 5);
    circle(215, 145, 5);
    pop();

    //eyebrows
    push();
    fill(0, 0, 0);
    rect(175, this.eyebroY + 3, 20, 5);
    rect(205, this.eyebroY + 3, 20, 5);
    pop();

    //hat
    push();
    fill("#556b2f");
    arc(200, 133, 60, 50, PI, 0);
    rect(167, 127, 65, 10, 50);
    pop();

    pop(); //**
  }
}
