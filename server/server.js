var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo');


app.use(bodyParser.json());

app
  .use('/js', express.static(__dirname + '/bower_components/angular'))
  .use('/js', express.static(__dirname + '/bower_components/angular-resource'))
  .use('/js', express.static(__dirname + '/client/js'));



app.get('/', function(req, res) {
  res.sendFile(__dirname+'/client/template/index.html');
});

//API
app.get('/api', function(req, res) {
  console.dir(req);
  res.json({'name': 'Dogma'});
});
app.post('/api', function(req, res) {
  res.json(req.body);
});


app.listen(3000, function() {
  console.log('listening...');
});