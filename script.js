var $containerDiv = $('<div></div>');
var newGridSize;
var viewportHeight;
var viewportWidth;

$(document).ready(function() {
	viewportHeight = $(window).height();
	viewportWidth = $(document).width();
	$('html').css('margin', '0');
	$('html').css('padding', '0');
	addButton();
	$('body').append($containerDiv);
	resetBoard();
});

var createGrid = function(rows, columns, gridUnitSize) {

	for (var row=0; row<rows; row++) {
		var $rowContainer = $('<div style="float: left; clear: both;"></div>');
		$containerDiv.append($rowContainer);
		for (var col=0; col<columns; col++) {
			var $GridUnit = $('<div class="grid_unit" style="background-color: green; float: left;"></div>');
			$GridUnit.css('width', gridUnitSize.toString());
			$GridUnit.css('height', gridUnitSize.toString());
			$rowContainer.append($GridUnit);
		}
	}
	$('.grid_unit').on('mouseenter', function() {
		$(this).css('background-color', 'white');
	});
}

var addButton = function() {
	$('body').append('<div id="button_container" style="float: left; clear:both;"></div>')
	$('#button_container').append('<button id="clear_button" style="float: left; margin-bottom: 10px;">Clear</button>');
	$('#clear_button').on('click', function() {
		resetBoard();
	});
}

var resetBoard = function() {
	$containerDiv.empty();
	viewportHeight = $(window).height();
	viewportWidth = $(window).width();
	newGridSize = Number(window.prompt("How many pixels per row do you want? (Enter one number)", newGridSize));
	if (newGridSize === null) {
		newGridSize = 20;
	}
	while (isNaN(newGridSize) || newGridSize < 6) {
		newGridSize = Number(window.prompt("Grid size must be a positive integer over 5", newGridSize));
	}
	var gridRows;
	if (newGridSize <= 10) {
		gridRows = newGridSize - Math.floor(newGridSize*.2);
	} else {
		gridRows = newGridSize - Math.floor(newGridSize*.05);
	}

	var gridCols;
	var gridUnitSize = viewportHeight/newGridSize;
	if (newGridSize <= 30) {
		gridCols = (viewportWidth/gridUnitSize) - Math.floor((viewportWidth/gridUnitSize)*.1);
	} else {
		gridCols = (viewportWidth/gridUnitSize) - Math.floor((viewportWidth/gridUnitSize)*.05);
	}
	
	createGrid(gridRows, gridCols, gridUnitSize);
}