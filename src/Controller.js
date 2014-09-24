var controller;
$(window).load(function (){
    controller = new Controller();
    controller.initialise();
});

function Controller(){
    this.grid;
    this.drawer;
    this.uiHandler;
    this.play = false;

    this.initialise = initialise;
    function initialise(){
    	this.grid = new Grid(10, 5);
    	this.drawer = new Drawer();
    	this.uiHandler = new UIHandler();
    	this.uiHandler.initialise();
    	this.drawer.initialise();
    }

    this.toggleMode = toggleMode;
    function toggleMode() {
        this.play = !this.play;
        this.uiHandler.toggleButtonState(this.play);
    }
}