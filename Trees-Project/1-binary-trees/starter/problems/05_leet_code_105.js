// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {
  const nodes = preorder.map(el => new TreeNode(el));

  let root = nodes[0];

  for (let i = 0; i < nodes.length - 2; i += 2) {
    nodes[i].left = nodes[i + 1];
    nodes[i].right = nodes[i + 2];
  }

  // for (let i = 0; i < nodes.length; i++) {
  //   if (i === 0) {
  //     root = nodes[0];
  //   }

  //   if(i === 1) {
  //     root.left = nodes[i];
  //   }

  //   if(i ===2) {
  //     root.right = nodes[i];
  //   }

  //   if (i === 3) {
  //     root.right.left = nodes[i];
  //   }

  //   if (i === 4) {
  //     root.right.right = nodes[i];
  //   }

  //   console.log('root:', root);
  // }

  return root;
}

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

console.log(buildTree(preorder, inorder));

// self, left, right
/*
        3
      9   20

*/
