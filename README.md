# @meils/element-theme

为团队自定义 Element UI 组件库主题样式的方案；具体可查阅：[为团队定制 Element UI 主题样式的方案](https://mt7p8qo889.feishu.cn/wiki/wikcnJ7dAtKtgK2stqALFB6OH1b)

## 安装

```sh
npm i @meils/element-theme --registry=http://localhost:4873
npm i element-ui -S
```

## 使用

```sh
# main.js
import ElementUI from 'element-ui';
import "@meils/element-theme/lib/theme-chalk/index.css";

Vue.use(ElementUI);
```
## 项目结构

```sh
.
├── README.md
├── build                       # 构建脚本
├── custom                      # 自定义样式
└──── lib                       # 自定义样式构建后输出目录
└──── theme                     # 组件级别的样式定制化
└──── custom-variables.scss     # 完成对变量的自定义覆盖
├── build                       # 最终样式输出目录
├── resource                    # 原始主题样式资源
└──── theme-chalk               # Element的默认主题样式（不需要改）
└──── custom-variables.css     # Element的默认主题变量（不需要改）
├── node_modules
├── npm-shrinkwrap.json
├── package.json
```

## 如何运行

### 1. 拉取最新的 element-chalk 样式

```sh
# 更新安装包
npm run update

# 更新Element默认主题样式
npm run pull:variables
npm run pull:theme-chalk
```

### 2. custom/theme 下写入自己的覆盖样式（支持组件样式的深度定制、整体主题风格的定制）

```sh
# eg: custom-variables.scss
# 变量后不要包含 !default

$--color-primary: pink; 
```

```sh
# eg: checkbox.scss

@import "../../resources/theme-chalk/src/common/var.scss";
@import "../custom-variables.scss";

.el-checkbox {
  color: $--color-primary;
}
```

### 3. 构建自定义主题样式

```sh
npm run build:theme-custom
```

### 4. 构建chalk主题样式

```sh
npm run build:theme-chalk
```

### 4. 组合默认样式和自定义样式，并完成输出

```sh
npm run compose
```

## 如何调试

使用 npm link 的方式在一个单独的 element 项目里调试；