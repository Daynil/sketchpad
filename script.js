var $containerDiv = $('<div></div>');

$(document).ready(function() {
	$('body').append($containerDiv);
	addButton();
	createGrid(16, 16);
});

var createGrid = function(rows, columns) {
	for (var row=0; row<rows; row++) {
		var $rowContainer = $('<div style="float: left; clear: both;"></div>');
		$containerDiv.append($rowContainer);
		for (var col=0; col<columns; col++) {
			var $GridUnit = $('<div class="grid_unit" style="width: 50px; height:50px; background-color: green; float: left;"></div>');
			$rowContainer.append($GridUnit);
		}
	}
	$('.grid_unit').on('mouseenter', function() {
		$(this).css('background-color', 'white');
	});
}

var addButton = function() {
	$containerDiv.append('<button id="clear_button" style="float: left; margin-bottom: 10px;">Clear</button>');
	$('#clear_button').on('click', function() {
		resetBoard();
	});
}

var resetBoard = function() {
	$('body').remove($containerDiv);
}