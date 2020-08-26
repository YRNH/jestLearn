import { shallowMount } from '@vue/test-utils';
import UndoList from '../../components/UndoList';
import { finTestWarpper } from '../../../../utils/testUtils';
describe('UndoList', ()=>{
  it('UndoList 参数为空， count值应该为0，且列表无内容', ()=>{
    //渲染header
    const wrapper = shallowMount(UndoList);
    const input = finTestWarpper(wrapper, 'input');//wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });


})