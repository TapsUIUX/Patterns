module.exports = function rangeSumBST(root, low, high) {
  if (!root) return 0;
  let curr = root.val >= low && root.val <= high ? root.val : 0;
  return (
    curr +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};
