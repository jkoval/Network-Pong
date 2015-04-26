// Main JavaScript file for the game.

// Let's just declare a variable for our canvas up here so that it can be used everywhere.
// Dunno much about JavaScript scope but oh well.
var canvas;

// I'll do the same with the context for drawing. We can then pass this variable around to
// different .js files that need it
var graphics;

// Declare some variables for the size of the canvas that we will be working with. Its easier to
// just use width and height rather than having to type canvas.width, canvas.height each time.
var width, height;

// Here is an Init function where everything will happen when the game first runs. This should be
// one of the only scripts we call from the html file itself.
function init() {
	
	canvas = document.getElementById('drawSurface');
	graphics = canvas.getContext('2d');
	Graphics.init(graphics);
	
	width = canvas.width;
	height = canvas.height;
	
	Graphics.fill('green');
	Graphics.strokeWeight(10);
	Graphics.stroke('blue');
	Graphics.drawRectangle(50, 50, 100, 100);
	
	Graphics.noStroke();
	Graphics.drawRoundedRect(200, 200, 50, 50, 20);

	Graphics.stroke('blue');
	Graphics.drawEllipse(300, 300, 20);
	
	Graphics.stroke('black');
	Graphics.drawLine(10, 10, 10, 100);
}