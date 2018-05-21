import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'

const external = ['react', 'prop-types']
const outputTypes = [
  { file: './dist/es/index.js', format: 'es' } //(ES Modules)
]

const tasks = outputTypes.map(output => {
  return {
    input: './src/index.js', //(组件主入口，相对路径)
    external,
    output,
    name: 'my-library',
    plugins: [
      resolve(),
      filesize(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
})

export default tasks
