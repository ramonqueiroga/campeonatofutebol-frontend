'use strict';

module.exports = {
	lint: [
		'./gulpfile.js',
		'./test/**/*.js',
		'./client/angular/**/*.js'
	],
	views: {
		src: './client/views/*.jade',
    watch: './client/views/**/*.jade',
		dest: './public/'
	},
	templates: {
		src: './client/angular/**/*.template.jade',
		dest: './public/templates/'
	},
	styles: {
		src: './client/styles/*.scss',
    watch: './client/styles/**/*.scss',
		dest: './public/styles/'
	},
	scripts: {
		src: [
			'./client/angular/**/*.js',
			'!./client/angular/**/*.spec.js'
		],
		dest: './public/scripts/'
	},
	sprites: {
		src: './client/sprites/*.png',
		dest: './public/imgs/sprites/'
	},
	browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: './public'
    },
    notify: false,
    middleware: [ require('connect-history-api-fallback')() ],
    reloadDelay: 100,
    open: require('yargs').argv.open
  }
};
