module.exports = function(grunt) {
  grunt.initConfig({
    uglify:{
      files:{
        src: 'build/**/*.js',
        dest: 'composite.all.js'
      }
    },
    watch:{
      scripts:{
        files:'build/**/*.js',
        tasks:['uglify']
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);
};
