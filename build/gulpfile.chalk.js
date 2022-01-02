const { series, src, dest } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

function compileThemeStyle() {
  return src('../resources/theme-chalk/src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('../resources/theme-chalk/lib'));
}

function copyFont() {
  return src('../resources/theme-chalk/src/fonts/**')
    .pipe(dest('../resources/theme-chalk/lib/fonts'));
}

exports.build = series(compileThemeStyle, copyFont);
