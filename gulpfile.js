var gulp = require('gulp');
var sass = require('gulp-sass');

/**
 * Serve Web
 */

gulp.task('serve' serve({
  root: ['.'],
  port: process.env.PORT || 8000
}));

/**
 * Sass
 */

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

/**
 * Watch
 */

gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['serve', 'sass', 'watch']);

