import { configure, addDecorator } from '@storybook/react'
import { withViewport } from '@storybook/addon-viewport'

// 默认设置为iphone5
// 具体配置文档 https://github.com/storybooks/storybook/tree/master/addons/viewport
addDecorator(withViewport('iphone6'))

const req = require.context('../packages/', true, /stories\/.+.js$/)

const loadStories = () => {
  require('../src/stories') //（加载根目录下的storybook）
  req.keys().forEach(module => req(module)) //（加载各个组件目录下的storybook）
}

configure(loadStories, module)
