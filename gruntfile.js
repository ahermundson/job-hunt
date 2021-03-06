// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    concat: {
      dist: {
        src: [
          'server/public/scripts/controllers/*.js'
        ],
        dest: 'server/public/dist/js/build/controllers.js',
      }
    },

    watch: {

      // for stylesheets, watch css and less files
      // only run less and cssmin
      stylesheets: {
        files: ['src//*.css', 'src//*.less'],
        tasks: ['less', 'cssmin'] },

        // for scripts, run jshint and uglify
        scripts: {
          files: 'server/public/scripts/**/*.js', tasks: ['jshint', 'concat']
        }
    },


  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ["jshint", "concat"]);
};
