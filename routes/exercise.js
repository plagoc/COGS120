/*
 * GET exercise page.
 */

exports.viewExercise = function(req, res){
	var name = req.params.name;
  	res.render('exercise', {
  		'name': name,
  	});
};