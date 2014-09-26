function UIHandler() {
	this.htmlCanvas;
 	this.htmlCanvasContext;
	
	this.initialise = initialise;
	function initialise() {
		var width = (controller.grid.cells.length*controller.drawer.cellWidth)+5;
		var height = (controller.grid.cells[0].length*controller.drawer.cellWidth)+5;

		this.htmlCanvas = $('#canvas');

		this.htmlCanvas.width = width;
		this.htmlCanvas.height = height;

		this.bindEvents();
	}

	this.bindEvents = bindEvents;
	function bindEvents() {
		/*
		 *  Play/Edit buttons
		 */
		$("#playButton").click(function (event) {
			controller.gameRunner.toggleMode.call(controller.gameRunner);
		});
		$("#editButton").click(function (event) {
			controller.gameRunner.toggleMode.call(controller.gameRunner);
		});

		$("#columnTextbox").val(controller.grid.columns);
		$("#rowTextbox").val(controller.grid.rows);

		$("#settings-menu").click(function (event) {
			event.stopPropagation();
		});

		$("#decrementColumn").click(function (event){
			controller.decrementColumnCount();
	        event.stopPropagation();
		});

		$("#columnTextbox").click(function (event){
	        event.stopPropagation();
		});

		$("#columnTextbox").blur(function (event){
			if (!controller.changeColumnCount(this.value)) {
	            this.focus();
            	alert("Please enter an integer value higher than 0.");
			}
	        event.stopPropagation();
		});

		$("#incrementColumn").click(function (event){
			controller.incrementColumnCount();
	        event.stopPropagation();
		});

		$("#decrementRow").click(function (event){
			controller.decrementRowCount();
	        event.stopPropagation();
		});

		$("#rowTextbox").click(function (event){
	        event.stopPropagation();
		});

		$("#rowTextbox").blur(function (event){
			if (!controller.changeRowCount(this.value)) {
	            this.focus();
            	alert("Please enter an integer value higher than 0.");
			}
	        event.stopPropagation();
		});

		$("#incrementRow").click(function (event){
			controller.incrementRowCount();
	        event.stopPropagation();
		});
	}

	this.toggleButtonState = toggleButtonState;
	function toggleButtonState(play) {
		var playButton = $("#playButton");
		var editButton = $("#editButton");
		var settingsButton = $("#settingsButton");
		var settingsLink = $("#settingsLink");
		if (play) {
			playButton.prop("disabled", true);
			editButton.prop("disabled", false);
			settingsButton.addClass("disabled");
			settingsLink.addClass("disabled");
		} else {
			playButton.prop("disabled", false);
			editButton.prop("disabled", true);
			settingsButton.removeClass("disabled");
			settingsLink.removeClass("disabled");
		}
	}

}