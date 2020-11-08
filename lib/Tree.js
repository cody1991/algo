class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
module.exports = class Tree {
  root = null;
  insertNode(parent, child) {
    if (parent.val < child.val) {
      if (parent.right === null) {
        parent.right = child;
      } else {
        this.insertNode(parent.right, child);
      }
    } else {
      if (parent.left === null) {
        parent.left = child;
      } else {
        this.insertNode(parent.left, child);
      }
    }
  }
  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  search(val) {}

  doTraverse(parent, callback) {
    if (parent === null) return;
    this.doTraverse(parent.left, callback);
    this.doTraverse(parent.right, callback);
    callback(parent.val);
  }

  traverse(callback) {
    this.doTraverse(this.root, callback);
  }
  remove(val) {}
};
