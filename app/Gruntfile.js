module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      my: {
          src: ['app.js', 'src/**/*.js'],
          dest: 'dist/js/<%= pkg.name %>.js'
      },
      vendors_js: {
          src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/angular/angular.min.js', 'bower_components/angular-route/angular-route.min.js', 'bower_components/angular-ui-router/release/angular-ui-router.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/d3/d3.min.js', 'share/pnotify.custom.min.js'],
          dest: 'dist/js/vendors.js'
      },
      vendors_css: {
          src: ['bower_components/**/*.min.css', 'share/pnotify.custom.min.css'],
          dest: 'dist/css/vendors.css'
      }
    },
    copy: {
      views: {
        cwd: 'views',
        src: '**/*',
        dest: 'dist/views',
        expand: true
      },
      directive_views: {
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/views',
        expand: true
      },
      bootstrap_fonts: {
        cwd: 'bower_components/bootstrap/dist/fonts',
        src: '**/*',
        dest: 'dist/fonts',
        expand: true
      }
    },
    uglify: {
      dist: {
        src: 'dist/js/<%= pkg.name %>.js',
        dest: 'dist/js/<%= pkg.name %>.js'
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
    cssmin: {
      dist: {
        src: 'assets/styles/**/*.css',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
    processhtml: {
      dist: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
    watch: {
      files: ['src/**/*'],
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

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('build', ['concat', 'copy', 'cssmin', 'processhtml']);
};
