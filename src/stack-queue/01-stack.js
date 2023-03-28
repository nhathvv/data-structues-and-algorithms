export function createStack() {
  const stack = [];
  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }
  function getSize() {
    return stack.length;
  }
  function isEmpty() {
    return stack.length === 0;
  }
  function push(data) {
    return stack.push(data);
  }
  function pop() {
    return stack.pop();
  }
  return {
    getSize,
    getTop,
    isEmpty,
    pop,
    push,
  };
}
