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
    // callback(parent.val); // preorder
    this.doTraverse(parent.left, callback);
    // callback(parent.val); // inorder
    this.doTraverse(parent.right, callback);
    callback(parent.val); // afterorder
  }

  traverse(callback) {
    this.doTraverse(this.root, callback);
  }

  get min() {
    return this.doMin(this.root);
  }

  doMin(node) {
    if (!node) return;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  }

  get max() {
    return this.doMax(this.root);
  }

  doMax(node) {
    if (!node) return;
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }

  remove(val) {
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (!node) return null;

    if (node.val < val) {
      // 向右
      node.right = this.removeNode(node.right, val);
      return node;
    } else if (node.val > val) {
      // 向左
      node.left = this.removeNode(node.left, val);
      return node;
    } else {
      // 删除

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null && node.right !== null) {
        node = node.right;
        return node;
      }

      if (node.left !== null && node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right);

      node.val = aux.val;
      node.right = this.removeNode(node.right, aux.val);
      return node;
    }
  }

  findMinNode(node) {
    if (node === null) return node;

    while (node && node.left) {
      node = node.left;
    }

    return node;
  }
};
