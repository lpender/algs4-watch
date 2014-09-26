// type `grunt` to watch files
var shell = require('shelljs');
var path = require('path');

module.exports = function(grunt) {

  function isClass(filePath) {
    return filePath.indexOf('.class') > -1
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['**/*.java', '**/*.class']
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    if(isClass(filepath)) {
      // console.log('Checking for bugs in ' + filepath);
      // shell.exec('findbugs-algs4 ' + filepath);
      console.log('Executing compiled class');
      var dirname = path.dirname(filepath);
      var filename = path.basename(filepath).split('.')[0];
      var cmd = ['cd ' + dirname, 'java ' + filename].join('&&');
      shell.exec(cmd);
    } else {
      console.log('Checking style for ' + filepath);
      shell.exec('checkstyle-algs4 ' + filepath);
      console.log('Compiling ' + filepath);
      shell.exec('javac-algs4 ' + filepath);
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
