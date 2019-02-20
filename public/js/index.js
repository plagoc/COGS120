'use strict'

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JS connected!");
	search();
	dropdown();
	$('#exerciseList').show();
	$('#FilterName').hide();
	$('#customForm').hide();
	// $('#homeNav').replaceWith("<h1>FitY'all!</h1>");
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

function createFilter() {
	$('#customForm').show();
	$('#exerciseList').hide();
	newFilter(name);

}

function submitCustomFilter() {
	var oldName = document.getElementById('customFilterName').name;
	var newName = document.getElementById('customFilterName').value;
	if(getCustomFilter(oldName) == -1) {
		console.log("cannot find filter by oldname");
		$('#customForm').hide();
		$('#exerciseList').show();
		return;
	}
	if(oldName != newName) {
		if(getCustomFilter(newName) != -1) {
			alert("cannot have same name as another filter");
			return;
		} else {
			setNameCustomFilter(newName, oldName);
		}
	}

	document.getElementById('customFilterName').name = newName;

	$('#customForm').hide();
	$('#exerciseList').show();
}

function newFilter(name) {
	createCustomFilter(name);

}

function toggleExercise(name, exercise) {
	if(editCustomFilter(name, exercise)){
		$('#'+exercise).css('background', '#AAA');
		console.log("added changed background");
	} else {
		$('#'+exercise).css('background', '#FFF');
		console.log("spliced changed background");
	}
}

function populateCustomFilter(nameOfFilter, exercise) {
	var iterOfFilter = getCustomFilter(nameOfFilter);
	if( iterOfFilter != -1) {
		if(containsElement(iterOfFilter, exercise)){
			$('#'+exercise).css('background', '#AAA');
		} else {
			$('#'+exercise).css('background', '#FFF');
		}
	} else {
		console.log('No filter by this name');
	}
}

function addCustomWorkouts(){
	var userData = getUserData();
	for(var i = 0; i < userData.customWorkoutFilters.length; i++){
		var name = userData.customWorkoutFilters[i][0];
		var html = '<li class="filter">' +
						'<button class="btn dropdown-item" type="button" onclick="'+populateCustomFilter(name)+'">'+name+
						'</button>' +
					'</li> ';

	}




}
