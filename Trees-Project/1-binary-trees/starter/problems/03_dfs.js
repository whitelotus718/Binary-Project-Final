function dfs(root) {
	if (!root) return [];

  return [
    root.val,
    ...dfs(root.left),
    ...dfs(root.right)];
}

module.exports = { dfs };
