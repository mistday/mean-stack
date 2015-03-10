var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Demo');


var Demo = mongoose.model('democols', { name: String });



app.use(bodyParser.json());
app
  .use('/js', express.static(__dirname + '/bower_components/angular'))
  .use('/js', express.static(__dirname + '/bower_components/angular-resource'))
  .use('/js', express.static(__dirname + '/client/js'));



app.get('/', function(req, res) {
  res.sendFile(__dirname+'/client/template/index.html');
});



//API
app.get('/api/demo', function(req, res) {
	Demo.find({}, function(err, results) {
		res.json(results);
	});
});
app.post('/api/demo', function(req, res) {
	var demo = new Demo(req.body);
	demo.save(function(err, results) {
		res.json(results);
	});
});






app.listen(3000, function() {
  console.log('listening...');
});