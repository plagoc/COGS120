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
		// FIXME: Change to jQuery
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
// TODO: Fix bug where user has to click twice
function dropdown() {
	$("#dropdownFilter").on('click', function(e) {
		e.preventDefault();
		$(this).dropdown();
	})
}

// Handles alphabetizing exercises A to Z
// From https://stackoverflow.com/questions/31266660/sort-divs-alphabetically-without-destroying-and-recreating-them
function alphabetizeAtoZ() {
	// FIXME: jQuery this
	$('div#exercise').sort(function(a, b) {
		if(a.getElementsByTagName("a")[0].innerText < b.getElementsByTagName("a")[0].innerText) {
			return -1;
		} else {
			return 1;
		}
	}).appendTo("div#exercises.container");
}

// Handles alphabetizing exercises Z to A
// From https://stackoverflow.com/questions/31266660/sort-divs-alphabetically-without-destroying-and-recreating-them
function alphabetizeZtoA() {
	$('div#exercise').sort(function(a, b) {
		if(a.getElementsByTagName("a")[0].innerText < b.getElementsByTagName("a")[0].innerText) {
			return 1;
		} else {
			return -1;
		}
	}).appendTo("div#exercises.container");
}
