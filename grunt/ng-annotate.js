var utils = require('../lib/utils');

module.exports = (function() {
  var config = {
    options: {
      singleQuotes: true
    }
  };

  utils.forEachModule(function(module) {
    if (!module.hasJS) return;

    var dest = module.dest + '/' + module.name + '.js';
    var src = [
      module.src + '/' + module.name + '.js',
      module.src + '/**/*.js'
    ];

    config[module.nameSpace] = {};
    config[module.nameSpace].files = {};
    config[module.nameSpace].files[dest] = src;
  });

  return config;
})();
