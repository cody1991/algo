const CustomMap = require('../../lib/Map.js');
const map = new CustomMap();

map.set('hello', 'world');
map.set('hello2', 'world2');
map.set('hello3', 'world3');

console.log(map.get('hello'));
console.log(map.get('hello2'));

map.delete('hello2');
console.log(map.get('hello2'));
console.log(map.has('hello'));

console.log(map.items);
console.log(map.keys);
console.log(map.values);

console.log(map.size);
map.clear();
console.log(map.size);
