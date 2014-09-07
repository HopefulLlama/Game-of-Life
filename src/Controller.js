var controller;
var test;
function Controller(){
    this.grid;
    this.drawer;
    this.uiHandler;

    this.initialise = initialise;
    function initialise(){
    	this.grid = new Grid(10, 5);
    	this.drawer = new Drawer();
    	this.uiHandler = new UIHandler();
    	test = this;
    	this.uiHandler.initialise();
    	this.drawer.initialise();
    }
}

$(window).load(function (){
	controller = new Controller();
	controller.initialise();
});