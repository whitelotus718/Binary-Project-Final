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
    if(val < cn.val) return this.searchRecur(val, cn.left)
    return true;
	}
}
// this.root = 10
// cn = 10
// node - 5
//        10
//      5   16
//     1 7    16
//
//

// let bst = new BST()
// bst.insert(10);
// bst.insert(5);
// bst.insert(1);
// bst.insert(16);
// bst.insert(16);
// bst.insert(7);

// console.log(bst)
module.exports = {
	TreeNode,
	BST,
};
