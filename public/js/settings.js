'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#kgOptions").click(function(e) {
		console.log("clicked kg!");
		$(this).button('toggle');
	});
	$("#lineOptions").click(function(e) {
		console.log("clicked line!");
		$(this).button('toggle');
	});
}