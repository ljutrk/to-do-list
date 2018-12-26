var gulp = require('gulp');

var less = require('gulp-less');
var plumber = require('gulp-plumber');

gulp.task('less', function () {
    gulp.src('src/less/style.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['less'], function () {
    gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);