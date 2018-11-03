var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
 * Variables
 */
// Sass Source
var scssFiles = './scss/*.scss';

var scssE = './scss/e-flex.scss'

// CSS destination
var cssDest = './css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});


// Task 'sassprod style' - Run with command 'gulp sassprod'
gulp.task('sassprod-s', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod e-flex' - Run with command 'gulp sassprod'
gulp.task('sassprod-e', function() {
  return gulp.src(scssE)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('e-flex.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod-s', 'sassprod-e']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod-s', 'sassprod-e', 'watch']);