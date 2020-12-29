class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new TreeNode(val);
    if (this.root) {
      let currentNode = this.root;
      while (currentNode !== null) {
        if (node.val >= currentNode.val) {
          if (!currentNode.right) {
            currentNode.right = node;
            return this.root; // returns full directory of nodes
          } else {
            currentNode = currentNode.right;
          }
        } else {
          // node.val is less than currentNode.val
          if (!currentNode.left) {
            currentNode.left = node;
            return this.root;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    } else this.root = node;
    // console.log(node)
  }

  /*
            10
          5    16
         1 7     16

        val = 9
        cn = 10
          */


  searchRecur(val, cn = this.root) {
    if (cn === null) return false;

    if (val > cn.val) return this.searchRecur(val, cn.right)
    if (val < cn.val) return this.searchRecur(val, cn.left)
    return true;
  }

  searchIter(val) {
    if (!this.root) return false;
    let queueArr = [this.root]
    while (queueArr.length) {
      let el = queueArr.shift()
      if (el.left) queueArr.push(el.left)
      if (el.right) queueArr.push(el.right)
      if (val === el.val) return true
    }
    return false;
  }

  findMin(tree){
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

}



module.exports = {
  TreeNode,
  BST,
};
