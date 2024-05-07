let huberts;
let hubertp;
let plank;
let bed;
let clothes;
let phoneImg;
let phone;
let alarmRang = 0;
let speed = 5;
let awake = false;
let yawnSound;
let alarm;
let clothesOn = false;
let hubertClothes;

function preload() {
  huberts = loadImage("./hubertsleep.png");
  hubertAwake = loadImage("./hubertscreamu.png");
  plank = loadImage("./plank.jpg");
  bed = loadImage("./bed.png");
  hubertp = loadImage("./hubertpeek.png");
  clothespile = loadImage("./dirtyclothes.png");
  phoneImg = loadImage("./phone.png");
  yawnSound = loadSound("./hubertyawn.mp3");
  alarm = loadSound("./alarm.mp3");
  hubertClothes = loadImage("./hubert.gif");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('canvasContainer')
  hubert = new Hubert(0, 0, 400, 500);
  clothes = new Clothes(200, 400, 200, 450);
  phone = new Phone(0, 0, 404, 300);
}

function draw() {
  image(plank, 0, 0, 800, 600);
  image(bed, 0, 0, 400, 500);
  hubert.display(awake, clothesOn);
  hubert.update();
  clothes.display();
  clothes.update();
  phone.display();

  if (alarmRang >= 3) {
    awake = true;
    if (!yawnSound.isPlaying()) {
      yawnSound.play();
    }
    setTimeout(() => {
      yawnSound.stop();
      alarm.stop();
    }, 3000);
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, phone.x, phone.y) <= phone.w) {
    alarm.stop();
    alarmRang += 1;
    alarm.play();
  }

  if (dist(mouseX, mouseY, clothes.x, clothes.y) <= clothes.h && awake) {
    alarm.stop();
    yawnSound.stop();
    clothesOn = true;
    setTimeout(() => {
      let a = createA("../huberthome/index.html", "");
      a.elt.click();
    }, 3000);
  }
}

function keyPressed() {}
class Hubert {
  constructor(x, y, w, h) {
    this.x = 75;
    this.y = 60;
    this.w = 200;
    this.h = 350;
    this.image = huberts;
  }
  display(awake, clothesOn) {
    if (clothesOn) {
      image(hubertClothes, this.x, this.y, this.w, this.h);
    } else if (awake == true) {
      image(hubertAwake, this.x, this.y, this.w, this.h);
    } else {
      image(huberts, this.x, this.y, this.w, this.h);
    }
  }
  update() {}
}

class Clothes {
  constructor(x, y, w, h) {
    this.x = 500;
    this.y = 345;
    this.w = 100;
    this.h = 150;

    this.image = clothespile;
  }
  display() {
    image(clothespile, this.x, this.y, this.w, this.h);
  }

  update() {}
}
class Phone {
  constructor(x, y, w, h, index) {
    this.x = 250;
    this.y = 340;
    this.w = 50;
    this.h = 60;
    this.image = phoneImg;
    this.index = index;
  }

  display() {
    image(phoneImg, this.x, this.y, this.w, this.h);
  }
  playSound() {}
  update() {}
}
