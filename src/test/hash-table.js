const HashTable = require('../../lib/HashTable');

const hashTable = new HashTable();

hashTable.put('Ana', 'codytang');
hashTable.put('Donnie', 'fatbob');
console.log(hashTable.remove('name'));

console.log(hashTable.items);

console.log(hashTable.get('Donnie'));
console.log(hashTable.get('Ana'));

hashTable.remove('Ana');

console.log(hashTable.items);
console.log(hashTable.get('Ana'));
console.log(hashTable.get('Donnie'));

hashTable.remove('Donnie');

console.log(hashTable.items);
console.log(hashTable.get('Ana'));
console.log(hashTable.get('Donnie'));
