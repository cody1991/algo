const Tree = require('../../lib/Tree');

const tree = new Tree();

tree.insert(4);
tree.insert(1);
tree.insert(5);

console.log(tree);

tree.traverse((val) => console.log(val));
