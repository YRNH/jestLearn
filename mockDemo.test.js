import { runCallBack } from './mockDemo';
/**
 * jest mock函数。
 */

test('测试runCallBack函数', ()=> {
  const func = jest.fn();// mock 函数
  func.mockReturnValue('123');//自由的设置返回结果。
  runCallBack(func)
  expect(func).toBeCalled()
})