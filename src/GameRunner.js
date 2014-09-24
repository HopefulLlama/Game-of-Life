function GameRunner() {
    this.play = false;
    this.speed = 0.5;

    this.toggleMode = toggleMode;
    function toggleMode() {
        this.play = !this.play;
        controller.uiHandler.toggleButtonState(this.play);
    }

    this.execute = execute;
    function execute() {
        setInterval(function () {
            console.log(controller.gameRunner.play);
            if(controller.gameRunner.play) {
                controller.grid.setNextGeneration();
                controller.drawer.updateGrid();
            }
        }, 1000/controller.gameRunner.speed);
    }
}