// Load Gulp and your plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var nodemon      = require('gulp-nodemon');
var livereload   = require('gulp-livereload');
var open         = require("gulp-open");
var stylus       = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');

var paths = {
	styles: 'app/styl/**/*.styl',
	react:  'app/jsx/**/*'
};

//start development server
gulp.task('server', function () {
	nodemon({ script: 'dev_server.js', ext: '', ignore: ['main.js', './'] });
});

gulp.task('open-browser', function () {
	var options = {
		url: "http://localhost:3000",
		app: "Google Chrome Canary"
	};
	gulp.src("./dev_server.js")
	.pipe(open("", options));
});

gulp.task('stylus', function () {
    gulp.src('app/styl/main.styl')
    	.pipe(plumber())
        .pipe(stylus({
            use: autoprefixer({browsers: ['Firefox > 5%', 'Explorer 9', 'Chrome > 5%', 'Safari > 5%']}), 
            compress: false
        }))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(livereload());
});

gulp.task('browserify', function () {
    // react transform settings in package.json
    var b = browserify({
        debug: true,
    });
    b.add('./app/js/index.js');
    // b.plugin('minifyify', {map: '/assets/bundle.map.json', output: './assets/bundle.map.json'});
    plumber()
    .pipe(
        b.bundle()
    )
    .pipe(source('main.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(livereload());
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(paths.styles, ['stylus']);
    gulp.watch(paths.react, ['browserify']);
});

//default task
gulp.task('default', ['server','stylus','browserify','watch']);

gulp.task('open', ['server','open-browser','watch']);
gulp.task('produce', ['stylus','browserify']);