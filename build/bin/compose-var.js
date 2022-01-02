const fs = require('fs');
const path = require('path');
const fileSave = require('file-save');

function composeVars() {
  const customVarsPath = path.resolve(__dirname, '../../custom/custom-variables.scss');
  const chalkVarsPath = path.resolve(__dirname, '../../resources/element-variables.css');
  const targetVarPath = path.resolve(__dirname, '../../resources/theme-chalk/src/common/var.scss');

  const oldVarFileContent = fs.readFileSync(chalkVarsPath, { encoding: 'utf-8' });

  fileSave(targetVarPath)
    .write(oldVarFileContent)
    .write(fs.readFileSync(customVarsPath, 'utf-8')).end();
}

composeVars();