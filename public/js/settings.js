'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS Connected!");
	toggleKg();
	toggleLbs();
}

// Toggle the weight
function toggleKg() {
	$("#kgOptions").on('click', function(e) {
		console.log("clicked kg!");
		$("#kgOptions").button('toggle');
	});
}

function toggleLbs() {
	$("#lbsOptions").on('click', function(e) {
		console.log("clicked lbs!");
		$("#lbsOptions").button('toggle');
	});
}


// TODO: Switch placement of confirm and cancel


// Handle user clicking edit button
function edit() {
	// Check if confirm button is showing already, then switch text to Cancel
	$("#edit").replaceWith('<button type="button" class="cancel btn btn-lg btn-primary" onclick="cancel()" id="cancel">Cancel</button>');
	if($("#confirm").is(":visible")) {
		console.log("if!");
	} else {
		$("#name").replaceWith('<div class="input-group mb-3">'+
							'<input type="text" id="name" class="form-control" placeholder="Name" aria-label="Name"'+
							'aria-describedby="basic-addon1"></div>');
		$("#goal").replaceWith('<div class="input-group mb-3">'+
							'<input type="text" id="goal" class="form-control" placeholder="Goal" aria-label="Name"'+
							'aria-describedby="basic-addon1"></div>');
		$("#display").replaceWith('<div class="input-group mb-3">'+
							'<input type="text" id="display" class="form-control" placeholder="Display" aria-label="Name"'+
							'aria-describedby="basic-addon1"></div>');
		$("#confirm").show();	
	}
}

function cancel() {
	console.log("Cancelled!");
}

// Handle user clicking confirm button
function confirm() {
	var name = $("#name").val();
	if(name.length == 0) {
		name = "No Name Given";
	}
	$("#name").replaceWith('<h1 class="display-1" id="name">'+name+'</h1>');

	var goal = $("#goal").val();
	if(goal.length  == 0) {
		goal = "No Goal Given";
	}
	$("#goal").replaceWith('<h1 class="display-1" id="goal">'+goal+'</h1>');
	
	var display = $("#display").val();
	if(display.length == 0) {
		display = "No Display Given";
	}
	$("#display").replaceWith('<h1 class="display-1" id="display">'+display+'</h1>');

	$("#cancel").replaceWith('<button type="button" class="edit btn btn-lg btn-primary" onclick="edit()" id="edit">Edit</button>');
	$("#confirm").hide()
}