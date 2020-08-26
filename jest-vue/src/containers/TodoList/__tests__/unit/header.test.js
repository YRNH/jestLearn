import { shallowMount } from '@vue/test-utils';
import Header from '../../components/Header';
import { finTestWarpper } from '../../../../utils/testUtils';
describe('Header', ()=>{
  it('组件渲染 包含input框', ()=>{
    //渲染header
    const wrapper = shallowMount(Header);
    const input = finTestWarpper(wrapper, 'input');//wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });

  it('Header 中 初始input为空', ()=>{
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  });

  it('Header input变化，数据应该跟着变化', ()=>{
    const wrapper = shallowMount(Header);
    const input = finTestWarpper(wrapper, 'input');//wrapper.find('[data-test="input"]');
    input.setValue('lm');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('lm');
  });
  it('Header input 输入回车，无内容没有反应', ()=>{
    const wrapper = shallowMount(Header);
    const input = finTestWarpper(wrapper, 'input');//wrapper.find('[data-test="input"]');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeFalsy();
  });

  it('Header input 输入回车，有内容,同时清空inputValue', ()=>{
    const wrapper = shallowMount(Header);
    const input = finTestWarpper(wrapper, 'input');//wrapper.find('[data-test="input"]');
    input.setValue('lm input value');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
  });

  it('Header 样式变化，作出提示', ()=>{
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  });


})