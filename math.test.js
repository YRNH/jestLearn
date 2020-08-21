import { add, minus, multi } from './main'
console.log(add);
test('add', ()=>{
  expect(add(3,1)).toBe(4);
})
test('minus', ()=>{
  expect(minus(3,1)).toBe(2);
})
test('multi', ()=>{
  expect(multi(3,1)).toBe(3);
})

// 单元测试（一个模块），集成测试（多个模块）