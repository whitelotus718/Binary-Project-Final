function findMin(tree) {
    if (!tree) return null;
    if (!tree.left) return tree;
    if (!tree.left && !tree.right) return tree
    if (tree.left) {
      let currentNode = tree.left
      while (currentNode.left) {
        currentNode = currentNode.left
      }
      return currentNode;
    }
  }

module.exports = {
  findMin
};