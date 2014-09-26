var controller;
$(window).load(function (){
    controller = new Controller();
    controller.initialise(true);
});

function Controller(){
    this.grid;
    this.drawer;
    this.uiHandler;
    this.gameRunner;

    this.initialise = initialise;
    function initialise(gameRunner){
    	this.grid = new Grid(10, 5);
    	this.drawer = new Drawer();
    	this.uiHandler = new UIHandler();
    	this.uiHandler.initialise();
    	this.drawer.initialise();
        if (gameRunner) {
            this.gameRunner = new GameRunner();
            this.gameRunner.execute();
        }
    }

    this.decrementColumnCount = decrementColumnCount;
    function decrementColumnCount() {
        if(this.grid.columns > 1) {
            this.grid.columns--;
            $("#columnTextbox").val(controller.grid.columns);
        }
    }

    this.changeColumnCount = changeColumnCount;
    function changeColumnCount(value){
        var success = true;
        if (value == controller.grid.columns) {
            // Do nothing to save some processing;
        } else if ((value > 1) && (value % 1 == 0)){
            columnCount = parseInt(value);
            controller.grid.columns = columnCount;
        } else {
            success = false;
        }
        return success;
    }

    this.incrementColumnCount = incrementColumnCount;
    function incrementColumnCount() {
        this.grid.columns++;
        $("#columnTextbox").val(controller.grid.columns);
    }

    this.decrementRowCount = decrementRowCount;
    function decrementRowCount() {
        if(this.grid.rows > 1) {
            this.grid.rows--;
            $("#rowTextbox").val(controller.grid.rows);
        }
    }

    this.changeRowCount = changeRowCount;
    function changeRowCount(value){
        var success = true;
        if (value == controller.grid.rows) {
            // Do nothing to save some processing;
        } else if ((value > 1) && (value % 1 == 0)){
            rowCount = parseInt(value);
            controller.grid.rows = rowCount;
        } else {
            success = false;
        }
        return success;
    }


    this.incrementRowCount = incrementRowCount;
    function incrementRowCount() {
        this.grid.rows++;
        $("#rowTextbox").val(controller.grid.rows);
    }
}