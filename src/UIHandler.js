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
			controller.toggleMode.call(controller);
		});
		$("#editButton").click(function (event) {
			controller.toggleMode.call(controller);
		});

		$("#columnTextbox").val(controller.grid.columns);
		$("#rowTextbox").val(controller.grid.rows);
	}

	this.toggleButtonState = toggleButtonState;
	function toggleButtonState(play) {
		var playButton = $("#playButton");
		var editButton = $("#editButton");
		if (play) {
			playButton.attr("disabled", "disabled");
			editButton.removeAttr("disabled");
		} else {
			playButton.removeAttr("disabled");
			editButton.attr("disabled", "disabled");
		}
	}

}