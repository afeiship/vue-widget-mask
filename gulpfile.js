(function () {

  var gulp = require('gulp');
  var del = require('del');
  var $ = require('gulp-load-plugins')();
  gulp.task('clean', function () {
    return del('dist');
  });


  gulp.task('default',['clean'])

}());
