function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function insertHead(data) {
    const newNode = {
      data,
      next: null,
    };

    // in case linked list is empty, use it as head
    if (!head) {
      head = newNode;
      return head;
    }

    // Otherwise, assign head to newNode
    newNode.next = head;
    head = newNode;
    return head;
  }

  function some(isValidFn) {
    // your code here
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (isValidFn(current.data)) return true;
      current = current.next;
    }
    return false;
  }

  return {
    getHead,
    insertHead,
    some,
  };
}
