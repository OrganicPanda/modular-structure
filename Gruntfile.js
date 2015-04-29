module.exports = function(grunt) {
  var config = {};

  var defaultTasks = [
    'clean',
    'sharedVars',
    'html2js',
    'ngAnnotate',
    'uglify',
    'sass',
    'autoprefixer',
    'cssmin',
    'layout'
  ];

  var devTasks = [
    'default',
    'server',
    'watch'
  ];

  config.clean = require('./grunt/clean');
  config.html2js = require('./grunt/html2js');
  config.ngAnnotate = require('./grunt/ng-annotate');
  config.uglify = require('./grunt/uglify');
  config.sass = require('./grunt/sass');
  config.autoprefixer = require('./grunt/autoprefixer');
  config.cssmin = require('./grunt/cssmin');
  config.watch = require('./grunt/watch');

  grunt.initConfig(config);

  grunt.registerTask('default', defaultTasks);
  grunt.registerTask('start', devTasks);
  grunt.registerTask('server', require('./server.js'));
  grunt.registerTask('sharedVars', require('./grunt/shared-vars')(grunt));
  grunt.registerTask('layout', require('./grunt/layout')(grunt));

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
