const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const pipeline = require('readable-stream').pipeline;
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require("gulp-rename");

// build-css : concat + compile + minify
gulp.task('build-css', function(){
    return pipeline(
        gulp.src('src/sass/*.scss'),
        concat('main.scss'),
        sass().on('error', sass.logError),
        uglifycss(),
        rename('main.min.css'),
        gulp.dest('dist/css')
    );
})

// build-js : concat + minify
gulp.task('build-js', function(){
    return pipeline(
        gulp.src('src/js/*.js'),
        concat('main.js'),
        uglify(),
        rename('main.min.js'),
        gulp.dest('dist/js')
    );
})

// copy-html : copy html file
gulp.task('copy-html', function(){
    return pipeline(
        gulp.src('src/*.html'),
        gulp.dest('dist')
    );
})

// default
gulp.task('default', gulp.series('copy-html', 'build-js', 'build-css'));

// watch
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', gulp.series('build-js'));
    gulp.watch('src/sass/*.scss', gulp.series('build-css'));
    gulp.watch('src/*.html', gulp.series('copy-html'));
    gulp.watch('')
})
