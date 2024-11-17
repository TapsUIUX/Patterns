module.exports = function isSymetric(root) {
  function dfs(p, q) {
    if (!p && !q) return true;
    else if (!p || !q) return false;

    return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
  }
  return dfs(root.left, root.right);
};
