/*
 * GET exercise page.
 */

var data = require('../data.json');

exports.viewExercise = function(req, res){
	var name = req.params.name;
	var videoURL;
	var text;
	var numReps;
	var tips;	// tips is an array

	// From https://stackoverflow.com/questions/19253753/javascript-find-json-value
	for(var i = 0; i < data.exercises.length; i++) {
		if(data.exercises[i].name == name) {
			videoURL = data.exercises[i].videoURL;
			text = data.exercises[i].text;
			numReps = data.exercises[i].numReps;
			tips = data.exercises[i].tips;
		}
	}
  	res.render('exerciseProgress', {
  		'name': name,
  		'videoURL': videoURL,
  		'text': text,
  		'numReps': numReps,
  		'tips': tips
  	});
};

exports.viewExercise_B = function(req, res){
	var name = req.params.name;
	var videoURL;
	var text;
	var numReps;
	var tips;	// tips is an array

	// From https://stackoverflow.com/questions/19253753/javascript-find-json-value
	for(var i = 0; i < data.exercises.length; i++) {
		if(data.exercises[i].name == name) {
			videoURL = data.exercises[i].videoURL;
			text = data.exercises[i].text;
			numReps = data.exercises[i].numReps;
			tips = data.exercises[i].tips;
		}
	}
  	res.render('exerciseProgress_B', {
  		'name': name,
  		'videoURL': videoURL,
  		'text': text,
  		'numReps': numReps,
  		'tips': tips
  	});
};

exports.viewExercise_A = function(req, res){
	var name = req.params.name;
	var videoURL;
	var text;
	var numReps;
	var tips;	// tips is an array

	// From https://stackoverflow.com/questions/19253753/javascript-find-json-value
	for(var i = 0; i < data.exercises.length; i++) {
		if(data.exercises[i].name == name) {
			videoURL = data.exercises[i].videoURL;
			text = data.exercises[i].text;
			numReps = data.exercises[i].numReps;
			tips = data.exercises[i].tips;
		}
	}
  	res.render('exerciseProgress_A', {
  		'name': name,
  		'videoURL': videoURL,
  		'text': text,
  		'numReps': numReps,
  		'tips': tips
  	});
};