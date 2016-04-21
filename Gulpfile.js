/**
 * Created by findlay on 4/21/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('style', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['style']);
});