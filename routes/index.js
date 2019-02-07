
/*
 * GET home page.
 */

exports.view = function(req, res) {
  res.render('index', {
  	'exercises': [
  		{
  			'name': 'Pull-ups',
  			'image': 'lorempixel.people.1.jpeg',
  			'id': 'exercise'
  		},
  		{
  			'name': 'Bench',
  			'image': 'lorempixel.city.1.jpeg',
  			'id': 'exercise'
  		},
  		{
  			'name': 'Deadlifts',
  			'image': 'lorempixel.abstract.8.jpeg',
  			'id': 'exercise'
  		},
      {
        'name': 'Squats',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'exercise'
      },
      {
        'name': 'Curls',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'exercise'
      },
      {
        'name': 'Sit-ups',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'exercise'
      }
  	]
  });
};