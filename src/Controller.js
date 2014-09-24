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
}