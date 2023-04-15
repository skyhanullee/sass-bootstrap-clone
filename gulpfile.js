const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css')); // output into css file in directory
}

function watchTask() {
  watch(['index.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
