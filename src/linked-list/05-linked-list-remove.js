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
  function removeHead() {
    if (head == null) return head;
    head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) return head;
    if (head.next == null) {
      head = head.next;
      return head;
    }

    let seconLast = head;
    while (seconLast.next.next != null) {
      seconLast = seconLast.next;
    }
    seconLast.next = null;
    return head;
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
  function removeBeforePosition(position) {
    if (position <= 0) return removeHead();
    if (position >= getSize()) return removeTail();

    let pre = head;
    let curr = head;
    let i = 0;
    while (i < position && curr != null) {
      pre = curr;
      curr = curr.next;
      i++;
    }
    pre.next = curr.next;
    return head;
  }
  return {
    insertHead,
    printList,
    removeHead,
    removeTail,
    getSize,
    removeBeforePosition,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.removeBeforePosition(2);
numberLinkedList.printList();
