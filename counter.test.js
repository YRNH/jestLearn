import Counter from './counter';
/**
 * 在测试之前对一些基础内容进行初始化
 * jest 推荐在钩子里初始化实例
 * 
 */

 /**
  * beforeAll初始化，作准备。
  * beforeAll会在所有测试用例执行之前执行
  */
 /**
  * afterAll所以测试用例执行之后，调用afterAll
  */
 /**
  * 每一个测试用例执行之前都会走beforeEach
  */

  /**
   * describe 分组的方法
   */

   /**
    * 用test.only(()=>{})屏蔽其他的测试用例
    */

    //describe回调里非test和钩子的内容里面，会在钩子函数和test之前先执行。
let counter = null;
beforeAll(()=> {
  
})
afterAll(()=> {
  console.log('执行完所有的测试用例');
})
beforeEach(()=> {
  console.log('每一个测试用例执行都会执行')
  counter = new Counter();
})
afterEach(()=> {
  console.log('每一个测试用例都执行完后执行')
})
describe('增加的方法', ()=>{
  test.only('测试counter add 方法', ()=>{
    counter.addOne();
    expect(counter.number).toBe(1);
  });  
})
describe('减少的方法', ()=>{
  test('测试counter minus 方法', ()=>{
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });  
})

