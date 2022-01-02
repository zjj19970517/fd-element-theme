const { series, src, dest } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
// const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');

function compileThemeStyle() {
  return src('../custom/theme/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('../custom/lib'));
}

exports.build = series(compileThemeStyle);
