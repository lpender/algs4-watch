// type `grunt` to watch files
var shell = require('shelljs');

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
      console.log('Checking for bugs in ' + filepath);
      shell.exec('findbugs-algs4 ' + filepath);
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
