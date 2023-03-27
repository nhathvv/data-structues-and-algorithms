// 12-04: Setup common methods for linked list
// - getHead()
// - getTail()
// - getSize()
// - findIndexByData()
// - findWithCallback()
function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }

  function printList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  function getHead() {
    if (head == null) return;
    return head;
  }
  function getTail() {
    if (head == null) return;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }
  function getSize() {
    if (head == null) return -1;
    let count = 0;
    let current = head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }
  function findIndexByData(data) {
    if (head == null) return -1;
    let index = 0;
    let current = head;
    while (current != null) {
      if (current.data === data) return index;
      index++;
      current = current.next;
    }
    return -1;
  }
  function findWithCallback(callback) {
    if (head == null) return undefined;
    let current = head;
    while (current != null) {
      if (callback(current.data)) return current.data;
      current = current.next;
    }
    return undefined;
  }
  return {
    getHead,
    insertHead,
    printList,
    getTail,
    getSize,
    findIndexByData,
    findWithCallback,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.insertHead(4);

numberLinkedList.printList();
console.log(numberLinkedList.getHead());
// console.log(numberLinkedList.getTail());
// console.log(numberLinkedList.getSize());
// console.log(numberLinkedList.findIndexByData(5));
// console.log(numberLinkedList.findIndexByData(6));
console.log(numberLinkedList.findWithCallback((x) => x > 7));
