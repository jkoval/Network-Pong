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
	
	width = canvas.width;
	height = canvas.height;
	
	Graphics.drawRectangle(graphics, 50, 50, 100, 100, 'noFill', 2, 'green');
	Graphics.drawRoundedRect(graphics, 200, 200, 50, 50, 5, 'yellow', 10, 'red');
}