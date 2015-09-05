var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var minifyCss = require('gulp-minify-css');

/**
 * Serve Web
 */

gulp.task('serve', serve({
  root: ['.'],
  port: process.env.PORT || 8000
}));

/**
 * Sass
 */

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(minifyCss().on('error', gutil.log))
    .pipe(gulp.dest('./css'));
});

/**
 * Watch
 */

gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['serve', 'sass', 'watch']);

