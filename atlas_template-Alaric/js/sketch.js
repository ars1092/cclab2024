function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    smileyFace(100,100, 2);
    smileyFace(200,200, 1.5)
  }
  
  function smileyFace(xPos, yPos, sNum){
    push();
    angleMode(DEGREES);
    translate(200,200);
    fill('blue');
    ellipse(30,0, 10, 15 + sin(frameCount*2)*2);
    ellipse(-30,0, 10, 15 +sin(frameCount*2)*2);
    fill('red');
    arc(0, 20, 40 + cos(frameCount*2)*5, 40+ 
        sin(frameCount*2)*4, 0, 180, CHORD);
   
   drawTentacles(40)
    pop();
  }
    
  
  function drawTentacles(pNum){
    rotate(frameCount*0);
    let a = 360/pNum;
    for(let i = 0; i < pNum; i++){
      rotate(a);
    
      bezier(mouseX+80,mouseY+5, 90, 60, 80, 40, 100, 90);
    }
  }