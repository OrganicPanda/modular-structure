var utils = require('../lib/utils');
var conf = require('../conf');

module.exports = (function() {
  var config = {
    options: {
      livereload: true
    }
  };

  /*
   * Module watches
   */

  utils.forEachModule(function(module) {
    config[module.nameSpace] = {};

    var files = config[module.nameSpace].files = [];
    var tasks = config[module.nameSpace].tasks = [];

    if (module.hasHTML || module.hasJS || module.hasSCSS) {
      tasks.push('clean:' + module.nameSpace);
    }

    if (module.hasHTML) {
      tasks.push('html2js:' + module.nameSpace);
      files.push(module.src + '/**/*.html');
    }

    if (module.hasJS) {
      tasks.push('ngAnnotate:' + module.nameSpace);
      tasks.push('uglify:' + module.nameSpace);
      files.push(module.src + '/**/*.js');
    }

    if (module.hasCSS) {
      tasks.push('sass:' + module.nameSpace);
      tasks.push('autoprefixer:' + module.nameSpace);
      tasks.push('cssmin:' + module.nameSpace);
      files.push(module.src + '/**/*.scss');
    }
  });

  /*
   * Special watches
   */

  // Updating vendors
  config.layout = {
    tasks: [ 'layout' ],
    files: [
      utils.location('conf/locations.js'),
      utils.location(conf.locations.layout.src)
    ]
  };

  // Shared SASS Variables
  config.sharedVars = {
    tasks: [ 'sharedVars' ],
    files: conf.locations.sharedVars.src.map(function(location) {
      return utils.location(location);
    })
  };

  // SASS Variables
  config.variables = {
    tasks: [ 'sass', 'autoprefixer', 'cssmin' ],
    files: conf.locations.sassVars.map(function(location) {
      return utils.location(location);
    })
  };

  // SASS Mixins
  config.mixins = {
    tasks: [ 'sass', 'autoprefixer', 'cssmin' ],
    files: conf.locations.sassMixins.map(function(location) {
      return utils.location(location);
    })
  };

  return config;
})();
