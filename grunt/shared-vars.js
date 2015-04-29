var utils = require('../lib/utils')
  , conf = require('../conf');

function parseVars(vars, content) {
  content
    .split(/\n/g)
    .forEach(function(item) {
      item = item.match(/\$(.*):\s*(.*); \/\/ #JS#/);
      if (!item || !item[1] || !item[2]) return;

      vars[item[1]] = parseVal(item[2]);
    });
}

function parseVal(value) {
  return ~value.indexOf('#') ? value : parseInt(value, 10);
}


module.exports = function(grunt) {
  return function() {
    var vars = {};
    var dest = utils.location(conf.locations.sharedVars.dest);

    conf.locations.sharedVars.src.forEach(function(location) {
      parseVars(vars, grunt.file.read(utils.location(location)));
    });

    grunt.file.write(dest,
      grunt.file.read(dest)
        .replace(/\{.*(\n.*)*.*\}/, JSON.stringify(vars, null, '    '))
        .replace(/"/g, '\'')
        .replace('}', '  }'));
  };
};
