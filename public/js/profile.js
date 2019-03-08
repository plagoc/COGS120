// Used for both settings and profile

'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS Connected!");
	setPic(); 
	setName();
	setGoal();
}

function setPic() {
	$("#profileImg").attr('src', getProfilePic());
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
	$('#name').text(getName());
}
function setGoal() {
	document.getElementById("goal").innerHTML = getGoal();   
}

// Toggle the weight
function toggleKg() {
	console.log("clicked kg!");
	$("#kgOptions").button('toggle');

	if($('#lbsOptions').hasClass("active")) {
		console.log("lbs has class active");
		$("#lbsOptions").button('toggle');
	}
	storeMeasurmentType('kg');
}

function toggleLbs() {
	console.log("clicked lbs!");
	$("#lbsOptions").button('toggle');
	
	if($('#kgOptions').hasClass("active")) {
		$("#kgOptions").button('toggle');
	}
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

// Handle user clicking edit button
function edit() {
	// Check if confirm button is showing already, then switch text to Cancel
	$("#edit").hide();
	if($("#confirm").is(":visible")) {
		console.log("if!");
	} else {
		var name = getName();
		$("#name").replaceWith('<input type="text" id="name" class="form-control inputText" value=' +' " '+name+' " ' + ' aria-label="Name"'+
							'aria-describedby="basic-addon1">');
		var goal = getGoal();
		$("#goal").replaceWith('<input type="text" id="goal" class="form-control inputText" value=' +' " '+goal+' " ' + ' aria-label="Name"'+
							'aria-describedby="basic-addon1">');

		$("#confirm").show();	
	}
}

// Handle user clicking confirm button
function confirm() {

	var name = $("#name").val();
	if(name.length  == 0) {
		name = getName();
	}	
	$("#name").replaceWith('<h2 class="raleway-text profileValue" id="name">'+name+'</h2>');

	var goal = $("#goal").val();
	if(goal.length  == 0) {
		goal = getGoal();
	}	
	$("#goal").replaceWith('<h2 class="raleway-text profileValue" id="goal">'+goal+'</h2>');

	$("#edit").show();
	$("#confirm").hide();
	updateProfleInfo(name, goal, getProfilePic());
}


// Settings functionality
function getHelp(helpInfo) {
	var helpText;
	if(helpInfo === "weightInfo") {
		helpText = '"Weight" refers to how your weights will be recorded in the Record Page after selecting a workout. You can choose between having the weights shown in kilograms or pounds.';
	} else if(helpInfo === "graphInfo") {
		helpText = '"Graph" refers to how your progress graph will be presented in the Progress Page after selecting a workout. You can choose between having it shown as a line graph, or as a bar graph.';
	}

	$(".trigger_popup").click(function() {
		$('.hover_bg').show();
		$('p#info').html(helpText);
	});
	$('.hover_bg').click(function() {
		$('.hover_bg').hide();
	});
	$('.popupCloseButton').click(function() {
		$('.hover_bg').hide();
	});
}


function logout() {
	// FB.logout(function(response) {
		// console.log("logging out");
	// });
	// For now, just clear userData
	updateProfleInfo("Johnny", "Work out", '/images/avatar2.png');
	window.location.href = "/";
}












