function GameRunner() {
    this.play = false;
    this.speed = 1;
    this.processId;

    this.setSpeed = setSpeed;
    function setSpeed(speed) {
        this.speed = speed;
    }

    this.toggleMode = toggleMode;
    function toggleMode() {
        this.play = !this.play;
        if(this.play) {
            this.execute();
        } else {
            this.terminate();
        }
        controller.uiHandler.toggleButtonState(this.play);
    }

    this.execute = execute;
    function execute() {
        this.processId = setInterval(function () {
            console.log("hlera");
            controller.grid.setNextGeneration();
            controller.drawer.updateGrid();
        }, 1000/controller.gameRunner.speed);
    }

    this.terminate = terminate;
    function terminate() {
        clearInterval(this.processId);
    }
}