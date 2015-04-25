// This .JS file shall contain the helper methods and methods needed
// for the 2D graphics of the client. Such as drawing lines and circles.

// This will probably work better if it is a static class rather than
// something we instantiate in different JS files. Will need to see what's best.
var Graphics = function() { }

// Static method for drawing a rectangle.
// g = the graphic context of the canvas.
// x = x position of rectangle.
// y = y position of rectangle.
// width = the x size of the rectangle.
// height = the y size of the rectangle.
// fill = the fill colour of the rectangle (string noFill will omit the fill).
// strokeSize = the size that the outside lines of the rectangle (if 0 there will be no stroke).
// strokeColour = the colour of the outside lines of the rectangle.
Graphics.drawRectangle = function(g, x, y, width, height, fill, strokeSize, strokeColour) {
	
	g.beginPath();
	
	g.rect(x, y, width, height);
	
	if (fill !== 'noFill') {
		g.fillStyle = fill;
		g.fill();
	}
	
	if (strokeSize > 0) {
		g.lineWidth = strokeSize;
		g.strokeStyle = strokeColour;
		g.stroke();
	}
	
}

// Static method for drawing a rounded rectangle.
// radius = the amount of rounding for the rectangle.
Graphics.drawRoundedRect = function(g, x, y, width, height, radius, fill, strokeSize, strokeColour) {
	
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
	
	g.strokeStyle = strokeColour;
	g.lineWidth = strokeSize;
	g.stroke();
	
	g.fillStyle = fill;
	g.fill();
	
}
