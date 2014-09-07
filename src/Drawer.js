/*
    Do drawing stuff here
 */
 function Drawer(){
 	this.cellWidth = 15;

 	this.canvas;
 	this.rectangleArray = new Array();
 	
 	this.initialise = initialise;
 	function initialise () {
		var width = (controller.grid.cells.length*controller.drawer.cellWidth)+5;
		var height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+5;

		console.log(width);
		console.log(height);

 		this.canvas = oCanvas.create({
 			canvas: '#canvas',
 			fps: 60,
 			width: width,
 			height: height
 		});	
		
 		for (var i = 0; i < controller.grid.cells.length; i++){
 			var rectangleRowArray = new Array();
 			for (var j = 0; j < controller.grid.cells[0].length; j++){ 				
 				var rectangle;
 				if((i+1)%5 === 0 || (j+1)%5 === 0 ){
 					rectangle = controller.drawer.canvas.display.rectangle({
						x: (i*controller.drawer.cellWidth)+2,
						y: (j*controller.drawer.cellWidth)+2,
						width: controller.drawer.cellWidth,
						height: controller.drawer.cellWidth,
						fill: "#bbb",
						stroke: "outisde 2px rgba(0, 0, 0, 1)"
					});
 				} else {
					rectangle = controller.drawer.canvas.display.rectangle({
						x: (i*controller.drawer.cellWidth)+2,
						y: (j*controller.drawer.cellWidth)+2,
						width: controller.drawer.cellWidth,
						height: controller.drawer.cellWidth,
						stroke: "outisde 2px rgba(0, 0, 0, 1)"
					});
				}
				rectangleRowArray.push(rectangle);
				controller.drawer.canvas.addChild(rectangle);
 			}
 			controller.drawer.rectangleArray.push(rectangleRowArray);
 		}

 		controller.drawer.canvas.redraw();
 	} 

 	this.resizeCanvas = resizeCanvas;
 	function resizeCanvas() {
 		controller.drawer.canvas.width = controller.grid.cells.length*controller.drawer.cellWidth;
 		controller.drawer.canvas.height = controller.grid.cells[0].length*controller.drawer.cellWidth;
 	};
 }