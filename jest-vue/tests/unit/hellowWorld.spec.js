import { shallowMount } from '@vue/test-utils'
//单元测试，只渲染子组件。和他不同的是mount，把当前组件以及对应的子组件全部渲染。mount的性能相应的降低。
import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})



// const root = document.createElement('div');
// root.className = 'root';
// document.body.appendChild(root);
// new Vue({
//   render: h => h(HelloWorld, {
//     props:{
//       msg: 'LM'
//     }
//   })    
// }).$mount('.root');
// console.log(document.body.innerHTML)
// console.log(document.querySelector('.hello'))
// expect(document.querySelector('.hello').length).toBe(1);
