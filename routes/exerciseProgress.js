/*
 * GET exercise page.
 */

var data = require('../data.json');

exports.viewExercise = function(req, res){
	var name = req.params.name;
	var videoURL;
	var text;
	// From https://stackoverflow.com/questions/19253753/javascript-find-json-value
	for(var i = 0; i < data.exercises.length; i++) {
		if(data.exercises[i].name == name) {
			videoURL = data.exercises[i].videoURL;
			text = data.exercises[i].text;
		}
	}
  	res.render('exerciseProgress', {
  		'name': name,
  		'videoURL': videoURL,
  		'text': text,
  	});
};