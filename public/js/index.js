'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS connected!");
	$(".dropdown-toggle").click(function(e) {
		$(this).dropdown(); // TODO: Fix the bug where this is double-clicked
	});
	search();
}

function search() {
	$("#searchbar-submit").on('click', function(e) {
		e.preventDefault();
		var text = $("#searchbar").val();
		console.log(text);
		// Get all of the div class exercise 
		var exercises = $("div #exercise").get();
		console.log(exercises);
		filter(exercises, text);
	})
}

// Loop through all exercises, and hide those who don't match textToFind
function filter(exercises, textToFind) {
	var query = textToFind.toUpperCase();
	for(var i = 0; i < exercises.length; i++) {
		// TODO: Change to jQuery
		var exercise = exercises[i].getElementsByTagName("a")[0];
		var nameOfExercise = exercise.textContent || exercise.innerText;
		// console.log(nameOfExercise);
		if(nameOfExercise.toUpperCase().indexOf(query) > -1) {
			exercises[i].style.display = "";
		} else {
			exercises[i].style.display = "none";
		}
	}
}
