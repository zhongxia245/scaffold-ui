# 快速开始

## 一、创建组件

1.  在 packages 目录下创建一个组件的文件夹

```bash
# 目录结构
pageages
  - demo
    - src
      - demo.js
      - index.js
```

2.  组件代码

```javascript
// demo.js
import React, { Component } from 'react'

class Demo extends Component {
  render() {
    return <div>This is a Demo</div>
  }
}

export default Demo


// index.js
import Demo from './demo.js'
export default Demo
```

## 二、添加 package.json

```bash
npm init --score=lcgc-ui -y
```

```javascript
//类似这样
{
  "name": "@lcgc-ui/demo",
  "version": "0.0.25-0",
  "description": "This is a Demo component",
  "main": "dist/es/index.js",
  "scripts": {
    "build": "rollup -c ../../rollup.config.js"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "publishConfig": {
    "access": "public"
  }
}
```

> publishConfig 中的 access = public 主要是为了让组件能够上传到 npm 的 Organizations 中

## 三、添加 storybook 的组件预览和文档

在 packages/demo 目录下，创建 stories 文件夹

```javascript
// packages/demo/stories/index.js

import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info' // 在组件案例中，可以查看源码
import { withViewport } from '@storybook/addon-viewport'
import Demo from '../demo'
addDecorator(withViewport('iphone5'))

storiesOf('Demo', module).add(
  'simple',
  withInfo(`
  import Demo from '@lcgc-ui/demo'
`)(() => <Demo />)
)
```

> withInfo 用来编写 组件的说明文档

```bash
# 启动storybook 查看效果
yarn run storybook
```

## 四、打包部署到 npm 库

```bash
# 1.  安装组件的依赖
lerna bootstrap

# 2.  构建组件代码 ES6 => ES5
lerna run build

# 3.  部署到 npm 库
lerna publish
```
