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