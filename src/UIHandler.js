function UIHandler() {
	this.htmlCanvas;
 	this.htmlCanvasContext;
	
	this.initialise = initialise;
	function initialise() {
		var width = (controller.grid.cells.length*controller.drawer.cellWidth)+5;
		var height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+5;

		this.htmlCanvas = $('#canvas');

		this.htmlCanvas.width = width;
		this.htmlCanvas.height = height;
	}
}