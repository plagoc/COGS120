'use strict'

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	console.log('JS Attached!');
	signup();
}

function signup() {
	$("#signup").click(function() {
		console.log("Clicked!!!");
		
		/*
		if($("#email").val() != "" && $("#password").val() != "") {
			window.location.href = "/index/";
		} else {
			console.log("Forms not filled in");
		}
		*/

	});
}