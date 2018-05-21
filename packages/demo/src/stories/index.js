import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info' // 在组件案例中，可以查看源码
import { withViewport } from '@storybook/addon-viewport'
import Demo from '../demo'
addDecorator(withViewport('iphone5'))

storiesOf('Demo', module).add('simple', withInfo(`
  import Demo from '@lcgc-ui/demo'
`)(() => <Demo />))
