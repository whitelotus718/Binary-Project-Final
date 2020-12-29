function preOrderArray(root) {
  if (!root) {
    return [];
  }
  let arr = [] // what is returned
  let stack = [root] // tool

while (stack.length) {
  let ele = stack.pop()
  arr.push(ele.val)
  if (ele.right){
    stack.push(ele.right)
  }
  if (ele.left){
    stack.push(ele.left)
  }
  // arr.push(ele)
  // arr.push(ele.right)
  // arr.push(ele.left)
}

return arr
}


// self, left, right
//        a
//      b   c
//    d  e    f
//  1  2 3 4

// left self right
function inOrderArray(root, arr = []) {
  if (!root) return [];
  inOrderArray(root.left, arr)
  arr.push(root.val)
  inOrderArray(root.right, arr)
  return arr
}

function postOrderArray(root) {
  if (!root) return [];

  return [
    ...postOrderArray(root.left),
    ...postOrderArray(root.right),
    root.val
  ]
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
