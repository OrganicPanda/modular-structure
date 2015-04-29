var utils = require('../lib/utils');

module.exports = (function() {
  var config = {};

  utils.forEachModule(function(module) {
    if (!module.files.all.length) return;

    config[module.nameSpace] = {};
    config[module.nameSpace].src = module.dest;
  });

  return config;
})();
