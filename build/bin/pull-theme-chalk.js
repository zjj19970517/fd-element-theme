const path = require('path');
const shelljs = require('shelljs');

function pullThemeChalk() {
  shelljs.rm('-rf', path.resolve(__dirname, '../../resources/theme-chalk'));

  const sourcePath = path.resolve(__dirname, '../../node_modules/element-theme-chalk');
  const destPath = path.resolve(__dirname, '../../resources/theme-chalk');

  shelljs.cp('-R', sourcePath, destPath);
}

pullThemeChalk();
