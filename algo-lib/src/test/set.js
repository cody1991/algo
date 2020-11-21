const CustomSet = require('../../lib/Set');
const set = new CustomSet();

set.add(1);
console.log(set.has(1));

set.add(2);
set.add(2);
set.add(2);
set.remove(2);

console.log(set.items);
console.log(set.keys);
console.log(set.values);

console.log(set.size);

set.add(2);
set.add(3);
set.add(4);
const set2 = new CustomSet();
set2.add(2);
set2.add(3);
set2.add(5);

console.log(set.values);
console.log(set2.values);

console.log(set.union(set2).values);
console.log(set.intersection(set2).values);
console.log(set.difference(set2).values);
console.log(set2.difference(set).values);
