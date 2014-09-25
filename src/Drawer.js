/*
    Do drawing stuff here
 */
 function Drawer(){
 	this.cellWidth = 15;
 	this.aliveFill = '#bbb';
 	this.deadFill = '#fff';

 	this.canvas;
 	
 	this.initialise = initialise;
 	function initialise () {
		var width = (controller.grid.cells.length*controller.drawer.cellWidth)+4;
		var height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+4;

 		this.canvas = oCanvas.create({
 			canvas: '#canvas',
 			fps: 60,
 			width: width,
 			height: height
 		});	
		
 		this.drawGrid(controller.grid);
 		this.resizeCanvas();
 	} 

 	this.resizeCanvas = resizeCanvas;
 	function resizeCanvas() {
 		controller.drawer.canvas.width = (controller.grid.cells.length*controller.drawer.cellWidth)+4;
 		controller.drawer.canvas.height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+4;
 	};

 	this.drawGrid = drawGrid;
 	function drawGrid(grid) {
 		for (var i = 0; i < grid.cells.length; i++){
 			for (var j = 0; j < grid.cells[0].length; j++){ 				
 				var rectangle;
				rectangle = controller.drawer.canvas.display.rectangle({
					x: (i*controller.drawer.cellWidth)+2,
					y: (j*controller.drawer.cellWidth)+2,
					width: controller.drawer.cellWidth,
					height: controller.drawer.cellWidth,
					stroke: "outisde 2px rgba(0, 0, 0, 1)"
				});
				rectangle.column = i;
 				rectangle.row = j;
 				if (controller.grid.cells[i][j].alive) {
 					this.fill = controller.drawer.aliveFill; 
 				} else {
 					this.fill = controller.drawer.deadFill;
 				}
 				rectangle.bind("click tap", function () {
 					if (!controller.gameRunner.play) {
	 					grid.cells[this.column][this.row].toggleAlive();
	 					if (grid.cells[this.column][this.row].alive) {
	 						this.fill = controller.drawer.aliveFill; 
	 					} else {
	 						this.fill = controller.drawer.deadFill;
	 					}
	 					controller.drawer.canvas.redraw();
	 				}
				});
				controller.drawer.canvas.addChild(rectangle);
 			}
 		}
 		controller.drawer.canvas.redraw();
 	}

 	this.updateGrid = updateGrid;
 	function updateGrid(){
 		controller.drawer.canvas.children.forEach(function (child){
 			i = child.column;
			j = child.row;
			if (controller.grid.cells[i][j].alive) {
				child.fill = controller.drawer.aliveFill; 
			} else {
				child.fill = controller.drawer.deadFill;
			}
 		});
		controller.drawer.canvas.redraw();
 	}
 }