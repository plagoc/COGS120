/*
 * GET exercise page.
 */

var data = require('../data.json');

exports.viewExercise = function(req, res){
	var name = req.params.name;
	// var videoURL = 'https://www.youtube.com/embed/Jtols_QhuWw' // TODO: Change so that the videoURL corresponds to the correct exercise
	var videoURL;
	for(var i = 0; i < data.exercises.length; i++) {
		if(data.exercises[i].name == name) {
			videoURL = data.exercises[i].videoURL;
		}
	}
  	res.render('exerciseProgress', {
  		'name': name,
  		'videoURL': videoURL,
  	});
};