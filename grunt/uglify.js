var utils = require('../lib/utils');

module.exports = (function() {
  var config = {
    options: {
      sourceMap: true,
      compress: {
        warnings: false
      }
    }
  };

  utils.forEachModule(function(module) {
    if (!module.hasJS) return;

    var dest = module.dest + '/' + module.name + '.min.js';
    var src = [
      module.dest + '/' + module.name + '.js',
      module.dest + '/' + module.name + '-tpl.js'
    ];

    config[module.nameSpace] = {};
    config[module.nameSpace].files = {};
    config[module.nameSpace].files[dest] = src;
  });

  return config;
})();
