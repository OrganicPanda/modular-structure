var conf = require('../conf')
  , path = require('path')
  , fs = require('fs')
  , argv = require('minimist')(process.argv.slice(2));

var cssMatch = /.(s)?css$/;
var htmlMatch = /.html$/;
var jsMatch = /.js$/;

/**
 *
 */
function arg(aArg) {
  return argv[aArg];
}

/**
 *
 */
function location(locate) {
  return path.join(process.cwd(), locate);
}

/**
 *
 */
function isDir(pathCheck) {
  return fs.existsSync(pathCheck) && fs.statSync(pathCheck).isDirectory();
}

/**
 *
 */
function isFile(pathCheck) {
  return fs.existsSync(pathCheck) && fs.statSync(pathCheck).isFile();
}

/**
 *
 */
function isHidden(name) {
  return name[0] === '.';
}

/**
 *
 */
function filesByType(files, type, name) {
  name = new RegExp('^' + name + '\\..*');

  return files
    .filter(function(file) {
      return file.match(type);
    })
    .sort(function(a, b) {
      if (a.match(name)) return -1;
      if (b.match(name)) return 1;

      return 0;
    });
}

/**
 *
 */
function forEachModule(cb, wd) {
  wd = wd || conf.locations.src;

  var cwd = process.cwd();
  var appsCwd = path.join(cwd, wd);
  var folders = fs.readdirSync(appsCwd);
  var data = {};

  folders.forEach(function(folder) {
    var folderCwd = path.join(appsCwd, folder);

    if (isHidden(folder) || isFile(folderCwd)) return;

    var modules = fs.readdirSync(folderCwd);
    data.folder = folder;

    modules.forEach(function(module) {
      var moduleCwd = path.join(folderCwd, module);

      if (isHidden(module) || isFile(moduleCwd)) return;

      data.name = module;
      data.nameSpace = folder + '.' + module;
      data.src = moduleCwd;
      data.dest = conf.locations.dest + '/' + folder + '/' + module;

      data.files = {};
      data.files.all = fs.readdirSync(moduleCwd);
      data.files.css = filesByType(data.files.all, cssMatch, data.name);
      data.files.html = filesByType(data.files.all, htmlMatch, data.name);
      data.files.js = filesByType(data.files.all, jsMatch, data.name);

      data.hasCSS = !!data.files.css.length;
      data.hasHTML = !!data.files.html.length;
      data.hasJS = !!data.files.js.length;

      cb(data);
    });
  });
}

module.exports = {
  arg: arg,
  location: location,
  isDir: isDir,
  isFile: isFile,
  isHidden: isHidden,
  forEachModule: forEachModule
};
