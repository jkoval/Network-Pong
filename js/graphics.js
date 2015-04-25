// This .JS file shall contain the helper methods and methods needed
// for the 2D graphics of the client. Such as drawing lines and circles.

// This will probably work better if it is a static class rather than
// something we instantiate in different JS files. Will need to see what's best.
var Graphics = function() { 
}

// Static properties of Graphics
Graphics.stroke = true;
Graphics.strokeWeight = 1;
Graphics.strokeColour = 'black';

Graphics.fill = true;
Graphics.fillColour = 'red';

// Static method for setting a stroke weight
Graphics.strokeWeight = function(weight) {
	Graphics.strokeWeight = weight;
}

// Static method for setting stroke colour
Graphics.stroke = function(colour) {
	Graphics.stroke = true;
	Graphics.strokeColour = colour;
}

// Static method for disabling stroke
Graphics.noStroke = function() {
	Graphics.stroke = false;
}

// Static method for setting fill colour
Graphics.fill = function(colour) {
	Graphics.fillColour = colour;
	Graphics.fill = true;
}

// Static method for disabling fill
Graphics.noFill = function() {
	Graphics.fill = false;
}

// Static method 

// Static method for drawing a rectangle.
// g = the graphic context of the canvas.
// x = x position of rectangle.
// y = y position of rectangle.
// width = the x size of the rectangle.
// height = the y size of the rectangle.
Graphics.drawRectangle = function(g, x, y, width, height) {

	Graphics.drawRoundedRect(g, x, y, width, height, 0);
}

// Static method for drawing a rounded rectangle.
// radius = the amount of rounding for the rectangle.
Graphics.drawRoundedRect = function(g, x, y, width, height, radius) {
	
	g.beginPath();
	g.moveTo(x + radius, y);
	g.lineTo(x + width - radius, y);
	g.quadraticCurveTo(x + width, y, x + width, y + radius);
	g.lineTo(x + width, y + height - radius);
	g.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	g.lineTo(x + radius, y + height);
	g.quadraticCurveTo(x, y + height, x, y + height - radius);
	g.lineTo(x, y + radius);
	g.quadraticCurveTo(x, y, x + radius, y);
	g.closePath();
	
	
	if (Graphics.stroke) {
		g.lineWidth = Graphics.strokeWeight;
		g.strokeStyle = Graphics.strokeColour;
		g.stroke();
	}
	
	if (Graphics.fill) {
		g.fillStyle = Graphics.fillColour;
		g.fill();
	}
	
}
