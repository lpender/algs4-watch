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

  function execute(cmd, filepath) {
    var dirname = path.dirname(filepath);
    var filename = path.basename(filepath);
    var instructions = ['cd ' + dirname, cmd + ' ' + filename].join('&&');
    shell.exec(instructions);
  }

  grunt.event.on('watch', function(action, filepath) {
    if(isClass(filepath)) {
      // console.log('Checking for bugs in ' + filepath);
      // shell.exec('findbugs-algs4 ' + filepath);
      console.log('Executing compiled class');
      execute('java-algs4', filepath.split('.')[0]);
    } else {
      // console.log('Checking style for ' + filepath);
      // shell.exec('checkstyle-algs4 ' + filepath);
      console.log('Compiling ' + filepath);
      execute('javac-algs4', filepath);
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
