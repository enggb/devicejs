module.exports = function (grunt) {
	"use strict";

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: pkg,
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: '.',
					keepalive: false,
					'middleware': function (connect, options) {
						return [
							require('connect-livereload')(),
							connect.static(options.base),
							connect.directory(options.base)
						];
					}
				}
			}
		},
		clean: {
			dist: "dist"
		},
		uglify: {
			all: {
				files: {
					"dist/devicejs.min.js": ["src/**/*.js"]
				},
				options: {
					mangle: false,
					preserveComments: false,
					sourceMap: "dist/devicejs.min.map",
					sourceMappingURL: "devicejs.min.map",
					report: "min",
					beautify: {
						ascii_only: true
					},
					banner: "",
					compress: {
						hoist_funs: false,
						loops: false,
						unused: false,
						drop_console: true
					}
				}
			}
		},
		jshint: {
			all: {
				src: ['src/**/*.js', 'test/**/*.js', 'examples/**/*.js', 'Gruntfile.js'],
				options: {
					jshintrc: true
				}
			}
		},
		watch: {
			js: {
				files: ['src/**/*.js', 'test/**/*.js', 'examples/**/*.js', 'Gruntfile.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			}
		},
		concurrent: {
			target: {
				tasks: ['watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});
	/**
	 * load all grunt tasks
	 */
	require('load-grunt-tasks')(grunt);

	/**
	 * register default task
	 */
	grunt.registerTask('default', ['connect', 'concurrent', 'jshint']);
	/**
	 * register build task
	 */
	grunt.registerTask('build', ['clean', 'uglify']);

};
