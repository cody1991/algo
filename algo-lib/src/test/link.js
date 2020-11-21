const Link = require('../../lib/Link');

const link = new Link();

link.append(1);
link.append(2);
link.append(3);

link.insert(1, 4);
link.insert(0, 5);
link.insert(10, 6);

link.print();

console.log(link.removeAt(3));
console.log(link.removeAt(0));

link.print();

console.log(link.indexOf(1));
console.log(link.indexOf(4));
console.log(link.indexOf(3));
console.log(link.indexOf(5));

console.log(link.remove(1));
link.print();

console.log(link.isEmpty);
console.log(link.size);
