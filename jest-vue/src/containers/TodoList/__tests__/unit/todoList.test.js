import { shallowMount } from '@vue/test-utils';
import TodoList from '../../TodoList';
import Header from '../../components/Header';
import { iterator } from 'core-js/fn/symbol';

describe('TodoList', ()=>{
  it('TodoItem 初始化，undoList为空', ()=>{
    //初始化，undo数组是空的。
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  })

  it('TodoItem 监听到add事件的时候，会增加一个内容', ()=>{
    //初始化，undo数组是空的。
    const wrapper = shallowMount(TodoList);
    const header = wrapper.find(Header);
    header.vm.$emit('add', 'lm');
    // wrapper.vm.addUndoItem('lm')
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual(['lm']);
  })
})