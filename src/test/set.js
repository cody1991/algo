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
