function findMin(tree) {
	if (!tree) return null;
	if (!tree.left) return tree;
	if (!tree.left || !(tree.left || tree.right)) return tree;

	let currentNode = tree.left;
	while (currentNode.left) {
		currentNode = currentNode.left;
	}
	return currentNode;
}

module.exports = {
	findMin,
};
