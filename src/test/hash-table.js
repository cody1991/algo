const HashTable = require('../../lib/HashTable');

const hashTable = new HashTable();

console.log(hashTable.loseHashCode('Jobs'));

hashTable.put('cody', 'codytang');
hashTable.put('bob', 'fatbob');

console.log(hashTable.items);

console.log(hashTable.remove('name'));

console.log(hashTable.items);

console.log(hashTable.get('cody'));
