const Queue = require('../../lib/Queue.js');

const queue = new Queue();

console.log(queue.isEmpty);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.front);
console.log(queue.size);
console.log(queue.dequeue());

queue.print();
