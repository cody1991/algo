const Tree = require('../../lib/Tree');

const tree = new Tree();

tree.insert(8);
tree.insert(2);
tree.insert(3);
tree.insert(9);

console.log(tree);

tree.traverse((val) => console.log(val));

console.log(tree.min);
console.log(tree.max);
