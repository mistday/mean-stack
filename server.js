var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    demoController = require('./server/controllers/demo-controller.js');

mongoose.connect('mongodb://localhost/Demo');


// middleware
app.use(bodyParser.json());
app
  .use('/js', express.static(__dirname + '/bower_components/angular'))
  .use('/js', express.static(__dirname + '/bower_components/angular-resource'))
  .use('/js', express.static(__dirname + '/client/js'));



app.get('/', function(req, res) {
  res.sendFile(__dirname+'/client/template/index.html');
});


//API
app.get('/api/demo', demoController.query);
app.post('/api/demo', demoController.save);




app.listen(3000, function() {
  console.log('listening...');
});