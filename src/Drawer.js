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
		var width = (controller.grid.cells.length*controller.drawer.cellWidth)+5;
		var height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+5;

 		this.canvas = oCanvas.create({
 			canvas: '#canvas',
 			fps: 60,
 			width: width,
 			height: height
 		});	
		
 		for (var i = 0; i < controller.grid.cells.length; i++){
 			for (var j = 0; j < controller.grid.cells[0].length; j++){ 				
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
 				rectangle.bind("click tap", function () {
 					controller.grid.cells[this.column][this.row].toggleAlive();
 					if (controller.grid.cells[this.column][this.row].alive) {
 						this.fill = controller.drawer.aliveFill; 
 					} else {
 						this.fill = controller.drawer.deadFill;
 					}
 					controller.drawer.canvas.redraw();
				});
				controller.drawer.canvas.addChild(rectangle);
 			}
 		}

 		controller.drawer.canvas.redraw();
 	} 

 	this.resizeCanvas = resizeCanvas;
 	function resizeCanvas() {
 		controller.drawer.canvas.width = controller.grid.cells.length*controller.drawer.cellWidth;
 		controller.drawer.canvas.height = controller.grid.cells[0].length*controller.drawer.cellWidth;
 	};
 }