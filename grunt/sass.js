var utils = require('../lib/utils');

module.exports = (function() {
  var config = {
    options: {
      sourcemap: true,
      noCache: true
    }
  };

  utils.forEachModule(function(module) {
    if (!module.hasCSS) return;

    var dest = module.dest + '/' + module.name + '.css';
    var src = module.files.css.map(function(file) {
      return module.src + '/' + file;
    });

    config[module.nameSpace] = {};
    config[module.nameSpace].files = {};
    config[module.nameSpace].files[dest] = src;
  });

  return config;
})();
