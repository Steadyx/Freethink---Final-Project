var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  wiredep = require('wiredep').stream,
  autoprefixer = require('gulp-autoprefixer'),
  inject = require('gulp-inject');


var src = {
  scss: './public/scss/*.scss',
  css: './public/css/',
  html: './public/templates/*.html'
};


gulp.task('serve', ['sass'], function() {

  browserSync.init({

    proxy: 'localhost:3000'

  })
  gulp.watch(src.scss, ['sass']);
  gulp.watch(src.html).on('change', reload);
});

gulp.task('templates', function() {
  return gulp.src(src.html)
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest(src.html))
    .on("end", reload);
});

gulp.task('sass', function() {
  return gulp.src(src.scss)
    .pipe(sass())
    .pipe(gulp.dest(src.css))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('prefix', function() {
    gulp.src('./public/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(src.css))
});


gulp.task('default', ['serve', 'prefix']);
