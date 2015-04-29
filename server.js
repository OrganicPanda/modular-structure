var express = require('express')
  , conf = require('../conf')
  , argv = require('minimist')(process.argv.slice(2))
  , app = express()
  , server
  , port = argv.port || 3000;

app.use('/' + conf.locations.dest
  , express.static(__dirname + '/../dist/'));

app.use('/' + conf.locations.vendor
  , express.static(__dirname + '/../vendor/'));

app.use('/*'
  , express.static(__dirname + '/../public'));

server = app.listen(3000, function() {
  console.log('server start on port ' + port);
});

module.exports = server;
