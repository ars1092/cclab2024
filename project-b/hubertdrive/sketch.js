let road;
let dashimg;
let roadmov;
let dash;
let speed = 4;
let person
let personW = 200
let personH = 200
let dashCrash
let gameover

function preload() {
  road = loadImage("road0.JPG");
  dashimg = loadImage("cardash.gif");
  person = loadImage("person.png")
  dashCrash = loadImage("dashcrash.gif")
  gameover = loadImage("gameover.PNG")
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("canvasContainer")
  roadmov = new Roadmov();
  dash = new Dash();
}

function draw() {

  roadmov.display();
  roadmov.update();

  dash.display();
  dash.update();
}

class Roadmov {
  constructor(x, y, w, h) {
    this.x = -200;
    this.y = -500;
    this.w = 1500;
    this.h = 1500;
    this.image = road;
  }
  display() {
    if (personH <= 600) {
      image(this.image, this.x, this.y, this.w, this.h - 500);
      this.h += 0.5;
      this.w += 0.5;
    }

  }

  update() {
    if (keyIsDown(RIGHT_ARROW) && this.x > -600) {
      this.x -= speed;
    } else if (keyIsDown(LEFT_ARROW) && this.x < 0) {
      this.x += speed;
    }
  }
}

class Dash {
  constructor(x, y, w, h) {
    this.x = 0;
    this.y = 0;
    this.w = 800;
    this.h = 600;
    this.image = dashimg;
  }

  display() {

    if (personH <= 500) {
      image(person, 0, 0, personW, personH)
      image(this.image, this.x, this.y, this.w, this.h);
      personH += 0.5
      personW += 0.5
    } else {
      image(dashCrash, this.x - 200, this.y, this.w + 250, this.h + 150);
      setTimeout(() => {
        image(gameover, this.x - 200, this.y, this.w + 250, this.h + 150);
        setTimeout(() => {
          let a = createA('../index.html', '')
          a.elt.click()
        }, 2000)
      }, 3000)
      
    }
  }

  update() { }
}
