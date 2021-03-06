'use strict'

$(document).ready(function() {
	initializePage();
})
var rand;
function initializePage() {
	console.log("JS connected!");

	// FIXME: Below two functions are ONLY for index, so only do the below functions IF on index page
	search();
	dropdown();
	//$('#exerciseList').show();
	//$('#FilterName').hide();
	//$('#customForm').hide();
	// $('#homeNav').replaceWith("<h1>FitY'all!</h1>");
}

function abTest(name){

	if (getUserData().abTesting == 'B') {
		document.location.href = ("/exerciseProgress_B/"+name);
		
	} else {
  		document.location.href = ("/exerciseProgress_A/"+name);		
	}
}

// Handles search button
function search() {
	/*
	$("#searchbar-submit").on('click', function(e) {
		e.preventDefault();
		var text = $("#searchbar").val();
		var exercises = $("div #exercise").get();
		searchFilter(exercises, text);
	});
	*/
	window.setInterval(function() {
		if($("#searchbar").val() != "") {
			searchFilter($("div #exercise").get(), $("#searchbar").val());
		} else { // Nothing in searchbar -> show all exercises
			for(var i = 0; i < $("div #exercise").get().length; i++) {
				$("div #exercise").get()[i].style.display = "";
			}
		} 
	}, 100);
	// searchFilter( $("div #exercise").get(), $("#searchbar").val());
}

// Loop through all exercises, and hide those who don't match textToFind
// From https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchFilter(exercises, textToFind) {
	var query = textToFind.toUpperCase();
	for(var i = 0; i < exercises.length; i++) {
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
	$('#dropdownFilter').dropdown();
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
