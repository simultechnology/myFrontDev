module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.initConfig({
    browserify: {
      dist: {
        src : './index.js',
        dest: './bundle.js'
      }
    }
  });
  grunt.registerTask('default', 'browserify');
};