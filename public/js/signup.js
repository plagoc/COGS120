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
		
		
		// if($("#email").text() != "" && $("#password").text() != "") {
		// 	window.location.href = "/index/";
		// } else {
		// 	console.log($("#email").text());
		// 	console.log("Forms not filled in");
		// }


	});
}