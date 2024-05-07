let disk;

function setup() {
	let canvas = createCanvas(800, 800);
	canvas.parent('canvasContainer');
	background(0);
}

function draw() {
	translate(width / 2, height / 2);
	push();
	push();
	ellipseMode(CENTER);
	let angle = frameCount * 0.05;
	rotate(angle);
	fill('#b27f10');
	circle(0, 0, 300);
	push();
	fill('black');
	circle(0, 0, 90);
	pop();
	push();
	fill('#bf8d28');
	circle(0, 0, 50);
	pop();

	push();
	fill('black');

	strokeWeight(10);
	circle(105, -60, 30);
	pop();
	pop();
}
