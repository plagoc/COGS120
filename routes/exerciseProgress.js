/*
 * GET exercise page.
 */

var data = require('../data.json');

exports.viewExercise = function(req, res){
	var name = req.params.name;
	var videoURL = 'https://www.youtube.com/embed/Jtols_QhuWw' // TODO: Change so that the videoURL corresponds to the correct exercise

  	res.render('exerciseProgress', {
  		'name': name,
  		'videoURL': videoURL,
  	});
};