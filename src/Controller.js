var controller;
$(window).load(function (){
    controller = new Controller();
    controller.initialise();
});

function Controller(){
    this.grid;
    this.drawer;
    this.uiHandler;
    this.gameRunner;

    this.initialise = initialise;
    function initialise(){
    	this.grid = new Grid(10, 5);
    	this.drawer = new Drawer();
    	this.uiHandler = new UIHandler();
        this.gameRunner = new GameRunner();
    	this.uiHandler.initialise();
    	this.drawer.initialise();
    }

    this.decrementColumnCount = decrementColumnCount;
    function decrementColumnCount() {
        if(this.grid.columns > 1) {
            this.grid.setColumns(this.grid.columns-1);
            $("#columnTextbox").val(controller.grid.columns);
            controller.drawer.updateGridSize(controller.grid);
        }
    }

    this.changeColumnCount = changeColumnCount;
    function changeColumnCount(value){
        var success = true;
        if (value == controller.grid.columns) {
            // Do nothing to save some processing;
        } else if ((value > 0) && (value % 1 == 0)){
            columnCount = parseInt(value);
            controller.grid.setColumns(columnCount);
            controller.drawer.updateGridSize(controller.grid);
        } else {
            success = false;
        }
        return success;
    }

    this.incrementColumnCount = incrementColumnCount;
    function incrementColumnCount() {
        this.grid.setColumns(this.grid.columns+1);
        $("#columnTextbox").val(controller.grid.columns);
        controller.drawer.updateGridSize(controller.grid);
    }

    this.decrementRowCount = decrementRowCount;
    function decrementRowCount() {
        if(this.grid.rows > 1) {
            this.grid.setRows(this.grid.rows-1);
            $("#rowTextbox").val(controller.grid.rows);
            controller.drawer.updateGridSize(controller.grid);
        }
    }

    this.changeRowCount = changeRowCount;
    function changeRowCount(value){
        var success = true;
        if (value == controller.grid.rows) {
            // Do nothing to save some processing;
        } else if ((value > 0) && (value % 1 == 0)){
            rowCount = parseInt(value);
            controller.grid.setRows(rowCount);
            controller.drawer.updateGridSize(controller.grid);
        } else {
            success = false;
        }
        return success;
    }

    this.incrementRowCount = incrementRowCount;
    function incrementRowCount() {
        controller.grid.setRows(this.grid.rows+1);
        $("#rowTextbox").val(controller.grid.rows);
        controller.drawer.updateGridSize(controller.grid);
    }

    this.changeSpeed = changeSpeed;
    function changeSpeed(value){
        var success = true;
        if (value == controller.grid.rows) {
            // Do nothing to save some processing;
        } else if ((value > 0) && (value % 1 == 0) && (value <= 100)) {
            speed = parseInt(value);
            controller.gameRunner.setSpeed(speed);
        } else {
            success = false;
        }
        return success;
    }

    this.clearGrid = clearGrid;
    function clearGrid(grid){
        for(var i = 0; i < grid.columns; i++) {
            for(var j = 0; j < grid.rows; j++) {
                grid.cells[i][j].setAlive(false);
            }
        }   
        controller.drawer.updateGrid();
    }
}