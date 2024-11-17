module.exports = function pathsum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right && target - root.val === 0) return true;

  return (
    pathsum(root.left, target - root.val) ||
    pathsum(root.right, target - root.val)
  );
};
