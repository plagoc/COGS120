'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS Connected!");
	setName();
	setGoal();
	setMeasurement();
	setGraph();
}

function setMeasurement() {
	if (getAppMeasurement() != false ) {
		if (getAppMeasurement() == 'kg' ) {
			document.getElementById("kgOptions").click();
		} else {
			document.getElementById("lbsOptions").click();
		}
	}
}

function setGraph() {
	if (getGraphType() != false ) {
		if (getGraphType() == 'bar' ) {
			document.getElementById("barOptions").click();
		} else {
			document.getElementById("lineOptions").click();
		}
	}
}

function setName() {
	document.getElementById("name").innerHTML = getName(); 
}
function setGoal() {
	document.getElementById("goal").innerHTML = getGoal();   
}

// Toggle the weight
function toggleKg() {
	console.log("clicked kg!");
	$("#kgOptions").button('toggle');
	storeMeasurmentType('kg');
}

function toggleLbs() {
	console.log("clicked lbs!");
	$("#lbsOptions").button('toggle');
	storeMeasurmentType('lbs');

}

function toggleBar() {
	console.log("clicked bar!");
	$("#barOptions").button('toggle');
	storeGraphType('bar');
}

function toggleLine() {
	console.log("clicked Line!");
	$("#lineOptions").button('toggle');
	storeGraphType('line');
}




// TODO: Switch placement of confirm and cancel


// Handle user clicking edit button
function edit() {
	// Check if confirm button is showing already, then switch text to Cancel
	$("#edit").hide();
	if($("#confirm").is(":visible")) {
		console.log("if!");
	} else {
		var name = getName();
		$("#name").replaceWith('<div class="input-group mb-3">'+
							'<input type="text" id="name" class="form-control" value=' +' " '+name+' " ' + ' aria-label="Name"'+
							'aria-describedby="basic-addon1"></div>');
		var goal = getGoal();
		$("#goal").replaceWith('<div class="input-group mb-3">'+
							'<input type="text" id="goal" class="form-control" value=' +' " '+goal+' " ' + ' aria-label="Name"'+
							'aria-describedby="basic-addon1"></div>');

		$("#confirm").show();	
	}
}

// Handle user clicking confirm button
function confirm() {

	var name = $("#name").val();
	if(name.length  == 0) {
		name = getName();
	}	
	$("#name").replaceWith('<h1 class="display-1" id="name">'+name+'</h1>');

	var goal = $("#goal").val();
	if(goal.length  == 0) {
		goal = getGoal();
	}	
	$("#goal").replaceWith('<h1 class="display-1" id="goal">'+goal+'</h1>');

	$("#edit").show();
	$("#confirm").hide();
	updateProfleInfo(name, goal);
}