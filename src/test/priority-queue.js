const PriorityQueue = require('../../lib/PriorityQueue');

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(1, 1);
priorityQueue.enqueue(2, 2);
priorityQueue.enqueue(4, 4);
priorityQueue.enqueue(3, 3);
priorityQueue.dequeue();

console.log(priorityQueue.size);
console.log(priorityQueue.isEmpty);
console.log(priorityQueue.front);
priorityQueue.print();
