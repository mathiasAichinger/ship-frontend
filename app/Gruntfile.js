module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      /* concat all 3rd party js files */
      vendors_js: {
          src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/angular/angular.min.js', 'bower_components/angular-route/angular-route.min.js', 'bower_components/angular-ui-router/release/angular-ui-router.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'share/pnotify.custom.min.js'],
          dest: '../dist/js/vendors.js'
      },
      /* concat all 3rd party css files */
      vendors_css: {
          src: ['bower_components/**/*.min.css', 'share/**/*.min.css'],
          dest: '../dist/css/vendors.css'
      }
    },
    copy: {
      /* copy html views */
      views: {
        cwd: 'src/components',
        src: '**/*.html',
        dest: '../dist/src/components',
        expand: true
      },
      /* copy bootstrap font */
      bootstrap_fonts: {
        cwd: 'bower_components/bootstrap/dist/fonts',
        src: '**/*',
        dest: '../dist/fonts',
        expand: true
      },
      d3: {
        cwd: 'bower_components/d3',
        src: 'd3.min.js',
        dest: '../dist/js',
        expand: true
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    browserify: {
      dist: {
        src: 'src/main.js',
        dest: '../dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
          src: '../dist/js/<%= pkg.name %>.js',
          dest: '../dist/js/<%= pkg.name %>.js'
      }
    },
    cssmin: {
      dist: {
        src: ['assets/styles/**/*.css', 'src/components/**/*.css'],
        dest: '../dist/css/<%= pkg.name %>.css'
      }
    },
    processhtml: {
      dist: {
        src: 'index.html',
        dest: '../dist/index.html'
      }
    },
    watch: {
      files: ['**/*'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build', ['concat', 'copy', 'browserify', 'uglify', 'cssmin', 'processhtml']);
};
