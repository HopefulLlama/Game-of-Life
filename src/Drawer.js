/*
    Do drawing stuff here
 */
 function Drawer(){
 	this.cellWidth = 30;
 	this.aliveFill = '#bbb';
 	this.deadFill = '#fff';

 	this.canvas;
 	
 	this.gridMap = [];

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
 	} 

 	this.resizeCanvas = resizeCanvas;
 	function resizeCanvas() {
 		controller.drawer.canvas.width = (controller.grid.cells.length*controller.drawer.cellWidth)+4;
 		controller.drawer.canvas.height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+4;
 	};

 	this.drawGrid = drawGrid;
 	function drawGrid(grid) {
 		for (var i = 0; i < grid.cells.length; i++) {
 			controller.drawer.gridMap[i] = [];
 			for (var j = 0; j < grid.cells[0].length; j++) {  				
 				var rectangle = controller.drawer.createRectangle(i, j, grid);
				controller.drawer.gridMap[i][j] = rectangle;

				controller.drawer.canvas.addChild(rectangle);
 			}
 		}
 		controller.drawer.resizeCanvas();
 		controller.drawer.canvas.redraw();
 	}

 	this.updateGrid = updateGrid;
 	function updateGrid(){
 		controller.drawer.canvas.children.forEach(function (child){
			if (controller.grid.cells[child.i][child.j].alive) {
				child.fill = controller.drawer.aliveFill; 
			} else {
				child.fill = controller.drawer.deadFill;
			}
 		});
		controller.drawer.canvas.redraw();
 	}

    this.updateGridSize = updateGridSize;
    function updateGridSize(grid){
        if(grid.columns > this.gridMap.length) {
            for(var i = this.gridMap.length; i < grid.columns; i++) {
                controller.drawer.gridMap[i] = [];
                for(var j = 0; j < this.gridMap[0].length; j++){
                    var rectangle = controller.drawer.createRectangle(i, j, grid);
                    controller.drawer.gridMap[i][j] = rectangle;
             		controller.drawer.canvas.addChild(rectangle);
                }
            }
        } else if(grid.columns < this.gridMap.length) {
            for(var i = this.gridMap.length-1; i >= grid.columns; i--){
                for(var j = 0; j < this.gridMap[i].length; j++){
                	this.gridMap[i][j].remove(false);
                }
            }
            var amount = this.gridMap.length - grid.columns;
            this.gridMap.splice(grid.columns, amount);
        } 

        if(grid.rows > this.gridMap[0].length){
            for(var i = 0; i < this.gridMap.length; i++){
                for(var j = this.gridMap[i].length; j < grid.rows; j++){
                    var rectangle = controller.drawer.createRectangle(i, j, grid);
                    controller.drawer.gridMap[i][j] = rectangle;
                    controller.drawer.canvas.addChild(rectangle);
                }
            }
        } else if (grid.rows < this.gridMap[0].length){
   	        var amount = this.gridMap[0].length - grid.rows;
            for(var i = 0; i < this.gridMap.length; i++){
                for(var j = this.gridMap[i].length-1; j >= grid.rows; j--){
                	this.gridMap[i][j].remove(false);
                }
				this.gridMap[i].splice(grid.rows, amount);
            }
        } 
 		controller.drawer.resizeCanvas();
 		controller.drawer.canvas.redraw();
    }

    this.createRectangle = createRectangle;
    function createRectangle(i, j, grid){
    	var rectangle;
		rectangle = controller.drawer.canvas.display.rectangle({
			x: (i*controller.drawer.cellWidth)+2,
			y: (j*controller.drawer.cellWidth)+2,
			width: controller.drawer.cellWidth,
			height: controller.drawer.cellWidth,
			stroke: "outisde 2px rgba(0, 0, 0, 1)"
		});
		if (controller.grid.cells[i][j].alive) {
			this.fill = controller.drawer.aliveFill; 
		} else {
			this.fill = controller.drawer.deadFill;
		}
		rectangle.bind("click tap", function () {
			if (!controller.gameRunner.play) {
				grid.cells[i][j].toggleAlive();
				if (grid.cells[i][j].alive) {
					this.fill = controller.drawer.aliveFill; 
				} else {
					this.fill = controller.drawer.deadFill;
				}
				controller.drawer.canvas.redraw();
			}
		});

		rectangle.i = i;
		rectangle.j = j;
		return rectangle;
    }
 }