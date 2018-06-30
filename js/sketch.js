
var x, y;
var img;
var canvas;

function preload() {
  img = loadImage('https://raw.githubusercontent.com/buddhismhotline/buddhismhotline.github.io/master/no.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
	canvas.style('z-index', '-1');
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(175);
  
  // Draw a circle
  stroke(50);
  fill(100);
	
	rotateX(frameCount * 0.001);
	rotateZ(frameCount * 0.001);
	texture(img);
  plane(x, y, 24, 24);
	
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
