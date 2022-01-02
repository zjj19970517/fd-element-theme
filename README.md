# @meils/element-theme

自定义 Element UI 组件库主题样式。

## 安装

```sh
# npm 还未发布
npm i @meils/element-theme
```

## 使用

### 全量引入


### 按需引入


## 项目结构

```sh
.
├── README.md
├── customs                     # 自定义样式
└──── theme                     # 组件级别的样式定制化
└──── custom-variables.scss     # 完成对变量的自定义覆盖
├── element-variables.css       # Element的默认主题变量（不需要改）
├── gulpfile.js                 # 构建
├── lib                         # 最终输出目录
├── node_modules
├── npm-shrinkwrap.json
├── package.json
└── theme-chalk                 # Element的默认主题样式（不需要改）
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

### 2. customs/theme 下写入自己的覆盖样式（支持组件样式的深度定制、整体主题风格的定制）

```css
// eg: checkbox.scss

@import "../../element-variables.css";
@import "../custom-variables.scss";

.el-checkbox {
  color: $--color-primary;
}
```

### 3. 构建自定义主题样式

```sh
npm run build:theme-custom
```

### 4. 组合默认样式和自定义样式，并完成输出

```sh
npm run build:theme-chalk
```