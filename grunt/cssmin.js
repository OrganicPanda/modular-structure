var utils = require('../lib/utils');

module.exports = (function() {
  var config = {};

  utils.forEachModule(function(module) {
    if (!module.hasCSS) return;

    var src = module.dest + '/' + module.name + '.css';
    var dest = module.dest + '/' + module.name + '.min.css';

    config[module.nameSpace] = {};
    config[module.nameSpace].files = {};
    config[module.nameSpace].files[dest] = src;
  });

  return config;
})();
