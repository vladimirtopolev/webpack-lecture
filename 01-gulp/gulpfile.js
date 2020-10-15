const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');

gulp.task('clean', () => {
    return del(['dest'])
});

gulp.task('styles', () => {
    return gulp
        .src('src/styles/*')
        .pipe(sass())
        .pipe(gulp.dest('dest/css'))
});

gulp.task('scripts', () => {
    return gulp
        .src('src/js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest'));
});

gulp.task('watch', function () {
    gulp.watch('src/styles/*', gulp.series('styles'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('styles', 'scripts'));
