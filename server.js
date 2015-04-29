var express = require('express')
  , utils = require('./lib/utils')
  , conf = require('./conf')
  , app = express()
  , port = utils.arg('port') || 3000;

app.use('/' + conf.locations.dest
  , express.static(__dirname + '/dist'));

app.use('/' + conf.locations.vendor
  , express.static(__dirname + '/vendor'));

app.use('/*'
  , express.static(__dirname + '/public'));

module.exports = function() {
  return app.listen(port, function() {
    console.log('server start on port ' + port);
  });
};
