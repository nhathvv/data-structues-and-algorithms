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
  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodeCounts,
    getHeight,
    bfs,
  };
}
const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 4]);
console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));
// console.log(binarySearchTree.search(binarySearchTree.root, 8));
console.log(binarySearchTree.getMaxNodeCounts(binarySearchTree.root));
console.log(binarySearchTree.getHeight());
binarySearchTree.bfs();
