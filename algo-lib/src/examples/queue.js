const Queue = require('../../lib/Queue.js');

function game(names, count) {
  const queue = new Queue();
  for (let index = 0; index < names.length; index += 1) {
    queue.enqueue(names[index]);
  }

  while (queue.size > 1) {
    for (i = 0; i < count - 1; i++) {
      queue.enqueue(queue.dequeue());
    }

    const nameOut = queue.dequeue();
    console.log(nameOut, 'out');
  }

  return queue.front;
}

const names = ['a', 'b', 'c', 'd', 'e', 'f'];
const count = 3;

console.log(game(names, count), 'win');
