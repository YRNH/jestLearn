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

// yarn test
// jest (babel-jest)
// babel-core
// 取 babelrc配置
// 在运行测试之前，结合babel，先把代码转化一次
// 运行转化后的代码
