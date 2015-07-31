module.exports = function(grunt) {
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	require('load-grunt-tasks')(grunt);

	var config = grunt.file.readYAML("Gruntconfig.yml");

	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir + "style.scss",
				dest: config.cssDir + "style.css"
			}
		},
		concat: {
			dist: {
				src: config.jsSrcDir + "*.js",
				dest: config.jsConcatDir + "app.js"
			}
		},
		jshint: {
			options: {
				"eqeqeq": true
			},
			all: ['Gruntfile.js',
			'dist/js/*.js'
			]
		},
		imagemin: {                          // Task
    		static: {                          // Target
				options: {                       // Target options
					optimizationLevel: 4,
					svgoPlugins: [{ removeViewBox: false }]
				},
				files: {                         // Dictionary of files
					'dist/img/pizzeria4.jpg': 'dist/img/pizzeria.jpg' // 'destination': 'source'
				}
			}
		},
		responsive_images: {
			myTask: {
	    		options: {

		      		sizes: [{
		      			name: "small",
		      			width: 100
		      		},
		      		{
		      			name: "small_q",
		      			width: 100,
		      			quality: 60
		      		},
		      		{
		      			name: "med",
		      			width: 320
		    		},
		      		{
		      			name: "large",
		      			width: 640,
		      		},
		      		{
		      			name: "large_qq",
		      			width: 640,
		      			quality: 40
		      		}
		      		]
	      		},

	    		files: [{
	      		    expand: true,
	        		src: ['**.jpg'],
	        		cwd: 'views/images/',
	        		dest: 'views/distr/images/'
	    		}]
    		}
  		},
  		uncss: {
  			dist: {
    			files: {
     				'dist/css/print.css': 'index.html'
    			}
  			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
			},
	    htmlmin: {
	        options: {
	            cdata: true
	        },
	        dist: {
			    options: {
			        removeComments: true,
			        collapseWhitespace: true
		      	},
	            files: {
	                'dist/index.html': 'index.html'
	            }
	        }
	    },
	    uglify: {
    		my_target: {
      			files: {
        			'dist/js/perfmatters.min.js': ['js/perfmatters.js']
      			}
    		}
  		},
		watch: {
			sass: {
				files: config.scssDir + '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.registerTask("default", [
		"jshint",
		"sass",
		"concat",
		"responsive_images",
		"uglify",
		"uncss",
		'htmlmin',
		"cssmin",
		"imagemin"
		]);
};