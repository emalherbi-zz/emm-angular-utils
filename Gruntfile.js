module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    properties: grunt.file.readJSON('properties.json'),
    banner: '/*!\n' +
      ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n',
    /* clean directories */
    clean: ['<%= properties.dist %>'],
    /* concat files */
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      basic_and_extras: {
        files: {
          '<%= properties.dist %>/angular-filter-pt-br.js': ['<%= properties.src %>/angular-filter-pt-br.js'],
          '<%= properties.dist %>/angular-locale-pt-br.js': ['<%= properties.src %>/angular-locale-pt-br.js']
        },
      },
    },
    /* js file minification */
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        files: {
          '<%= properties.dist %>/angular-filter-pt-br.min.js': ['<%= properties.dist %>/angular-filter-pt-br.js'],
          '<%= properties.dist %>/angular-locale-pt-br.min.js': ['<%= properties.dist %>/angular-locale-pt-br.js']
        }
      }
    }
  });
  // Loading dependencies
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) {
      grunt.loadNpmTasks(key);
    }
  }
  // tasks
  grunt.registerTask('build', [
    'clean',
    'concat',
    'uglify'
  ]);
  grunt.registerTask('default', [
    'build'
  ]);
};