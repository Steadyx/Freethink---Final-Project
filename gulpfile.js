var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  wiredep = require('wiredep').stream,
  inject = require('gulp-inject');

gulp.task('serve', ['sass'], function() {

  browserSync.init({

    proxy: 'localhost:3000'

  })
  gulp.watch("./public/scss/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./public/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css/"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
