'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$(".dropdown-toggle").click(function(e) {
		console.log("clicked dropdown!");
		$(this).dropdown();
	});
}