export function createQueue() {
  const queue = [];
  function getSize() {
    return queue.length;
  }
  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
  }
  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }
  function enqueue(data) {
    return queue.push(data);
  }
  function dequeue() {
    return queue.shift();
  }
  return {
    getBack,
    getFront,
    getSize,
    enqueue,
    dequeue,
  };
}
