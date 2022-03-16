import { mount } from '@vue/test-utils'
import index from './index.vue'

describe('the HelloWorld component', () => {
  const wrapper = mount(index)

  test('have a cat', () => {
    expect(wrapper.text()).toContain('Cat')
  })
})
