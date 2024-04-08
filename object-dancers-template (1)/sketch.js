/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new YourNameDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class YourNameDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 200;
    this.freq = 0.01
    this.ypos = 0

    // add properties for your da
  }
  update() {
    this.ypos = sin( this.angle * this.freq)* -0.05
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
     
    //leg1
     push();
     
     fill('blue');
     ellipse(-25,(sin( this.angle /3)* 5)+ 55, 17, 80);
     pop();
    

      //leg2
      push();
      fill("blue");
      this.angle= this.angle+2
      ellipse(25,(sin( this.angle /3)* 5)+55, 17, 80);
      pop();

    //body
    push();
    fill("red");
ellipse(0, -5, 70, 100);
    pop();
    
    //left arm
      push();
     fill('red')
    ellipse(-35, (cos( this.angle /15)* 8)-20, 15, 65);
     pop();


      //right arm
    push();
    fill("red");
    ellipse(35, -(cos( this.angle /15)* 8)-20, 15, 65);
    pop();
      


    
    //head
    push();
    fill("#c77241");
    circle((cos( this.angle /10)* 8), -60, 60);
    pop();

    //eyebags
    push();
    noStroke();
    fill("#66331B");
    circle(-15, -60, 15);
    circle(15, -60, 15);
    pop();


    //eyes
    push();
    fill(256, 256, 256);
    circle(-15, -60, 10);
    circle(15, -60, 10);
    pop();


    //pupils
    push();
    fill(0, 0, 0);
    circle((cos( this.angle /10)* 3)-15, -60, 5);
    circle((cos( this.angle /10)* 3)+15, -60, 5);
    pop();

   //eyebrows
   push();
   rectMode(CENTER)
   fill(0, 0, 0);
   rect(-15, (sin( this.angle /6)* 3)-65, 20, 5);
   rect(15, (sin( this.angle /6)* 3)-65, 20, 5);
   pop();

    //hat
    push();
    rectMode(CENTER)
    fill("#556b2f");
    arc((cos( this.angle /10)* 8), -75, 60, 50, PI, 0);
    rect((cos( this.angle /10)* 8), -70, 65, 10, 50);
    pop();





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/