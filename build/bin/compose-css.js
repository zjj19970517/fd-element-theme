const fs = require("fs");
const fileSave = require("file-save");
const { resolve: pathResolve } = require("path");
const shelljs = require("shelljs");

function composeCss() {
  // clean lib dir
  shelljs.rm('-rf', pathResolve(__dirname, '../../lib'));
  shelljs.mkdir('-p', pathResolve(__dirname, '../../lib'))
  // copy theme-chalk dir
  const sourcePath = pathResolve(__dirname, '../../resources/theme-chalk/lib');
  const destPath = pathResolve(__dirname, '../../lib');
  shelljs.cp('-R', sourcePath, destPath);
  shelljs.mv('-f', pathResolve(__dirname, '../../lib/lib'), pathResolve(__dirname, '../../lib/theme-chalk'));

  const themeChalkPath = pathResolve(__dirname, '../../lib/theme-chalk');
  const themeCustomPath = pathResolve(__dirname, "../../custom/lib");

  // 判断样式目录是否存在
  let themeChalk = null;
  let themeCustom = null;

  try {
    themeChalk = fs.readdirSync(themeChalkPath)
  } catch (err) {
    console.error("[DEBUG]: 请先执行 npm run build:theme-chalk")
    process.exit(1)
  }

  try {
    themeCustom = fs.readdirSync(themeCustomPath)
  } catch (err) {
    console.error("[DEBUG]: 请先执行 npm run build:theme-custom")
    process.exit(1)
  }

  for (
    let i = 0, themeCustomLen = themeCustom.length;
    i < themeCustomLen;
    i++
  ) {
    if (themeChalk.includes(themeCustom[i])) {
      const oldFileContent = fs.readFileSync(
        pathResolve(themeChalkPath, themeCustom[i]),
        { encoding: "utf-8" }
      )
      fileSave(pathResolve(themeChalkPath, themeCustom[i]))
        .write(oldFileContent)
        .write(
          fs.readFileSync(pathResolve(themeCustomPath, themeCustom[i])),
          "utf-8"
        )
        .end()
    } else {
      shelljs.cp(pathResolve(themeCustomPath, themeCustom[i]), themeChalkPath)
    }
  }
}

composeCss()
