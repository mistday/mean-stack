var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	demoController = require('./server/controllers/demo-controller.js'),
	mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost:27017/demo'),

app.use(bodyParser.json());

app
  .use('/js', express.static(__dirname + '/bower_components/angular'))
  .use('/js', express.static(__dirname + '/bower_components/angular-resource'))
  .use('/js', express.static(__dirname + '/client/js'));



app.get('/', function(req, res) {
  res.sendFile(__dirname+'/client/template/index.html');
});

//API
app.post('/api/demo', demoController.create);


app.listen(3000, function() {
  console.log('listening...');
});