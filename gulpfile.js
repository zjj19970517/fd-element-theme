const { series, src, dest } = require('gulp');


const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass')(require('sass'));

function compileThemeStyle() {
  return src('./customs/theme/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/theme-custom'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.build = series(compileThemeStyle);
