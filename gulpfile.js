const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('bootstrap-clone/**/*.scss')
    .pipe(sass())
    .pipe(dest('css')); // output into css file in directory
}

function watchTask() {
  watch(['bootstrap-clone/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
