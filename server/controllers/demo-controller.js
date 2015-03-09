var Demo = require('../demo.js'); 

module.exports.create = function(req, res) {
  var demo = new Demo(req.body);
  demo.save(function(err, result) {
  	res.json(result);
  });
}