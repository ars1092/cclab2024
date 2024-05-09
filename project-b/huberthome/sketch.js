let hubert;
let hubie;
let hubertL;
let hubertR;
let floorImg;
let bedh;
let hubertF;
let bckgdImg;
let mayfe;
let door;
let nextscene = false;

function preload() {
  // Load your images here
  bckgdImg = loadImage("beksinskibck.JPG");
  hubertF = loadImage("ezgif.com-apng-to-gif-converter 5.gif");
  wallImg = loadImage("walls.png");
  floorImg = loadImage("floors.png");
  bedh = loadImage("bedhr.png");
  hubie = loadImage("hubert.gif");
  hubertL = loadImage("hubertl.gif");
  hubertR = loadImage("hubertr.gif");
  door = loadImage("d.png");
  mayfe = loadImage("mayf.gif");
}

function setup() {
  createCanvas(800, 600);
  hubert = new Hubert(width / 2, height / 2, 50, 50);
  door = new Door(0, 0, 150, 200);
}

function draw() {
  image(bckgdImg, 600, 0, 800, 490);

  image(wallImg, 0, 0, 800, 490);
  image(floorImg, 0, 325, 800, 285);
  image(bedh, 0, 315, 130, 200);

  door.display();

  hubert.show();
  hubert.move();
  image(mayfe, 390, 475, 250, 200);
}

function keyPressed() {
  if (
    keyCode === UP_ARROW &&
    dist(
      hubert.x + hubert.w,
      hubert.y + hubert.h,
      door.x + door.w,
      door.y + door.h
    ) < 75
  ) {
    let a = createA('../hubertoutside/index.html', '')
    a.elt.click()
  }
}

class Hubert {
  constructor(x, y, w, h) {
    this.x = 0;
    this.y = 350;
    this.w = 100;
    this.h = 190;
    this.speed = 4;
    this.maxh = 500;
    this.maxw = 400;
    this.minw = 65;
    this.minh = 85;
    this.rbound = width - this.w;
    this.lbound = 0;
    // Set default image
    this.image = hubie; // Default image
  }

  show() {
    // Display the image
    image(this.image, this.x, this.y, this.w, this.h);
  }

  move() {
    if (keyIsDown(UP_ARROW) && this.h >= this.minh && this.w >= this.minw) {
      this.w -= this.speed;
      this.h -= this.speed;
      this.image = hubertF;
    } else {
      this.image = hubie;
    }

    if (keyIsDown(DOWN_ARROW) && this.h <= this.maxh && this.w <= this.maxw) {
      this.image = hubertF;
      this.w += this.speed;
      this.h += this.speed;
      this.image = hubertF;
    } else {
      this.image = hubie;
    }

    if (keyIsDown(LEFT_ARROW) && this.x > this.lbound) {
      this.x -= this.speed;
      // Change image to left facing
      this.image = hubertL;
    } else if (keyIsDown(RIGHT_ARROW) && this.x < this.rbound) {
      this.x += this.speed;
      // Change image to right facing
      this.image = hubertR;
    } else {
      this.image = hubie;
    }
  }
}
class Door {
  constructor(x, y, w, h) {
    this.x = 450;
    this.y = 285;
    this.w = 170;
    this.h = 200;
    this.image = door;
  }
  display() {
    image(this.image, this.x, this.y, this.w, this.h);
  }
}
