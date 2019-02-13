'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS connected!");
	search();
	dropdown();
}

// Handles search button
function search() {
	$("#searchbar-submit").on('click', function(e) {
		e.preventDefault();
		var text = $("#searchbar").val();
		var exercises = $("div #exercise").get();
		searchFilter(exercises, text);
	})
}

// Loop through all exercises, and hide those who don't match textToFind
// From https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFilter(exercises, textToFind) {
	var query = textToFind.toUpperCase();
	for(var i = 0; i < exercises.length; i++) {
		// TODO: Change to jQuery
		var exercise = exercises[i].getElementsByTagName("a")[0];
		var nameOfExercise = exercise.textContent || exercise.innerText;
		if(nameOfExercise.toUpperCase().indexOf(query) > -1) {
			exercises[i].style.display = "";
		} else {
			exercises[i].style.display = "none";
		}
	}
}

// Handles dropdown filter
function dropdown() {
	$("#dropdownFilter").on('click', function(e) {
		e.preventDefault();
		$(this).dropdown();
		// Get the buttons that can be pressed 
		var filters = $("li.filter").get();
		// TODO: jQuery this
		// Alphabetize A-Z if pressing the first filter
		var aToZBtn = filters[0].getElementsByTagName("button")[0];
		console.log(aToZBtn);
		// Alphabetize Z-A if pressing second filter
	})
}


