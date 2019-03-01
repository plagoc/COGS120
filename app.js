
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var index = require('./routes/index');
var profile = require('./routes/profile');
var help = require('./routes/help');
var friends = require('./routes/friends');
var exerciseProgress = require('./routes/exerciseProgress');
var exerciseProgress_A = require('./routes/exerciseProgress');
var exerciseProgress_B = require('./routes/exerciseProgress');
var login = require('./routes/login');
var settings = require('./routes/settings');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', index.view);
app.get('/profile', profile.view);
app.get('/help', help.view);
app.get('/friends', friends.view);
app.get('/exerciseProgress/:name', exerciseProgress.viewExercise);
app.get('/exerciseProgress_A/:name', exerciseProgress_A.viewExercise_A);
app.get('/exerciseProgress_B/:name', exerciseProgress_B.viewExercise_B);
app.get('/', login.view);
app.get('/settings', settings.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
