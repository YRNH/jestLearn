export const finTestWarpper = (wrapper, tag)=> {
  return wrapper.find(`[data-test=${tag}]`);
}