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
    return head;
  }
  function printList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return head;
    }
    let current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
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
  function insertBeforePosition(data, position) {
    if (position <= 0) return insertHead(data);
    if (getSize() < position || head == null) {
      return insertTail(data);
    }
    const newNode = {
      data: data,
      next: null,
    };
    let index = 0;
    let prev = head;
    let aft = head;
    while (prev != null) {
      if (index === position - 1) {
        aft = prev.next;
        newNode.next = aft;
        prev.next = newNode;
        return head;
      }
      index++;
      prev = prev.next;
    }
    return head;
  }
  return {
    insertHead,
    printList,
    insertTail,
    insertBeforePosition,
    getSize,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertBeforePosition(1, 5);
numberLinkedList.insertBeforePosition(2, 5);
numberLinkedList.insertBeforePosition(3, 5);

numberLinkedList.insertBeforePosition(10, 1);
console.log(numberLinkedList.getSize());
numberLinkedList.printList();
