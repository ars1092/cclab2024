let bckgdImg;
let hubert;
let hubie;
let hubertL;
let hubertR;
let hubertF;
let carGif;
let house;
let horizon;
let ui;

function preload() {
  bckgdImg = loadImage("beksinskibck.JPG");
  horizon = loadImage("horizon.PNG");
  house = loadImage("house.png");
  hubertF = loadImage("hubert4.gif");
  hubie = loadImage("hubert.gif");
  hubertL = loadImage("hubertl.gif");
  hubertR = loadImage("hubertr.gif");
  carGif = loadImage("car.gif");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('canvasContainer')
  hubert = new Hubert(width / 2, height / 2, 50, 50);
  car = new Car();
}

function keyPressed() {
  if (
    keyCode === UP_ARROW &&
    dist(
      hubert.x + hubert.w,
      hubert.y + hubert.h,
      car.x + car.w,
      car.y + car.h
    ) < 55
  ) {
    let a = createA('../hubertdrive/index.html', '')
    a.elt.click()
  }
}

function draw() {
  image(bckgdImg, 0, 0, 800, 600);
  image(horizon, 0, 425, 800, 285);
  image(house, 30, 355, 257, 170);
  hubert.show();
  hubert.move();
  
  car.display();
}


class Hubert {
  constructor(x, y, w, h) {
    this.x = 0;
    this.y = 450;
    this.w = 75;
    this.h = 143;
    this.speed = 4;
    this.maxh = 500;
    this.maxw = 400;
    this.minw = 45;
    this.minh = 65;
    this.rbound = width - this.w;
    this.lbound = 0;
    // Set default image
    this.img = hubie; // Default image
  }

  show() {
    // Display the image
    image(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    if (keyIsDown(UP_ARROW) && this.h >= this.minh && this.w >= this.minw) {
      this.img = hubertF;
      this.w -= this.speed / 4;
      this.h -= this.speed / 4;
    } else if (
      keyIsDown(DOWN_ARROW) &&
      this.h <= this.maxh &&
      this.w <= this.maxw
    ) {
      this.img = hubertF;
      this.w += this.speed / 4;
      this.h += this.speed / 4;
    } else if (keyIsDown(LEFT_ARROW) && this.x > this.lbound) {
      this.x -= this.speed;
      // Change image to left facing
      this.img = hubertL;
    } else if (keyIsDown(RIGHT_ARROW) && this.x < this.rbound) {
      this.x += this.speed;
      // Change image to right facing
      this.img = hubertR;
    } else {
      this.img = hubie;
    }
  }
}
class Car {
  constructor(x, y, w, h) {
    this.x = 650;
    this.y = 400;
    this.w = 170;
    this.h = 150;
    this.image = carGif;
  }
  display() {
    image(this.image, this.x, this.y, this.w, this.h);
  }
}