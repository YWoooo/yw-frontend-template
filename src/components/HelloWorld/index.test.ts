import { mount } from '@vue/test-utils'
import index from './index.vue'

describe('the HelloWorld component', () => {
  const wrapper = mount(index, {
    props: {
      msg: 'Hello Vue 3 + TypeScript + Vite'
    }
  })
  const [countBtn] = wrapper.findAll('button')

  test('have a count btn', () => {
    expect(countBtn.text()).toBe('count is: 0')
  })
})
