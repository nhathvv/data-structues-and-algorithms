function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }
  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };
    //base case
    if (node == null) return newNode;
    if (node.key === key) return node;
    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }
  function findMin(node) {
    if (node == null) return null;
    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }
    return minNode;
  }
  function search(node, key) {
    if (node == null) return null;
    if (node.key < key) return search(node.right, key);
    if (node.key > key) return search(node.left, key);
    return node;
  }
  function getMaxNodeCounts(node) {
    if (node == null) return 0;
    const leftHeight = getMaxNodeCounts(node.left);
    const rightHeight = getMaxNodeCounts(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  function getHeight() {
    const heightNode = getMaxNodeCounts(root);
    return heightNode > 0 ? heightNode - 1 : 0;
  }
  function printNodeAtLevel(node, level) {
    if (node == null) return;
    if (level === 0) {
      console.log(node.key);
      return;
    }
    printNodeAtLevel(node.left, level - 1);
    printNodeAtLevel(node.right, level - 1);
  }
  function bfs() {
    const height = getHeight();
    for (let i = 0; i <= height; i++) {
      printNodeAtLevel(root, i);
    }
  }
  function printInOrder(node) {
    if (node == null) return;
    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  }
  function printPreOrder(node) {
    if (node == null) return;
    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
  }
  function printPostOrder(node) {
    if (node == null) return;
    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
  }
  function remove(node, key) {
    if (node == null) return null;
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    // key === node.key
    // 0 child
    if (node.left == null && node.right == null) return null;
    // 1 child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // 2 child
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }
  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodeCounts,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
    remove,
  };
}
const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));
// console.log(binarySearchTree.search(binarySearchTree.root, 8));
// console.log(binarySearchTree.getMaxNodeCounts(binarySearchTree.root));
// console.log(binarySearchTree.getHeight());
// binarySearchTree.bfs();
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 5);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 20);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 15);
binarySearchTree.bfs();
