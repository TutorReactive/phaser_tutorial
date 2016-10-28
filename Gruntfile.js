module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9002,
          keepalive: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);

};