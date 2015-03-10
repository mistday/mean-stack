var Demo = require('../models/Demo.js');

module.exports.save = function(req, res) {
  var demo = new Demo(req.body);
  demo.save(function(err, results) {
    res.json(results);
  });
};

module.exports.query = function(req, res) {
  Demo.find({}, function(err, results) {
    res.json(results);
  });
};