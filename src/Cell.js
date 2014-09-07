function Cell(){
    this.alive = false;

    this.setAlive = setAlive;
    function setAlive(alive){
        this.alive = alive;
    }

    this.toggleAlive = toggleAlive;
    function toggleAlive(){
    	this.alive = !this.alive;
    }
}

