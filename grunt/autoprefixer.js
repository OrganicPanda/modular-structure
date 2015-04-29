var utils = require('../lib/utils');

module.exports = (function() {
  var config = {
    options: {
      browsers: [
        '> 1%',
        'last 2 versions'
      ],
      map: true
    }
  };

  utils.forEachModule(function(module) {
    if (!module.hasCSS) return;

    var src = module.dest + '/' + module.name + '.css';
    var dest = module.dest + '/' + module.name + '.css';

    config[module.nameSpace] = {};
    config[module.nameSpace].src = src;
    config[module.nameSpace].dest = dest;
  });

  return config;
})();
