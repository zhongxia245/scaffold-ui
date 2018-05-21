# 前言

> 原文地址 https://juejin.im/post/5a8a905c6fb9a06350151e4c

React + Storybook + Lerna 构建自己的前端 UI 组件库

### React

自 2014 年以来，react 不断地发展壮大，时至今日已经发展成为最受欢迎的前端框架，如果你还不太了解 react，请看[这里](https://github.com/facebook/react)。

### Storybook

storybook 是一套 UI 组件的开发环境，它允许你浏览组件库，查看每个组件的不同状态，以及交互式开发和测试组件。
storybook 允许你独立于你的 app 来开发你的 UI 组件，你可以先不关心应用层级的组件依赖，快速的着手组件的开发，而后再将之应用于自己的 app 中。尤其在大型应用，跨团队合作过程中，良好的组件抽象，使用 storybook 封装管理，可以极大的提高的组件的重用性，可测试性，和开发速度。你可以点击这里查看[storybook](https://storybook.js.org/examples/)是如何工作的。

### Lerna

lerna 帮你管理你的包集合，当你自己的 library 变多时，你的版本控制，跟踪管理，测试就会变得越发复杂，[lerna](https://lernajs.io/)正是帮你解决这个问题，它使用 npm 和 git 来帮助你优化你的多包管理流程。本文假设你已经熟悉发布自己的 npm 包，如果不熟悉，可以先查看相关文章，例如《[怎么开发一个 npm 包](https://juejin.im/entry/58a3caa686b599007391dfbe)》；接下来我们就一步一步来搭建自己的 UI 组件库。

> 作者：IOException  
> 链接：https://juejin.im/post/5a8a905c6fb9a06350151e4c  
> 来源：掘金  
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 一、创建组件库项目中遇到的问题处理

按照文章的套路来的话，碰到一下几个问题，记录一下。

### 1.1 Babel 相关

ES7 的一些语法，转换报错。

```
SyntaxError: xxx/packages/demo/src/demo.js: Unexpected token (11:12)
   9 |   }
  10 |
> 11 |   handleAdd = () => {
     |             ^
  12 |     this.setState({ count: ++this.state.count })
  13 |   }
  14 |
```

解决方案:

增加一个 babel-preset-stage-2 的转码规则 (_ES7 不同阶段语法提案的转码规则（共有 4 个阶段）_)

```
{
  "presets": [["env", { "modules": false }], "react", "stage-2"]
}
```

> 了解下 stage 转码规则的各个阶段的不同点 https://babeljs.cn/docs/plugins/#stage-x-%E5%AE%9E%E9%AA%8C%E9%98%B6%E6%AE%B5-presets

> TC39 将提案分为以下几个阶段:  
> Stage 0 - 稻草人: 只是一个想法，可能是 babel 插件。
> Stage 1 - 提案: 初步尝试。  
> Stage 2 - 初稿: 完成初步规范。  
> Stage 3 - 候选: 完成规范和浏览器初步实现。  
> Stage 4 - 完成: 将被添加到下一年度发布。

### 1.2 Lerna 部署到 npm 相关

必要条件: 创建一个 npm 帐号，并且验证过邮箱，如果是私有库，则还需要开通私有库的上传权限.

```bash
# 安装组件的依赖
lerna bootstrap

# 组件ES6代码转车ES5的代码
lerna run build

# 部署到组件库 【这边的报错，看不到具体错误，可以尝试使用npm publish 看看是否可以正常部署】
lerna publish

# 常见的错误，
1. npm包名称重复了  => 换个名字或者上传到自己创建的 Organizations中
2. npm帐号有问题 => 比如邮箱未验证，去验证下就好了
3. package.json 配置了这个包是私有的，帐号又没有私有的权限 => 开通私有npm包权限，或者去掉私有的属性
```

### 1.3 ES6 转成 ES5

> 说到打包工具，webpack 和 rollup 不得不提，在构建复杂的前端应用时，他们帮助我们拆分代码，管理静态资源，是前端工程化必备的工具，两者相似又有不同，在什么场景下如何使用,  
> **一言以蔽之，对于应用开发，使用 webpack；对于类库开发，使用 Rollup。**

rollup.config.js

```
babel({
  exclude: 'node_modules/**',
  plugins: ['external-helpers'], #(你需要安装babel插件来解析ES6)
})
```

external-helpers 引入的话，就一直报错，如果去掉的话，则就正常构建，并且上传到 npm 上也没有问题，具体解决方案，暂时还没有找到。

因此先去掉即可。

### 1.4 上传到 npm 仓库

默认的上传组件库，是上传到 npm 仓库中，而不是上传到 npm 帐号创建的 Organizations 中 。

Organizations 有一个好处就是可以让你的 npm 包分开管理，比如在 @lcgc-ui 这个组织下的所有包，其实就是一个一个组件。放在这里不用担心包的名称是否重了。

**把 npm 包上传到 组织中**

```bash
# 1. 初始化的package.json 指定组织名称
npm init scope=lcgc-ui -y

# 2. 在package.json 添加 publishConfig

"publishConfig": {
    "access": "public"
}
```
